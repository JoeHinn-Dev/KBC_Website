# Kirubasanam Bible College Website

A modern, responsive website for Kirubasanam Bible College built with React, Vite, and Tailwind CSS following a scalable, feature-based architecture.

## 🚀 Tech Stack

- **React 18+** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Query (TanStack Query)** - Data fetching and state management
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📁 Project Structure

```
src/
├── app/
│   ├── router/
│   │   └── AppRouter.jsx          # Route configuration
│   └── providers/
│       └── QueryProvider.jsx      # React Query provider
├── features/
│   ├── home/
│   │   ├── pages/
│   │   │   └── HomePage.jsx
│   │   └── components/
│   │       ├── Hero.jsx
│   │       ├── AboutPreview.jsx
│   │       ├── Programs.jsx
│   │       ├── Features.jsx
│   │       ├── Testimonials.jsx
│   │       ├── Events.jsx
│   │       └── Newsletter.jsx
│   ├── about/
│   │   ├── pages/
│   │   │   └── AboutPage.jsx
│   │   └── components/
│   │       ├── History.jsx
│   │       ├── MissionVision.jsx
│   │       ├── PrincipalMessage.jsx
│   │       └── Faculty.jsx
│   ├── admissions/
│   │   ├── pages/
│   │   │   └── AdmissionsPage.jsx
│   │   └── components/
│   │       ├── Courses.jsx
│   │       ├── FeeStructure.jsx
│   │       └── ApplySection.jsx
│   ├── gallery/
│   │   ├── pages/
│   │   │   └── GalleryPage.jsx
│   │   └── components/
│   │       └── ImageGallery.jsx
│   └── contact/
│       ├── pages/
│       │   └── ContactPage.jsx
│       └── components/
│           ├── ContactInfo.jsx
│           ├── MapSection.jsx
│           └── ContactForm.jsx
└── shared/
    ├── components/
    │   ├── Layout.jsx
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── ui/
    │       ├── Button.jsx
    │       └── Section.jsx
    ├── hooks/
    ├── utils/
    └── assets/
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kbc-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Content Management

### Adding Events

Edit `src/features/home/components/Events.jsx`:

```javascript
const events = [
  {
    title: 'Your Event Title',
    date: 'Month DD, YYYY',
    time: 'HH:MM AM/PM',
    location: 'Event Location',
  },
  // Add more events...
];
```

### Adding Faculty Members

Edit `src/features/about/components/Faculty.jsx`:

```javascript
const faculty = [
  {
    name: 'Faculty Name',
    role: 'Position/Title',
    image: 'image-url',
    bio: 'Short biography',
  },
  // Add more faculty...
];
```

### Updating Admissions Details

**Courses:** Edit `src/features/admissions/components/Courses.jsx`

**Fee Structure:** Edit `src/features/admissions/components/FeeStructure.jsx`

### Adding Gallery Images

Edit `src/features/gallery/components/ImageGallery.jsx`:

```javascript
const galleryImages = [
  {
    id: 1,
    src: 'image-url',
    alt: 'Image description',
    category: 'Category Name',
  },
  // Add more images...
];
```

### Updating Contact Information

Edit the following files:
- `src/features/contact/components/ContactInfo.jsx` - Contact details
- `src/features/contact/components/MapSection.jsx` - Google Maps embed
- `src/shared/components/Footer.jsx` - Footer contact info

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize primary colors
      },
    },
  },
},
```

### Fonts

The project uses **Inter** from Google Fonts. To change fonts, update:
1. `index.html` - Google Fonts link
2. `tailwind.config.js` - Font family configuration

## 📧 Form Integration

### Contact Form & Newsletter

The forms are configured to use **Formspree**. To set up:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action URLs:
   - `src/features/contact/components/ContactForm.jsx`
   - `src/features/home/components/Newsletter.jsx`

Replace `your-form-id` with your actual Formspree form ID:
```javascript
action="https://formspree.io/f/your-form-id"
```

## 🚀 Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy!

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite settings
4. Deploy!

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   });
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 🔧 Environment Variables

Create a `.env` file for environment-specific configurations:

```env
VITE_FORMSPREE_CONTACT_ID=your-contact-form-id
VITE_FORMSPREE_NEWSLETTER_ID=your-newsletter-form-id
VITE_GOOGLE_MAPS_API_KEY=your-api-key
```

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ Image gallery with lightbox
- ✅ Contact form with Formspree integration
- ✅ Google Maps integration
- ✅ SEO optimized with meta tags
- ✅ Accessible (semantic HTML, alt text, ARIA labels)
- ✅ Fast performance with Vite

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or support, contact:
- Email: info@kbc.edu
- Phone: +91 98765 43210

---

Built with ❤️ for Kirubasanam Bible College
