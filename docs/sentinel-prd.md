# PRD — Spatial Intelligence Command Center

## Product Name

**SENTINEL**

Tagline:

> See the world like an intelligence analyst.

---

# 1. Product Goal

Build a **browser-based spatial intelligence system** that fuses open-source data feeds into a **modern, premium command interface** with an AI brain that understands what it's showing you.

The experience should feel like:

```
Palantir Foundry / modern defense tech / premium data platform
```

But powered only by **public data** and **AI analysis**.

**What makes SENTINEL different from WorldView:**

WorldView is a beautiful viewer with no brain. SENTINEL is an intelligent system that understands, analyzes, and responds to spatial data in real time. The AI layer is the core differentiator — not an afterthought.

Success metric:

```
Someone sees the demo and thinks
"this isn't just a viewer — it actually understands the world."
```

---

# 2. Core User Experience

### Opening screen

User loads site.

They see a **dark, clean command interface** with:

```
circular viewport framing a 3D globe
extruded city buildings
satellite and aircraft overlays
frosted glass panels
```

---

### Navigation

User can:

```
pan
zoom
tilt
orbit
```

around a city.

---

### Data layers appear

Example overlays:

```
aircraft (commercial + military)
satellites (180+ tracked)
traffic flow (particle system)
CCTV feeds (public cameras)
```

Objects move in real time.

---

### Mode switching

User toggles display modes:

```
CRT
Night Vision
Thermal (FLIR)
Panoptic
Blueprint / Wireframe
```

The world instantly changes visual style.

---

### Object interaction

Clicking a satellite or aircraft shows:

```
callsign
altitude
velocity
orbit path
classification (commercial / military / unknown)
```

---

### AI Intelligence Layer (Core Feature)

The AI doesn't just summarize — it actively watches and communicates:

**Real-time briefings:**

```
Spatial Activity Report

- 17 aircraft entering London airspace
- 2 Earth observation satellites passing overhead
- Unusual military flight pattern detected near coastal region
- Heavy traffic density on M25 corridor
```

**Natural language queries — "Query the World":**

```
"Which satellites are over London right now?"
"Show military aircraft near Taiwan"
"What's unusual in this area?"
```

LLM converts query to structured filters, backend returns matching objects, camera flies to location, map highlights results.

**Live alerts:**

The system pushes notifications when interesting things happen in watched areas:

```
- Satellite pass over conflict zone
- Military aircraft entering unusual airspace
- Anomalous traffic pattern detected
```

---

# 3. Visual Design (Critical)

The viral impact comes from **premium aesthetic design**. The brand identity is a clean, minimal eye icon. The UI matches: modern, dark, sophisticated.

### Design language

```
Modern sans-serif (Inter) for UI elements
Monospace (JetBrains Mono) only for data readouts (callsigns, coordinates, timestamps)
Frosted glass panels with subtle borders and backdrop blur
Neutral color palette: whites, silvers, cool grays on near-black
Single accent color (blue) for active states and highlights
```

### Circular viewport

The globe is rendered inside a **circular mask** with a subtle border ring. Minimal frame: just a "SENTINEL" wordmark at top and a UTC timestamp at bottom. No reticles, crosshairs, or grid overlays.

---

### UI panels

Left panel:

```
data layer toggles
camera controls
```

Right panel:

```
visual settings
intensity / distortion / noise sliders
```

Bottom bar:

```
display mode switching
location presets
AI query input
```

---

# 4. Data Sources

All free. No paid APIs required.

## Aircraft

**OpenSky Network** (free, no auth for basic use)

Shows:

```
live aircraft
altitude
speed
callsign
```

Optional upgrade: OpenSky account (free registration) removes rate limits (10 req/min -> 100 req/min).

---

## Military Aircraft (Future Enhancement)

**ADS-B Exchange** (paid ~$10/mo via RapidAPI)

Adds:

```
military flight tracking
classified callsigns (FORTE12, etc.)
```

Not required for MVP. Can add later.

---

## Satellite Orbits

**CelesTrak** (free, no auth)

Target: **180+ satellites tracked**

Provides:

```
orbital path
satellite position
pass timing
click-to-follow orbit tracking
```

---

## Road Network

**OpenStreetMap** (free, no auth)

Used to generate:

```
vehicle particle flows
```

---

## CCTV Feeds

Public traffic cameras (free).

Example:

```
Austin traffic cams
London street cams
```

Geographically located and overlaid on the map.

---

# 5. Rendering Engine

Core framework:

**CesiumJS + Cesium Ion** (free tier)

3D buildings via **Cesium OSM Buildings** (free):

```
worldwide 3D building geometry from OpenStreetMap
extruded buildings (not photorealistic)
clean geometry works well with tactical shaders
```

