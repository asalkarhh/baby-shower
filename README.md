# स्नेहलचे डोहाळे जेवण — डिजिटल निमंत्रण पत्रिका
### Snehal & Rohan’s Dohale Jevan (Marathi Baby Shower) Digital Invitation Website

A mobile-first, single-page Marathi digital invitation website for **Snehal’s डोहाळे जेवण**, featuring **Snehal and Rohan**. Crafted with a premium Maharashtrian aesthetic inspired by Snehal's deep peacock teal saree with copper-gold border.

Built with **React 18, TypeScript, and Vite**, completely static with zero external runtime CDN dependencies.

---

## 🌟 Key Highlights & Design Direction

- **Mobile-First for WhatsApp**: Optimized specifically for guests opening links on phones (360px–430px wide) while presenting a centered royal invitation scroll on desktop displays.
- **Deep Peacock Teal & Antique Gold Palette**: Rich teal backgrounds (`#031417`, `#052126`), copper-gold accents (`#C87D55`), warm ivory text (`#FDFBF7`), and soft golden foil borders.
- **Authentic Photoshoot Integration**:
  - **Hero Portrait**: Rohan (in olive-green kurta) and Snehal (in peacock-teal saree with copper border) standing together, with both faces fully in frame across all viewport widths.
  - **Supporting Portrait**: Snehal standing solo holding the sacred peacock feather.
  - **Curated Gallery**: Snehal seated with the holy book, Snehal in the elegant mauve gown, and couple portrait in mauve & mustard.
  - **Photographer Credit**: Preserves the original photographer watermark (*प्रेम डिजिटल PHOTOGRAPHY & FILM*).
- **100% Local & Self-Hosted Assets**:
  - No external Google Fonts, CDNs, or external APIs at runtime.
  - Bundled Devanagari typefaces: **Mukta** (by Ek Type) & **Rozha One** under the SIL Open Font License 1.1 (licenses included in `public/fonts/`).
- **Gentle Instrumental Music (पारंपरिक डोहाळे गीत)**:
  - Bundled with a festive, traditional Maharashtrian Dohale Geet melody ("कशी नटली गं बाई / रूप आले साजिरे") featuring acoustic flute (बासरी), traditional folk dholki rhythm, manjira chimes, and tanpura drone.
  - Silent by default (respects browser autoplay policies). Starts when the guest taps **"डोहाळे गीत ऐका"** and provides a visible **"संगीत बंद करा"** button.
  - **Want to use your own recorded Marathi song MP3?**:
    Simply copy your `.mp3` file to `public/audio/my-song.mp3` and update the paths in `src/config/eventDetails.ts`:
    ```typescript
    music: {
      audioSrcMp3: '/audio/my-song.mp3',
      // ...
    }
    ```
- **Event Location (Google Maps)**:
  - Exact verified Google Maps link to **बालाजी मंगल कार्यालय, दहिवडी**:  
    `https://maps.app.goo.gl/e9V8UtT39Br83LEa9?g_st=aw`
- **Native Sharing & Copy Fallback**:
  - **"निमंत्रण शेअर करा"** triggers native Web Share on mobile devices and gracefully falls back to clipboard copy on desktops with the Marathi confirmation toast: *“निमंत्रणाची लिंक कॉपी झाली.”*
- **Accessible & Performance-Minded**:
  - `lang="mr"`, Devanagari numerals (`११ नोव्हेंबर २०२६`, `सकाळी ११ वाजता`), full keyboard accessibility for the lightbox modal (Escape, Arrow keys), and respects `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite 5**
- **Vanilla CSS** with modern custom properties, CSS Grid, and responsive fluid typography
- **Lucide React** (icons)
- **Mukta** & **Rozha One** (Devanagari Web Fonts via Fontsource)

---

## 🚀 Local Development Setup

To run this project on your local machine:

```bash
# 1. Install dependencies
npm install

