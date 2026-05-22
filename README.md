# Teacher Lenta - Online Tutoring Website

A modern, responsive website for **Teacher Lenta**, an experienced iPrimary & Key Stage 2 tutor offering flexible online and in-person tutoring sessions at affordable rates.

## 🎓 About Teacher Lenta

Teacher Lenta specializes in personalized tutoring for:
- **iPrimary** students
- **Key Stage 2** (ages 7-11) students

### Services & Pricing
- 💻 **Online Sessions**: £7/hour
- 🏫 **In-Person Sessions**: £10/hour
- 📱 **Contact**: 0795770464

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with React and Tailwind CSS for a polished, professional appearance
- **Interactive Elements**: Smooth animations using Framer Motion
- **Contact Forms**: Email integration via EmailJS
- **Accessibility**: Inclusive design with ARIA labels and semantic HTML
- **Performance Optimized**: Fast load times and smooth animations

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Build Tool**: [Create React App 5](https://create-react-app.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Email**: [EmailJS](https://www.emailjs.com/)
- **Scrolling**: [React Scroll](https://github.com/fisshy/react-scroll)
- **PostCSS**: For CSS processing and autoprefixing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd teacher-lenta-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (if needed)
   - Create a `.env` file in the project root
   - Add your EmailJS service ID and template ID for contact form functionality

4. **Start the development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

## 🚀 Available Scripts

### `npm start`
Runs the app in development mode with hot reloading.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Runs the test suite in interactive watch mode.

### `npm eject`
**Note**: This is a one-way operation. Once you eject, you can't go back!

## 📁 Project Structure

```
teacher-lenta-website/
├── public/                 # Static files
│   ├── index.html         # Main HTML file
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO robots file
├── src/
│   ├── App.js             # Main App component
│   ├── App.css            # App styles
│   ├── index.js           # React DOM render
│   ├── index.css          # Global styles with Tailwind
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   └── utils/             # Utility functions
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## 🎨 Customization

### Tailwind CSS
Modify `tailwind.config.js` to customize:
- Color schemes
- Typography
- Spacing
- Custom components

### Styling
- Global styles: `src/index.css`
- Component styles: Component-scoped CSS or Tailwind utility classes

## 🔗 Deployment

### Deploy to Vercel

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `build`
3. **Deploy**: Push to your repository to auto-deploy

### Deploy to Other Platforms

This project is compatible with:
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS Amplify

## 📞 Contact & Support

- **Phone**: 0795770464
- **Service Area**: Online tutoring (worldwide) & In-person tutoring (contact for location)
- **Availability**: Flexible scheduling to suit student needs

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

For inquiries about modifications or collaboration, please contact via phone: **0795770464**

---

**Built with ❤️ for quality education**

Last Updated: May 2026
