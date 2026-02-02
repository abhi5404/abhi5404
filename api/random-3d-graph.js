// Vercel Serverless Function to randomly select and redirect to a 3D contribution graph theme
export default function handler(req, res) {
  const themes = [
    'https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-green-animate.svg',
    'https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-night-green.svg',
    'https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-night-rainbow.svg',
    'https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-season-animate.svg',
    'https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-south-season-animate.svg',
    'https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-gitblock.svg',
    'https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-night-view.svg',
    'https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-green.svg',
    'https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-season.svg',
    'https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-south-season.svg'
  ];
  
  // Randomly select a theme
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  
  // Set cache control headers to prevent caching
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  // Redirect to the randomly selected theme
  res.redirect(302, randomTheme);
}
