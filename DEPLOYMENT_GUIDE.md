# Deployment Guide: Random 3D Graph Theme Rotation

This guide explains how to deploy the random 3D graph theme rotation feature to Vercel.

## What's Been Implemented

1. **Vercel Serverless Function** (`api/random-3d-graph.js`)
   - Randomly selects from 10 different 3D contribution graph themes
   - Returns a redirect to the selected theme
   - Prevents caching to ensure true randomness

2. **Updated README.md**
   - Main 3D graph image now points to the Vercel function
   - Added a collapsible section showing all available themes
   - Added explanatory text about the random feature

3. **Vercel Configuration** (`vercel.json`)
   - Configures the serverless function settings

## How to Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended for beginners)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account

2. Click "Add New Project"

3. Import your `abhi5404/abhi5404` repository

4. Configure project:
   - **Project Name**: Choose `abhi5404` (or any name you prefer)
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty

5. Click "Deploy"

6. Wait for the deployment to complete

7. Your function will be available at: `https://abhi5404.vercel.app/api/random-3d-graph`
   - Or: `https://YOUR_PROJECT_NAME.vercel.app/api/random-3d-graph`

8. **The README.md is already configured to use `https://abhi5404.vercel.app/api/random-3d-graph`**
   - If your Vercel project has a different name, update line 156 in README.md

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to your repository:
   ```bash
   cd /path/to/abhi5404
   ```

3. Login to Vercel:
   ```bash
   vercel login
   ```

4. Deploy:
   ```bash
   vercel --prod
   ```

5. Follow the prompts:
   - Set up and deploy? Y
   - Which scope? (select your account)
   - Link to existing project? N
   - What's your project's name? abhi5404
   - In which directory is your code located? ./
   
6. Your function will be deployed and the URL will be displayed

## Testing the Deployment

After deployment:

1. Visit your GitHub profile: `https://github.com/abhi5404`

2. Refresh the page multiple times

3. You should see different 3D contribution graph themes on each refresh!

4. You can also directly visit: `https://abhi5404.vercel.app/api/random-3d-graph`
   - Each visit should redirect to a different theme

## Troubleshooting

### If the image doesn't display:

1. Check that Vercel deployment succeeded
2. Verify the URL in README.md matches your Vercel project URL
3. Check browser console for errors
4. Try clearing browser cache

### If the same theme keeps appearing:

1. Clear your browser cache
2. Try in incognito/private mode
3. Verify the cache-control headers are being set correctly

### If you get a 404 error:

1. Ensure the `api` directory and files were deployed
2. Check that `vercel.json` is in the repository root
3. Try redeploying with `vercel --prod --force`

## Customizing Theme Selection

To modify which themes are included in the random rotation:

1. Edit `api/random-3d-graph.js`
2. Add or remove theme URLs from the `themes` array
3. Commit and push changes
4. Vercel will automatically redeploy

## Vercel Limitations

- **Free Plan**: 100GB bandwidth/month, should be more than enough
- **Function Execution**: Instant redirects use minimal resources
- **Custom Domain**: Available on all plans if desired

## Alternative Hosting Options

If you prefer not to use Vercel, the serverless function can also be deployed to:
- **Netlify**: Similar setup with `netlify.toml`
- **Cloudflare Workers**: Requires adapting the code slightly
- **AWS Lambda**: More complex setup
- **Any PHP hosting**: Convert to PHP with similar logic

## Support

If you encounter issues:
1. Check the [Vercel Documentation](https://vercel.com/docs)
2. Review the `api/README.md` file
3. Ensure all theme SVG files exist in `profile-3d-contrib/` directory

---

**Note**: The README.md has been pre-configured to use `https://abhi5404.vercel.app/api/random-3d-graph`. If your Vercel project URL is different, you'll need to update this URL in the README.md file.
