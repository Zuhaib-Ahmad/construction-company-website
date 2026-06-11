# BuildPro - Modern Construction Company Website

A professional, responsive construction company website built with React.js. Features a modern design, smooth animations, and comprehensive project showcase.

## ✨ Features

- **7 Professional Pages**: Home, About, Services, Projects, Team, Gallery, Contact
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Modern UI**: Clean, professional corporate aesthetic
- **Gallery Modal**: Lightbox viewer for project images
- **Project Filtering**: Filter projects by category
- **Contact Form**: Fully functional contact form with validation
- **Smooth Animations**: Professional transitions and effects
- **Team Showcase**: Display team members with social links
- **Service Details**: Comprehensive service descriptions

## 🚀 Quick Start

### Prerequisites
- Node.js v14 or higher
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Zuhaib-Ahmad/construction-company-website.git
cd construction-company-website

# Install dependencies
npm install

# Start development server
npm start
```

The website will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.js
│   ├── Navigation.css
│   ├── Footer.js
│   └── Footer.css
├── pages/
│   ├── Home.js / Home.css
│   ├── About.js / About.css
│   ├── Services.js / Services.css
│   ├── Projects.js / Projects.css
│   ├── Team.js / Team.css
│   ├── Gallery.js / Gallery.css
│   └── Contact.js / Contact.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## 📄 Page Details

### Home
- Hero section with CTA buttons
- Statistics showcase
- Service preview
- Call-to-action section

### About
- Company story
- Mission & vision
- Core values
- Why choose us section

### Services
- 6 service categories
- Feature lists
- Construction process (6 steps)

### Projects
- 8+ project showcase
- Category filtering
- Project details

### Team
- 8 team members
- Social media links
- Professional profiles

### Gallery
- 12+ high-quality images
- Lightbox modal viewer
- Image categorization

### Contact
- Contact form
- Business information
- Hours of operation
- Direct contact details

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary: #1e40af;
  --secondary: #0f766e;
  --accent: #ea580c;
}
```

### Company Info
Update in:
- `src/components/Footer.js`
- `src/pages/Contact.js`

### Add Real Images
Replace placeholders in page components with actual images

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px
- Small Mobile: Below 480px

## 🛠️ Technologies

- React 18.2.0
- React Router DOM 6.20.0
- React Icons 4.12.0
- CSS3 with Flexbox & Grid

## 📦 Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

## 🌐 Deployment

Deploy to:
- **Netlify**: Connect GitHub repo for auto-deploy
- **Vercel**: Simple git-based deployment
- **GitHub Pages**: Use `npm run build` and upload build folder

## 📝 License

This project is open for commercial use and modification.

## 📞 Support

For questions or customization:
- Email: info@buildpro.com
- Phone: +1 (555) 123-4567

---

**BuildPro** - Building Excellence, Creating Futures

Built with ❤️ using React.js
