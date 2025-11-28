# Deployment Guide - Safe Digital Africa

## Overview

This guide covers deploying the Safe Digital Africa web application to Vercel. The application is a comprehensive digital safety platform built with React, TypeScript, and Vite.

## Prerequisites

- Node.js 18+ installed
- GitHub account (for code hosting)
- Vercel account (free tier available)
- Git installed on your machine

## Project Features

### ✅ Implemented Features

**Core Pages:**
- Home page with hero section, testimonials, and CTAs
- Digital Literacy Hub with course catalog
- Interactive Course Viewer with progress tracking
- Safety Assessment quiz with personalized results
- Safety Tools (6 interactive tools)
- Resources & Support library
- Contact form with email integration
- About Us page
- Privacy Policy

**Safety Tools:**
1. Password Strength Checker
2. Email Breach Scanner
3. Social Media Privacy Checklist (Facebook, Instagram, WhatsApp)
4. Digital Footprint Analyzer
5. Device Security Setup Guide
6. Safe Browsing Assistant

**Key Features:**
- Fully responsive design (mobile, tablet, desktop)
- Dark/Light theme toggle
- Progress tracking and local storage
- Certificate generation (PDF download)
- Emergency hotlines and resources
- Clickable contact links (email, phone, maps)
- Quick Exit button for safety
- No authentication required

## Step-by-Step Deployment

### 1. Prepare Your Repository

**Create a `.gitignore` file** (if not already present):
```
node_modules/
dist/
.env
.DS_Store
*.log
```

**Initialize Git and Push to GitHub:**
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Safe Digital Africa Platform"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/safe-digital-africa.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

#### Method A: GitHub Integration (Recommended)

1. **Visit [vercel.com](https://vercel.com)** and sign up/login with GitHub
2. **Click "New Project"**
3. **Import your repository:**
   - Select `safe-digital-africa` from your repositories
   - Click "Import"
4. **Configure Project Settings:**
   - **Project Name:** `safe-digital-africa`
   - **Framework Preset:** Vite (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. **Environment Variables** (if using Resend API):
   - Add `VITE_RESEND_API_KEY`
   - Add `VITE_CONTACT_EMAIL`
   - Add `VITE_BUSINESS_EMAIL`
6. **Click "Deploy"**

#### Method B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: safe-digital-africa
# - Directory: ./
# - Override settings? N

# For production deployment
vercel --prod
```

### 3. Verify Deployment

**Check the following:**
1. ✅ All pages load correctly
2. ✅ Navigation works (including mobile menu)
3. ✅ Safety Assessment quiz functions
4. ✅ Safety Tools open and work
5. ✅ Resource downloads work
6. ✅ Contact form submits (check console logs)
7. ✅ Theme toggle works
8. ✅ Quick Exit button redirects
9. ✅ All links are clickable (email, phone, maps)

**Your app will be live at:**
- `https://your-project-name.vercel.app`

### 4. Custom Domain (Optional)

1. Go to **Project Settings → Domains**
2. Click **Add Domain**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## Configuration Files

### vercel.json

Create this file in your project root if not present:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### Environment Variables

If using the Resend API for contact form:

```env
VITE_RESEND_API_KEY=your_resend_api_key_here
VITE_CONTACT_EMAIL=help@safedigitalafrica.org
VITE_BUSINESS_EMAIL=mirimbachristine@gmail.com
```

**Important:** Never commit `.env` to Git. Add it to `.gitignore`.

## Post-Deployment

### Continuous Deployment

- **Automatic deployments:** Push to `main` branch triggers deployment
- **Preview deployments:** Pull requests get preview URLs
- **Rollback:** Easy rollback to previous deployments in Vercel dashboard

### Monitoring

1. **Vercel Analytics:**
   - Enable in Project Settings → Analytics
   - Monitor page views, performance, and Core Web Vitals

2. **Error Tracking:**
   - Check deployment logs in Vercel dashboard
   - Monitor browser console for client-side errors

### Performance Optimization

**Already Implemented:**
- Code splitting with React lazy loading
- Optimized images and assets
- Minified production build
- Efficient routing with React Router

**Recommendations:**
- Enable Vercel Edge Network for global CDN
- Monitor and optimize bundle size
- Use Lighthouse for performance audits

## Troubleshooting

### Build Fails

**Issue:** Build process fails on Vercel

**Solutions:**
```bash
# Locally test the build
npm run build

# Check Node.js version (must be 18+)
node --version

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Routes Return 404

**Issue:** Direct navigation to routes shows 404

**Solution:** Ensure `vercel.json` has proper rewrites configuration (see above)

### Assets Not Loading

**Issue:** Images or fonts not loading

**Solutions:**
- Check all asset paths are relative
- Verify `public/` directory structure
- Check browser console for 404 errors

### Contact Form Not Working

**Issue:** Form submission fails

**Solutions:**
- Verify environment variables are set in Vercel
- Check API endpoint configuration
- Review browser console for errors
- Ensure Resend API key is valid

### Certificate Download Issues

**Issue:** PDF certificates not generating

**Solutions:**
- Check browser compatibility (modern browsers only)
- Verify `html2canvas` and `jsPDF` are bundled
- Test in different browsers

## Security Considerations

**Implemented Security Measures:**
- Security headers (X-Frame-Options, CSP)
- No sensitive data in client-side code
- Environment variables for API keys
- HTTPS enforced by Vercel
- Quick Exit functionality for user safety

**Best Practices:**
- Keep dependencies updated
- Regular security audits
- Monitor for vulnerabilities
- Use strong API keys

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Content Updates

To update content:
1. Edit relevant files locally
2. Test changes: `npm run dev`
3. Commit and push to GitHub
4. Vercel auto-deploys changes

## Support Resources

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Vite Documentation:** [vitejs.dev](https://vitejs.dev/)
- **React Documentation:** [react.dev](https://react.dev/)
- **React Router:** [reactrouter.com](https://reactrouter.com/)

## Project Structure

```
safe-digital-africa/
├── public/              # Static assets
│   ├── images/         # Image files
│   └── resources/      # PDF resources
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── data/           # Course data
│   ├── hooks/          # Custom hooks
│   └── lib/            # Utilities
├── .env                # Environment variables (not in Git)
├── vercel.json         # Vercel configuration
├── package.json        # Dependencies
└── vite.config.ts      # Vite configuration
```

## Next Steps

1. ✅ **Monitor your deployment** in Vercel dashboard
2. ✅ **Test all features** on the live site
3. ✅ **Share the URL** with stakeholders
4. ✅ **Set up custom domain** (if needed)
5. ✅ **Enable analytics** to track usage
6. ✅ **Plan content updates** and maintenance schedule

---

**🎉 Your Safe Digital Africa platform is now live and ready to empower users!**

For questions or issues, refer to the documentation links above or check the Vercel deployment logs.
