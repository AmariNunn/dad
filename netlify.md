# Netlify Deployment Configuration

## Production Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`

## Environment Variables
- `DATABASE_URL`: Your PostgreSQL connection string (Neon or other provider)
- `VITE_API_BASE_URL`: (Optional) Base URL for API calls if different from root

## Redirects
Since this is a Single Page Application (SPA), ensure all routes redirect to `index.html`.
Create a `public/_redirects` file with:
```
/*    /index.html   200
```
