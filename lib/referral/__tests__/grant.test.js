import { describe, it, expect } from "vitest";
import {
  computeEndTime,
  effectiveGrantDays,
  MAX_STACK_DAYS,
} from "../grant.js";

const DAY = 86400 * 1000;
const now = Date.parse("2026-08-15T00:00:00.000Z");

const at = (args) => computeEndTime({ alreadyGrantedDays: 0, now, ...args });

describe("computeEndTime", () => {
  it("grants from now when there is no current entitlement", () => {
    expect(at({ currentExpiryMs: null, days: 7 })).toBe(now + 7 * DAY);
  });

  it("stacks on top of an unexpired entitlement", () => {
    // The whole reason this function exists. RevenueCat's promotional grant
    // takes an ABSOLUTE end_time_ms, so a naive now + days would silently
    // discard every previous reward.
    const current = now + 10 * DAY;
    expect(at({ currentExpiryMs: current, days: 14 })).toBe(current + 14 * DAY);
  });

  it("treats an already expired entitlement as now", () => {
    expect(at({ currentExpiryMs: now - 30 * DAY, days: 7 })).toBe(now + 7 * DAY);
  });

  it("caps on LIFETIME granted days, not on absolute end time", () => {
    // 63 already banked, asking for 14 more: only 7 remain under the cap.
    expect(
      at({ currentExpiryMs: now + 63 * DAY, days: 14, alreadyGrantedDays: 63 })
    ).toBe(now + 70 * DAY);
  });

  it("adds nothing once the lifetime cap is spent", () => {
    const current = now + 70 * DAY;
    expect(
      at({ currentExpiryMs: current, days: 30, alreadyGrantedDays: 70 })
    ).toBe(current);
  });

  it("NEVER shortens a paid subscriber's entitlement", () => {
    // The bug this test exists to prevent: capping the absolute end time would
    // claw a 300-day annual subscriber back to 70 days the moment they
    // referred someone, revoking access they paid for. The cap bounds what we
    // ADD, it is not a ceiling on their access.
    const paidExpiry = now + 300 * DAY;
    expect(at({ currentExpiryMs: paidExpiry, days: 30 })).toBe(
      paidExpiry + 30 * DAY
    );
  });

  it("still caps a paid subscriber's banked referral days", () => {
    const paidExpiry = now + 300 * DAY;
    expect(
      at({ currentExpiryMs: paidExpiry, days: 30, alreadyGrantedDays: 60 })
    ).toBe(paidExpiry + 10 * DAY);
  });

  it("caps at 70 days, matching Duolingo's published ceiling", () => {
    expect(MAX_STACK_DAYS).toBe(70);
  });

  it("never returns a time before now", () => {
    expect(at({ currentExpiryMs: null, days: 0 })).toBe(now);
  });

  it("treats a granted total above the cap as spent, not as negative credit", () => {
    const current = now + 90 * DAY;
    expect(
      at({ currentExpiryMs: current, days: 30, alreadyGrantedDays: 999 })
    ).toBe(current);
  });
});

describe("effectiveGrantDays", () => {
  it("returns the full request when the cap is untouched", () => {
    expect(effectiveGrantDays({ days: 30, alreadyGrantedDays: 0 })).toBe(30);
  });

  it("returns only what remains under the cap", () => {
    expect(effectiveGrantDays({ days: 14, alreadyGrantedDays: 63 })).toBe(7);
  });

  it("returns zero once the cap is spent", () => {
    expect(effectiveGrantDays({ days: 30, alreadyGrantedDays: 70 })).toBe(0);
    expect(effectiveGrantDays({ days: 30, alreadyGrantedDays: 999 })).toBe(0);
  });

  it("is what the ledger records, so a capped grant cannot inflate the total", () => {
    // Recording the REQUESTED 14 here instead of the granted 7 would push the
    // running total to 77, tightening the cap against itself on every later
    // referral until it paid out nothing.
    const granted = effectiveGrantDays({ days: 14, alreadyGrantedDays: 63 });
    expect(granted + 63).toBe(MAX_STACK_DAYS);
  });
});
