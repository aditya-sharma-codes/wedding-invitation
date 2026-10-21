# Himanshu & Anjani — Royal Indian Wedding Invitation Website

A luxury, interactive traditional royal Indian wedding invitation microsite created for:  
**Himanshu Sharma Weds Anjani Sharma** (हिमांशु शर्मा संग अंजनी शर्मा)  
**Wedding Date:** 30 November 2026 (सोमवार)

---

## 👑 Features & Architecture

### 1. Opening Screen: 1:1 Square Royal Indian Wedding Card
- **Authentic Digital Recreation**: Designed with exact Indian miniature painting aesthetics, Mughal scalloped arch, floral borders, and royal ceremonial elephants.
- **Physical Square Geometry**: Perfectly balanced 1:1 aspect ratio that scales responsively across Desktop, Tablet, and Mobile.
- **Lantern Candle Glows**: 4 animated candlelight glows for the hanging brass lanterns.
- **Interactive Wax-Seal OPEN Button**: Circular maroon embossed medallion (`assets/card/layer-open-button.png`) with golden aura and tactile hover state.

### 2. Cinematic Couple Reveal Transition
- **Spatial Content Wipe**: Smooth horizontal unmasking from Left → Right uncovering the real Home Page in the wake of the couple.
- **Pure Transparent Artwork**: Bride and groom gracefully gliding across the canvas (`assets/illustrations/couple-reveal.png`) with zero rectangular bounding box or container artifacts.
- **Solid Warm Ivory Canvas**: `#FAF5EB` background with ambient film grain overlay (`.ambient-grain`).

### 3. Main Home Page
- **Illustrated Asset Suite (`assets/illustrations/`)**:
  - `floral-corner-left.png` & `floral-corner-right.png`: Symmetrical Rajasthani floral corner illustrations.
  - `floral-corner-left-transparent.png` & `floral-corner-right-transparent.png`: Transparent cutouts framing the hero section.
  - `royal-mandap-gateway.png`: Carved Mughal/Rajasthani royal mandap arch with columns, dome kalash, bells, and tassels.
  - `royal-palace-lantern.png`: Antique brass hanging palace lanterns.
  - `royal-floral-mandala.png`: Detailed royal Indian floral mandala medallion with optically spaced monogram (`H   &   A`).
  - `royal-ceremonial-elephant-right.png` & `royal-ceremonial-elephant-left.png`: Symmetrical ceremonial caparisoned elephants.
- **Bilingual Support**: Instant live switcher between English and Hindi (`[ EN | हि ]`) with complete Devanagari typography.
- **Ceremony Timeline**: Hanuman Aradhana, Puja Matkor, Haldi Ceremony, and Baarat Departure with custom calendar (.ICS) triggers.
- **Real-Time Countdown**: Auspicious countdown clock ticking down to the wedding vows on 30 November 2026.
- **Interactive Blessings & Wishes**: Floating guest blessings modal form and direct WhatsApp sharing.
- **Traditional Ambient Audio**: Royal Shehnai background soundtrack with toggle control.

---

## 🚀 Live Deployment & Local Setup

### Live on GitHub Pages
This repository is configured for direct deployment with GitHub Pages:
1. Go to **Settings** → **Pages**
2. Under **Branch**, select `main` and `/ (root)`
3. Click **Save**

### Local Setup
Simply open `index.html` in any modern web browser, or serve locally:
```bash
# Using Node.js
npx serve .

# Using Python
python -m http.server 8000
```

---

## 🎨 Design System
- **Colors**: Warm Ivory Parchment (`#FAF5EB`), Royal Maroon (`#7A1A24`, `#540E16`), Antique Gold (`#C59A4E`, `#E8D39E`, `#D4AF37`), Olive Green (`#4A583A`), Dark Charcoal Ink (`#241B18`).
- **Typography**: `Cinzel`, `Cormorant Garamond`, `Alex Brush`, `Montserrat`, `Noto Serif Devanagari`.