Why this works:

```
3D globe with building geometry
satellite orbit simulation
WebGL shader performance
clean geometry works well with modern dark UI
zero cost
upgrade path to Google 3D Tiles later (one line swap)
```

---

# 6. Visual Modes (Shader Pipeline)

Optional display modes that enhance the viewing experience. The **default (Normal) mode is clean and modern**. Shader modes are power-user features, not the core aesthetic.

### CRT Mode

Adds:

```
scanlines
screen distortion
noise
```

---

### Night Vision

Green color grading.

Simulates:

```
military NVG goggles
```

---

### Thermal (FLIR)

Heatmap gradient shader.

---

### Panoptic Mode

Highlights objects detected in scene.

Boxes appear around:

```
vehicles
planes
objects
```

---

### Blueprint / Wireframe Mode

Strips everything to raw geometry and data overlays.

```
wireframe buildings
data callouts
grid coordinates
clean technical drawing aesthetic
```

---

# 7. AI Layer (Core Differentiator)

**This is what separates SENTINEL from every other globe viewer.**

LLM: **OpenAI API**

### Intelligence Briefings

Pipeline:

```
collect visible objects
  |
format dataset
  |
send to OpenAI
  |
generate briefing
```

Example output:

```
SENTINEL INTELLIGENCE BRIEF — STRAIT OF HORMUZ
2026-03-07 14:32 UTC

- 4 aircraft detected in holding pattern near Bandar Abbas — consistent with IRGC exercise staging
- NROL-44 (US reconnaissance satellite) pass over Isfahan in 22 minutes
- Commercial shipping density down 18% from baseline — possible naval advisory in effect
- 2 tanker aircraft (KC-135 callsigns) orbiting over Qatar — indicates active aerial refueling ops
- Unusual flight path deviation: commercial flights routing south of standard Hormuz corridor
```

---

### Query the World (Natural Language)

Input box:

```
Ask the world...
```

Examples:

```
"What satellites are passing over Iran right now?"
"Show all aircraft near the Strait of Hormuz"
"Any unusual flight activity near Isfahan?"
"Which US bases in the Gulf have active flights?"
"Show me tanker aircraft — who's refueling right now?"
"What's happening in the Red Sea?"
```

Pipeline:

```
user query
  |
OpenAI parses to structured filters
  |
backend returns matching objects
  |
camera flies to location
  |
map highlights results
  |
AI narrates findings
```

---

### Live Anomaly Alerts

System monitors data feeds and flags unusual activity:

```
- ALERT: Reconnaissance satellite entering Isfahan observation window
- ALERT: Multiple aircraft departing Bandar Abbas — possible IRGC sortie
- ALERT: Commercial flights rerouting away from Strait of Hormuz
- ALERT: Tanker aircraft orbiting over Qatar — active refueling ops
- ALERT: Shipping traffic in Bab el-Mandeb below 30-day average
- ALERT: Unusual holding pattern detected near Israeli airspace
```

Alerts appear as tactical notifications in the UI.

---

# 8. Location Presets (Narrative-Driven)

Each preset loads with a pre-generated briefing. Not just coordinates — stories.

Primary theater: **Iran / US / Israel conflict zone**

```
Strait of Hormuz — world's most critical oil chokepoint, ~21M barrels/day transit
Bandar Abbas, Iran — IRGC naval base, missile installations, submarine pens
Isfahan, Iran — nuclear enrichment facility, frequent satellite surveillance target
Tehran — capital airspace, military & civilian flight corridors
Natanz, Iran — underground nuclear facility, high satellite revisit rate
Eastern Mediterranean — Israeli Air Force corridors, US carrier patrol zones
Haifa / Tel Aviv — Israeli defense infrastructure, Iron Dome coverage zones
Incirlik Air Base, Turkey — US/NATO forward operating base
Al Udeid Air Base, Qatar — largest US air base in Middle East, CENTCOM forward HQ
Al Dhafra Air Base, UAE — US drone & fighter operations
Red Sea / Bab el-Mandeb — Houthi shipping disruption zone, naval intercepts
Gulf of Aden — coalition naval patrol corridor
```

Secondary presets (for variety in demos):

```
London Heathrow — dense commercial airspace demo
Austin, TX — CCTV + traffic fusion demo
```

---

# 9. System Architecture

### Frontend

```
React
CesiumJS
Tailwind CSS
Inter (sans-serif) + JetBrains Mono (data readouts)
WebGL shaders
Frosted glass panel system
```

Responsibilities:

```
render globe + OSM Buildings
display data overlays
run shader pipeline
handle interaction
AI query interface
```

---

### Backend