# 2. Start local Vite development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build the production bundle into dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## ✏️ Where to Edit Event Details

All ceremony information, Marathi copy, dates, times, venue details, and links are centralized in a single configuration file:

📁 **`src/config/eventDetails.ts`**

You can update:
- **दिनांक (Date)**: `details.dateValue` (उदा. `बुधवार, ११ नोव्हेंबर २०२६`)
- **वेळ (Time)**: `details.timeValue` (उदा. `सकाळी ११ वाजता`)
- **स्थळ (Venue)**: `details.venueName` (`बालाजी मंगल कार्यालय`), `details.venueCity` (`दहिवडी`)
- **गुगल मॅप्स लिंक (Google Maps URL)**: `details.mapsUrl`
- **निमंत्रक (Host Family)**: `closing.hostName` (`उंडाळे परिवार`)
- **पालकांची नावे (Names)**: `coupleNames`, `motherName`, `fatherName`
- **कविता / चारोळी (Poem)**: `poeticCouplet`
- **निमंत्रण संदेश (Invitation Message)**: `invitationMessage`

---

## 🌐 WhatsApp / Social Share Preview Image Setup

When guests share the invitation on WhatsApp, Facebook, or Twitter, the preview card displays a title, description, and photo.

1. Open **`index.html`**.
2. Locate the `<meta property="og:image">` and `<meta name="twitter:image">` tags.
3. Once you deploy to Vercel (e.g. `https://snehal-dohale-jevan.vercel.app`), update the relative path `/images/hero-rohan-snehal.jpg` to your full domain:
   ```html
   <meta property="og:image" content="https://your-vercel-domain.vercel.app/images/hero-rohan-snehal.jpg" />
   ```
4. Also update `siteTitle` and `canonicalUrl` in `src/config/eventDetails.ts` if desired.

---

## 📦 How to Push to GitHub

To push this codebase to a new repository on your GitHub account:

1. Create a new repository on GitHub (e.g. `snehal-dohale-jevan`). Do **not** initialize it with a README or `.gitignore` (they are already included here).
2. In your terminal, run the following commands:

```bash
# 1. Stage all project files
git add .

# 2. Create the initial commit
git commit -m "Complete Marathi digital invitation for Snehal & Rohan Dohale Jevan"

# 3. Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git

# 4. Push to the main branch
git push -u origin main
```

---

## ⚡ How to Deploy to Vercel

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** → **Project**.
3. Select your newly pushed GitHub repository (`<your-repo-name>`) and click **Import**.
4. In the **Configure Project** screen:
   - **Framework Preset**: Select **Vite** (auto-detected).
   - **Root Directory**: `./` (leave default).
   - **Build Command**: `npm run build` (auto-detected).
   - **Output Directory**: `dist` (auto-detected).
   - **Environment Variables**: None needed (pure static website).
5. Click **Deploy**.
6. Within 30 seconds, Vercel will provide your production URL (e.g., `https://snehal-dohale-jevan.vercel.app`).
7. Open the URL on your mobile phone and test it directly in WhatsApp!

---

## 📄 License & Asset Attribution

- **Fonts**:
  - [Mukta](https://github.com/EkType/Mukta) © 2015 Ek Type (info@ektype.in) — Licensed under the **SIL Open Font License, Version 1.1** (`public/fonts/LICENSE-MUKTA.txt`).
  - [Rozha One](https://github.com/itfoundry/rozhaone) © 2014 Indian Type Foundry (info@indiantypefoundry.com) — Licensed under the **SIL Open Font License, Version 1.1** (`public/fonts/LICENSE-ROZHA-ONE.txt`).
- **Photographs**: Original maternity photoshoot by **प्रेम डिजिटल PHOTOGRAPHY & FILM**.
- **Audio**: Original Indian classical flute loop composed specifically for this project (warm acoustic bansuri, tanpura Sa-Pa drone, and soft manjira pulse).

