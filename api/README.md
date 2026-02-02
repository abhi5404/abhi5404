# Random 3D Graph API

This directory contains a Vercel serverless function that randomly selects and redirects to one of the 3D contribution graph themes.

## How it works

The `random-3d-graph.js` function:
1. Maintains a list of all available 3D contribution graph theme URLs
2. Randomly selects one theme on each request
3. Redirects the browser to the selected theme
4. Sets cache-control headers to prevent caching and ensure randomness

## Deployment

To deploy this function to Vercel:

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Deploy from the repository root:
   ```bash
   vercel
   ```

3. Follow the prompts to set up your project

4. Once deployed, the function will be available at:
   ```
   https://YOUR_PROJECT.vercel.app/api/random-3d-graph
   ```

5. Update the README.md to use your deployed URL:
   ```markdown
   <img src="https://YOUR_PROJECT.vercel.app/api/random-3d-graph" alt="3D Contribution Graph"/>
   ```

## Available Themes

The function randomly selects from 10 different themes:
- profile-green-animate.svg (Green Animated)
- profile-night-green.svg (Night Green)
- profile-night-rainbow.svg (Night Rainbow)
- profile-season-animate.svg (Season Animated)
- profile-south-season-animate.svg (South Season Animated)
- profile-gitblock.svg (Git Block)
- profile-night-view.svg (Night View)
- profile-green.svg (Green)
- profile-season.svg (Season)
- profile-south-season.svg (South Season)

## Testing Locally

You can test the function locally using Vercel CLI:

```bash
vercel dev
```

Then visit http://localhost:3000/api/random-3d-graph in your browser. Each refresh should redirect to a different theme.
