# Vercel Deployment Guide - Safe Digital Africa

## Prerequisites
- Node.js 18+ installed
- GitHub account (for code hosting)
- Vercel account 

## Step-by-Step Deployment Instructions

### 1. Prepare Your Code Repository

1. **Create a GitHub Repository:**
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

#### Method A: Direct GitHub Integration (Recommended)

1. **Visit [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import Repository:**
   - Select your `safe-digital-africa` repository
   - Click "Import"
5. **Configure Project:**
   - **Project Name:** `safe-digital-africa`
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (pre-filled)
   - **Output Directory:** `dist` (pre-filled)
   - **Install Command:** `npm install` (pre-filled)

6. **Click "Deploy"**

#### Method B: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? (select your account)
   - Link to existing project? **N**
   - Project name: `safe-digital-africa`
   - Directory: `./`
   - Override settings? **N**

### 3. Post-Deployment Configuration

1. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Environment Variables (Optional):**
   - If you need to add environment variables
   - Go to Project Settings → Environment Variables
   - Add any required variables

### 4. Verification

1. **Check Deployment:**
   - Your app will be available at: `https://your-project-name.vercel.app`
   - Verify all routes work correctly
   - Test course functionality
   - Check certificate generation

2. **Performance Check:**
   - Test on mobile devices
   - Verify loading speeds
   - Check certificate downloads

## Features Verified for Production

✅ **All 4 Digital Literacy Courses**
- 32 comprehensive modules
- 96 quiz questions
- Progress tracking
- Certificate generation

✅ **Available Safety Tools**
- Password Strength Checker
- Digital Footprint Analyzer

✅ **User Experience Features**
- No login required
- Mobile responsive
- ESC key exit
- Supportive language

## Build Configuration

The project includes:
- **vercel.json:** Deployment configuration
- **package.json:** Updated with project name
- **Vite build system:** Optimized for production
- **SPA routing:** All routes handled by index.html

## Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check Node.js version (18+ required)
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

2. **Routes Not Working:**
   - Verify vercel.json rewrites configuration
   - Ensure SPA routing is properly configured

3. **Assets Not Loading:**
   - Check vite.config.ts base configuration
   - Verify all imports are correct

4. **Certificate Generation Issues:**
   - Ensure html2canvas and jsPDF are properly bundled
   - Check browser compatibility

### Support Resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

## Security Notes

The deployment includes security headers:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## Next Steps After Deployment

1. **Monitor Performance:**
   - Use Vercel Analytics
   - Monitor Core Web Vitals
   - Check error logs

2. **Continuous Deployment:**
   - GitHub integration enables automatic deployments
   - Push to main branch = automatic deploy
   - Preview deployments for pull requests

3. **Maintenance:**
   - Regular dependency updates
   - Security patches
   - Performance optimizations

---

**Your Safe Digital Africa platform is now ready for deployment!** 🚀