Minimal API.

```
Node.js
Express
```

Responsibilities:

```
fetch OSINT feeds (OpenSky, CelesTrak, OSM)
normalize data
serve to frontend
proxy OpenAI requests
anomaly detection logic
```

---

### Database

None for MVP — **in-memory data storage**.

---

### LLM

**OpenAI API**

Endpoints:

```
/generate-briefing — activity summary from visible data
/parse-query — natural language to structured filters
/detect-anomalies — flag unusual patterns
```

---

# 10. API Keys & Services

| Service         | Cost                       | Auth Required                                  |
| --------------- | -------------------------- | ---------------------------------------------- |
| Cesium Ion      | Free                       | Token (free signup)                            |
| OpenSky Network | Free                       | None (optional account for higher rate limits) |
| CelesTrak       | Free                       | None                                           |
| OpenStreetMap   | Free                       | None                                           |
| OpenAI API      | ~$0.01-0.05 per briefing   | API key                                        |
| ADS-B Exchange  | ~$10/mo (optional, future) | API key via RapidAPI                           |

---

# 11. Build Plan

### Phase 1 — Globe & Foundation

```
setup CesiumJS with Cesium Ion
load OSM Buildings (3D city geometry)
camera controls (pan, zoom, tilt, orbit)
circular viewport mask with minimal frame
modern UI shell (frosted glass panels, bottom bar)
Inter typography + monospace for data
```

---

### Phase 2 — Data Layers

```
satellite tracking (CelesTrak TLE data)
aircraft tracking (OpenSky Network)
road traffic particles (OpenStreetMap)
CCTV feed overlay (public cameras)
```

---

### Phase 3 — Shader Pipeline

```
CRT mode
Night Vision mode
Thermal (FLIR) mode
Panoptic mode
Blueprint / Wireframe mode
```

---

### Phase 4 — AI Intelligence Layer

```
OpenAI integration
generate-briefing endpoint
query parsing (natural language -> filters)
camera fly-to on query results
live anomaly detection + alerts
```

---

### Phase 5 — Polish & Demo

```
location presets with narrative briefings
interaction polish (click objects, follow satellites)
demo scenarios
record demo video
```

---

# 12. Demo Scenarios

### Strait of Hormuz — "The Chokepoint"

Open on the Strait in night vision mode. Aircraft moving through Iranian and Omani airspace. AI briefing narrates oil transit volume, naval presence, flight pattern analysis. Switch to FLIR. The tension is immediate.

---

### Isfahan Nuclear Watch

Satellite view over Isfahan. Track a reconnaissance satellite approaching the facility. AI alerts: "NROL-44 entering observation window — estimated 6-minute pass." Switch to blueprint mode to see the facility geometry.

---

### Gulf Air Operations

Zoom to Al Udeid / Al Dhafra. Show tanker aircraft orbiting in refueling tracks. AI identifies KC-135 callsigns and estimates sortie tempo. "Refueling activity 40% above 30-day baseline."

---

### Red Sea Disruption

Pan to Bab el-Mandeb strait. Show reduced shipping traffic. AI: "Commercial vessel transit down 31% — Houthi maritime threat advisory in effect." Night vision mode over the water.

---

### Query the World — Live Demo

Type: "What's happening near Iran right now?"

Camera flies to the Persian Gulf. All aircraft, satellites, and data layers light up. AI narrates a real-time intelligence briefing of everything visible. This is the money shot.

---

### Bonus: London Heathrow

Show dense commercial airspace as a contrast — "this is what normal looks like." Then cut back to Hormuz — "this is what a conflict zone looks like."

---

# 13. What This Project Actually Is

```
3D world viewer with building geometry
+
real-time OSINT data overlays
+
clean, premium interface with optional visual modes
+
AI intelligence layer that understands and analyzes
```

Not just a viewer. An intelligent spatial command system.

WorldView showed what the view looks like.
SENTINEL shows what happens when the view has a brain.

---

# 14. Viral Strategy

**Focus: Iran / US / Israel conflict theater**

This is one of the most actively monitored regions on Earth right now. Everyone is watching the news — SENTINEL lets them _see_ it.

The hook:

```
"I built a tool that lets you monitor the Iran conflict like an intelligence analyst.
All public data. All real-time. Running in your browser."
```

Target audiences for virality:

```
- OSINT Twitter/X community (massive, engaged, shares tools)
- Geopolitics / defense Twitter
- Tech Twitter ("one person built this" narrative)
- Reddit: r/OSINT, r/geopolitics, r/worldnews
- YouTube: demo walkthrough video
```

The contrast that sells it:

```
Governments spend billions on systems like this.
You're running it in a browser tab for free.
```
