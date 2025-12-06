# ShoreSquad 🌊

**Rally your crew, track weather, and hit the next beach cleanup with our dope map app!**

---

## 📋 Project Overview

ShoreSquad is a mobile-first web application designed to mobilize young people for coastal cleanup initiatives. It combines interactive mapping, real-time weather tracking, and social features to make beach conservation fun, accessible, and community-driven.

### Key Features
- 🗺️ **Interactive Map Integration** - Discover nearby cleanup events
- ☀️ **Real-time Weather Tracking** - Plan the perfect cleanup day
- 👥 **Social Crew Building** - Connect with eco-conscious friends
- 🏆 **Impact Tracking** - Visualize your environmental contribution
- 📱 **Progressive Web App** - Works offline and installs like a native app
- ♿ **Accessible Design** - WCAG 2.1 AA compliant

---

## 🎨 Brand Identity

### Color Palette
| Color | Hex | Purpose |
|-------|-----|---------|
| Ocean Blue | #0066CC | Primary brand color |
| Coral Accent | #FF6B6B | CTAs & energy |
| Forest Green | #2D7A4A | Environmental commitment |
| Sandy Beige | #F5E6D3 | Warm, welcoming feel |
| Charcoal | #2C3E50 | Text & contrast |

### Typography
- **Font Family**: Segoe UI, system fonts
- **Weights**: Light (300), Regular (400), Bold (700)
- **Philosophy**: Bold, youthful, modern

---

## 🚀 Tech Stack

### Frontend
- **HTML5**: Semantic markup with PWA support
- **CSS3**: Custom properties, Grid/Flexbox, animations
- **Vanilla JavaScript**: No frameworks - lightweight & performant

### Performance Features
- Lazy loading for images
- Service Workers for offline support
- Code splitting & minification-ready
- Responsive design (mobile-first)
- WCAG 2.1 AA accessibility compliance

### Optional Integrations
- **Maps**: Leaflet.js or Mapbox GL JS
- **Weather API**: OpenWeatherMap or WeatherAPI
- **Social**: Firebase Auth, Supabase
- **Analytics**: Google Analytics, Mixpanel
- **Hosting**: Netlify, Vercel, GitHub Pages

---

## 📁 Project Structure

```
ShoreSquad/
├── index.html              # Main HTML file
├── package.json            # Dependencies & scripts
├── manifest.json           # PWA manifest
├── .gitignore              # Git ignore file
├── sw.js                   # Service Worker
├── README.md               # This file
├── css/
│   └── styles.css          # All styling
├── js/
│   └── app.js              # Main application logic
└── img/
    └── (placeholder)       # Images directory
```

---

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 16+ (optional, for local server)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git

### Quick Start

1. **Clone or navigate to the project**
   ```bash
   cd ShoreSquad
   ```

2. **Install dependencies (optional)**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # OR use Python's built-in server
   python -m http.server 8000
   ```

4. **Open in browser**
   - Visit `http://localhost:5500` or `http://localhost:8000`

---

## 📱 Live Server Configuration

### VS Code Extension Method (Recommended)
1. Install **Live Server** extension by Ritwickdey
2. Right-click `index.html` → "Open with Live Server"
3. Automatically opens on `http://localhost:5500`

### Command Line Method
```bash
npm install -g live-server
live-server --port=5500 --open=index.html
```

### Python HTTP Server
```bash
cd ShoreSquad
python -m http.server 8000
# Visit http://localhost:8000
```

---

## 🎯 UX/UI Principles

### Mobile-First Design
- Thumb-friendly buttons (min 44px height)
- Vertical scrolling navigation
- Fast load times (<2s)

### Accessibility
- High contrast text (WCAG AA)
- Keyboard navigation support
- Semantic HTML structure
- ARIA labels where needed

### Youth-Centric
- Emoji icons & visual hierarchy
- Bold colors & animations
- Gamification elements
- Social proof (crew counts, impact metrics)

### Performance
- No render-blocking resources
- Optimized CSS & JS
- Lazy loading images
- Service Worker caching

---

## 🔧 Development Workflow

### Adding New Features
1. Update HTML structure in `index.html`
2. Style in `css/styles.css`
3. Add interactivity in `js/app.js`
4. Test on mobile devices

### Code Style
- Use CSS custom properties for theming
- BEM-like naming conventions
- JSDoc comments for functions
- Responsive mobile-first approach

### Git Workflow
```bash
git add .
git commit -m "feat: add new feature description"
git push origin main
```

---

## 📈 Future Enhancements

### Phase 2
- [ ] Real API integration (Maps, Weather)
- [ ] User authentication & profiles
- [ ] Event creation & RSVP system
- [ ] Crew management features

### Phase 3
- [ ] Impact dashboard with analytics
- [ ] Mobile app (React Native/Flutter)
- [ ] Social feed & messaging
- [ ] Gamification & rewards system

### Phase 4
- [ ] Backend services (Node.js/Python)
- [ ] Database integration (PostgreSQL)
- [ ] Admin dashboard
- [ ] Mobile push notifications

---

## 🤝 Contributing

Contributions welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see LICENSE file for details.

---

## 📧 Contact & Support

- **Email**: crew@shoresquad.io
- **Twitter**: [@ShoreSquadApp](https://twitter.com)
- **Instagram**: [@ShoreSquadApp](https://instagram.com)

---

## 🌊 Let's Clean Some Beaches!

Join the movement. Rally your crew. Make a difference.

**ShoreSquad** - Building the next generation of coastal stewards.

