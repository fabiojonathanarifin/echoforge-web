import { describe, it, expect } from "vitest";
import { resolveTier, PRODUCT_TIERS, PROTOS_SKU_PREFIX } from "../tiers.js";

const rewards = {
  free: { referrer_days: 7, referee_days: 7 },
  weekly: { referrer_days: 14, referee_days: 14 },
  quarterly: { referrer_days: 14, referee_days: 14 },
  monthly_legacy: { referrer_days: 14, referee_days: 14 },
  annual: { referrer_days: 30, referee_days: 30 },
};

const at = (productIdentifier, override = null) =>
  resolveTier({ override, productIdentifier, rewards });

describe("resolveTier, no override", () => {
  it("falls back to free with no product", () => {
    expect(at(null)).toEqual({
      tier: "free",
      referrerDays: 7,
      refereeDays: 7,
      usedOverride: false,
    });
  });

  it("maps the live weekly SKU", () => {
    expect(at("com.fabiojonathana.protos.Weekly").tier).toBe("weekly");
  });

  it("maps the live annual SKU", () => {
    expect(at("com.fabiojonathana.protos.Annual").tier).toBe("annual");
  });

  it("maps the discounted annual SKU to annual, not free", () => {
    // Annual50 is the promoPaywall's 50%-off annual. It is a real purchase and
    // its buyer is an annual subscriber.
    expect(at("com.fabiojonathana.protos.Annual50").tier).toBe("annual");
  });

  it("maps the grandfathered monthly SKU", () => {
    expect(at("com.fabiojonathana.protos.Monthly").tier).toBe("monthly_legacy");
  });

  it("treats a promotional entitlement as free", () => {
    // Verified in production: rc_promo_* identifiers carry
    // subscription_platform 'ios' exactly like a real purchase, so the
    // identifier is the only thing separating comped from paid.
    expect(at("rc_promo_Premium_custom").tier).toBe("free");
    expect(at("rc_promo_Premium_yearly").tier).toBe("free");
  });

  it("treats an UNKNOWN Protos SKU as paid, not free", () => {
    // The quarterly SKU does not exist yet. An unrecognised Protos product is
    // still a real purchase, so failing to the base paid tier is correct and
    // failing to free is not. Quarterly happens to be 14 days, so it resolves
    // correctly the day it ships with no code change.
    const result = at("com.fabiojonathana.protos.Quarterly");
    expect(result.tier).toBe("weekly");
    expect(result.refereeDays).toBe(14);
  });

  it("treats a foreign identifier as free", () => {
    expect(at("com.someoneelse.app.Annual").tier).toBe("free");
  });

  it("exposes the SKU prefix it keys on", () => {
    expect(PROTOS_SKU_PREFIX).toBe("com.fabiojonathana.protos.");
    expect(Object.keys(PRODUCT_TIERS).length).toBeGreaterThan(0);
  });
});

describe("resolveTier, with override", () => {
  const override = {
    referrer_days: 0,
    referee_days: 180,
    max_redemptions: 50,
    used_count: 3,
  };

  it("lets an override win over a paid plan", () => {
    expect(at("com.fabiojonathana.protos.Annual", override)).toEqual({
      tier: "override",
      referrerDays: 0,
      refereeDays: 180,
      usedOverride: true,
    });
  });

  it("falls back to the plan tier once the override is exhausted", () => {
    const spent = { ...override, used_count: 50 };
    const result = at("com.fabiojonathana.protos.Annual", spent);
    expect(result.tier).toBe("annual");
    expect(result.usedOverride).toBe(false);
  });

  it("falls back to free when an exhausted override has no paid plan", () => {
    const spent = { ...override, used_count: 50 };
    expect(at(null, spent).tier).toBe("free");
  });

  it("treats a null max_redemptions as unlimited", () => {
    const unlimited = { ...override, max_redemptions: null, used_count: 999 };
    expect(at(null, unlimited).usedOverride).toBe(true);
  });

  it("treats used_count above the cap as exhausted, not as a wrap-around", () => {
    const over = { ...override, used_count: 51 };
    expect(at(null, over).usedOverride).toBe(false);
  });
});
