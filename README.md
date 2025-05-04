# Crypto Planet Exchange Web Template

This is a static website template for a cryptocurrency exchange built with HTML, TailwindCSS, and JavaScript.

## Local Development

1. Clone the repository
2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open your browser and navigate to `index.html` in the `src` directory

## Building for Production

```
npm run build
```

This will generate a `dist` directory with all the necessary files for deployment.

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:

```
npm install -g vercel
```

2. Login to Vercel:

```
vercel login
```

3. Deploy the project:

```
vercel
```

### Option 2: Deploy via GitHub Import (Recommended)

1. Push your repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click on "Add New..." and select "Project"
4. Select "Import Git Repository" and choose your GitHub repository
5. Configure your project:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

The site will be automatically deployed and you'll receive a domain to access your site.

## Project Structure

- `src/` - Source HTML, CSS, and JavaScript files
- `public/` - Static assets (images, icons, etc.)
- `dist/` - Build output directory
