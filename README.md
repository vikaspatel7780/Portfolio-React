# 🚀 Vikas Patel — Mobile AI & Full Stack Engineer Portfolio

A state-of-the-art, high-performance, responsive personal portfolio web application built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Featuring interactive 3D tilt effects, an ambient particle constellation background, a Spotlight cursor glow, a `Cmd+K` command palette, an interactive AI prompt simulator, shared-element project modal expansions, and mobile-first glassmorphism.

---

## ✨ Features & Interactive Highlights

- 🌌 **Constellation Background**: An ambient HTML5 Canvas particle system connected with dynamic glowing proximity lines that react to cursor movement.
- ✨ **Spotlight Cursor**: An interactive radial spotlight glow that dynamically tracks the cursor across desktop glass cards.
- 🔍 **Cmd+K Command Palette**: Press `Cmd+K` / `Ctrl+K` or click the search icon in the navbar to open an instant command search palette to jump to sections, GitHub, or download the PDF resume.
- 🤖 **Interactive AI Live Terminal**: A live interactive prompt simulator in the **Gen AI** section allowing visitors to click prompt chips or type questions to get animated AI responses about Vikas's engineering experience.
- 🎴 **3D Tilt Project Cards & Modal Expansion**: 3D perspective card rotation on hover with specular glare highlights. Clicking any project card expands it into a detailed modal via Framer Motion `layoutId` shared-element transitions.
- 🏷️ **Animated Project Category Filters**: Filter projects by categories (*All*, *Mobile Apps*, *Full Stack*, *Gen AI & ML*) with smooth Framer Motion `layout` grid re-ordering.
- 🛰️ **Orbiting 3D Skill Icons**: Revolving 3D orbital rings with skill badges (*Kotlin*, *Android*, *Gemma AI*, *React Native*, *Redux*, *Node.js*) floating around the hero profile image.
- 📈 **Animated Connected Timeline**: A scroll-driven vertical gradient progress line with pulsing node badges for work experience.
- 🌊 **SVG Section Dividers**: Custom wave, curve, and sloped SVG section transition dividers.
- 📱 **Mobile Responsiveness**: Touch-optimized layouts with touch-friendly tap feedback (`-webkit-tap-highlight-color: transparent`), smooth mobile menu drawer with dark backdrop blur, and body scroll-locking.

---

## 🛠️ Tech Stack

- **Core**: React 18, Vite
- **Styling & System**: Tailwind CSS, PostCSS, Autoprefixer, Glassmorphic UI Tokens
- **Animations & Physics**: Framer Motion, HTML5 Canvas API
- **Icons & Utilities**: React Icons (`react-icons`), React Scroll (`react-scroll`), React Hot Toast (`react-hot-toast`)
- **Contact Integration**: EmailJS (`@emailjs/browser`)

---

## 📂 Project Structure

```text
Portfolio-React/
├── public/
├── src/
│   ├── assets/              # Profile images, logos, resumes, project screenshots
│   ├── components/          # Feature components
│   │   ├── Navbar.jsx       # Header navigation with Cmd+K search trigger & mobile drawer
│   │   ├── Home.jsx         # Hero section with orbiting skills
│   │   ├── About.jsx        # About section with mobile-visible profile media
│   │   ├── Experience.jsx   # Scroll-connected animated experience timeline
│   │   ├── Projects.jsx     # Filterable 3D project cards with shared-element modal
│   │   ├── Skills.jsx       # Technical skills with scroll progress indicators
│   │   ├── GenAI.jsx        # Generative AI architecture & AI Terminal playground
│   │   ├── Coding.jsx       # Algorithmic & competitive coding profiles
│   │   ├── Certifications.jsx# Certifications & achievements
│   │   ├── Education.jsx    # Academic background
│   │   ├── Blog.jsx         # Engineering writing drafts
│   │   ├── Contact.jsx      # Interactive EmailJS contact form
│   │   ├── Footer.jsx       # Footer links & socials
│   │   └── ui/              # Reusable UI & motion primitives
│   │       ├── ConstellationCanvas.jsx # HTML5 particle constellation canvas
│   │       ├── SpotlightCursor.jsx     # Desktop spotlight mouse glow
│   │       ├── TiltCard.jsx            # 3D perspective card tilt wrapper
│   │       ├── OrbitingSkills.jsx      # Revolving 3D orbital rings
│   │       ├── AITerminal.jsx          # Interactive Gemma AI prompt simulator
│   │       ├── CommandPalette.jsx      # Cmd+K Spotlight search modal
│   │       ├── SectionDivider.jsx      # Organic SVG section transition dividers
│   │       └── MotionPrimitives.jsx    # Section, SectionHeader, AnimatedCard
│   ├── data/
│   │   └── portfolio.js     # Centralized portfolio data & profile metadata
│   ├── App.jsx              # Main app shell with scroll progress bar & global events
│   ├── index.css            # Custom CSS utilities, scrollbar, and keyframe animations
│   └── main.jsx             # React entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v16+ recommended) and **npm** installed on your machine.

### Installation

1. Clone or navigate into the repository:
   ```bash
   cd Portfolio-React-main\ 3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Setup (Optional for Contact Form)

Create a `.env` file in the root directory if you want to configure your own EmailJS service:

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

### Running Development Server

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

---

## 👤 Author

**Vikas Patel**
- Mobile AI & Full Stack Engineer
- **GitHub**: [github.com/vikaspatel7780](https://github.com/vikaspatel7780)
- **LinkedIn**: [linkedin.com/in/vikaspatel7780](https://linkedin.com/in/vikaspatel7780)
- **Location**: Varanasi, India

