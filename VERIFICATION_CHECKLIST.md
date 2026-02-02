# Post-Deployment Verification Checklist

Use this checklist after deploying to Vercel to ensure the random 3D graph theme rotation is working correctly.

## Pre-Deployment Checks

- [ ] All theme SVG files exist in `profile-3d-contrib/` directory
  ```bash
  ls -lh profile-3d-contrib/*.svg
  ```
  Expected: 10 SVG files

- [ ] Vercel configuration file exists
  ```bash
  cat vercel.json
  ```

- [ ] API function exists
  ```bash
  cat api/random-3d-graph.js
  ```

## Deployment Steps

- [ ] Deployed to Vercel (see DEPLOYMENT_GUIDE.md)
- [ ] Deployment succeeded without errors
- [ ] Noted the deployed URL (e.g., `https://abhi5404.vercel.app`)

## Post-Deployment Verification

### 1. Test the API Function Directly

- [ ] Visit: `https://YOUR_PROJECT.vercel.app/api/random-3d-graph` in browser
- [ ] **Expected**: Browser redirects to one of the theme SVG files
- [ ] Refresh the page 5-10 times
- [ ] **Expected**: Different themes appear on different refreshes

### 2. Test on GitHub Profile

- [ ] Visit your GitHub profile: `https://github.com/abhi5404`
- [ ] Scroll to the "🧊 3D Contribution Graph" section
- [ ] **Expected**: A 3D contribution graph is displayed (800px width)
- [ ] Refresh the page 5-10 times
- [ ] **Expected**: Different themes appear on different refreshes

### 3. Test the Collapsible Section

- [ ] On your GitHub profile, find "🖼️ View All Available Themes" section
- [ ] Click to expand the details
- [ ] **Expected**: All 10 themes are shown:
  - Green Animated
  - Night Green
  - Night Rainbow
  - Season Animated
  - Git Block
  - Night View
  - South Season Animated
  - Green
  - Season
  - South Season

### 4. Verify Cache Behavior

- [ ] Open GitHub profile in incognito/private window
- [ ] Note which theme is displayed
- [ ] Open another incognito/private window
- [ ] **Expected**: Likely a different theme (due to no-cache headers)

### 5. Check Mobile Display

- [ ] Open GitHub profile on mobile device
- [ ] **Expected**: 3D graph displays correctly (responsive)
- [ ] Refresh several times
- [ ] **Expected**: Different themes appear

## Troubleshooting

### If the same theme always appears:

1. **Check Vercel deployment logs**
   - Go to Vercel dashboard → Your project → Deployments
   - Check for any errors

2. **Clear browser cache**
   ```
   Chrome: Ctrl+Shift+Del (Windows) or Cmd+Shift+Del (Mac)
   Firefox: Ctrl+Shift+Del (Windows) or Cmd+Shift+Del (Mac)
   ```

3. **Test in incognito mode**
   - This bypasses browser cache

### If you get a 404 error:

1. **Verify the API function deployed**
   - Check Vercel dashboard → Functions tab
   - Should see `api/random-3d-graph.js`

2. **Check the URL in README.md**
   - Line 156 should match your Vercel project URL
   - Update if project name differs from "abhi5404"

### If image doesn't display:

1. **Check the image URL**
   - Right-click on broken image → "Copy link address"
   - Paste in browser to see actual URL

2. **Verify theme SVG files exist**
   - Visit: `https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-night-green.svg`
   - Should display the SVG

3. **Check Vercel function logs**
   - Vercel dashboard → Your project → Logs
   - Look for errors or issues

## Performance Checks

- [ ] Page loads quickly (redirect should be < 100ms)
- [ ] No console errors in browser dev tools
- [ ] Image displays at correct width (800px)
- [ ] No broken links

## Final Verification

- [ ] Random rotation works (different themes on refresh)
- [ ] All 10 themes are accessible
- [ ] Collapsible section works correctly
- [ ] No errors in Vercel logs
- [ ] No errors in browser console
- [ ] Mobile display works correctly

## Documentation Review

- [ ] Read `DEPLOYMENT_GUIDE.md` for deployment steps
- [ ] Read `IMPLEMENTATION_SUMMARY.md` for implementation details
- [ ] Read `api/README.md` for API technical details

## Success Criteria

✅ **All items above should be checked**

If all checks pass, the random 3D graph theme rotation is working correctly!

---

**Need help?**
- Review `DEPLOYMENT_GUIDE.md` troubleshooting section
- Check Vercel documentation: https://vercel.com/docs
- Verify all theme SVG files exist in the repository

## Optional: Advanced Testing

### Test with curl
```bash
# Should return a 302 redirect
curl -I https://abhi5404.vercel.app/api/random-3d-graph

# Should show different Location headers on multiple runs
for i in {1..5}; do
  curl -I https://abhi5404.vercel.app/api/random-3d-graph | grep Location
done
```

### Expected curl output:
```
HTTP/2 302
location: https://raw.githubusercontent.com/abhi5404/abhi5404/main/profile-3d-contrib/profile-night-green.svg
cache-control: no-cache, no-store, must-revalidate
```

---

**Last Updated**: February 2, 2026
**Version**: 1.0
