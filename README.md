# AMP ACE Multimedia Events Showcase

A single-page visual portfolio of AMP ACE Multimedia events, built with Next.js and Tailwind CSS.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Update content (one file)

Everything lives in `data/events.ts`.

- **YouTube links:** replace the four values in `YOUTUBE_URLS`.
- **Photos:** drop your own event photos into `public/images/` using the same filenames
  (`kempinski.jpg`, `fiesta-royale.jpg`, `marriott-lagos.jpg`, `cedi-conference.jpg`).
  Then update `imageAlt`, and delete the `credit` block, which removes that photo's credit from the footer.
  Use `imagePosition` (e.g. `"70% 40%"`) to adjust the crop focal point.
- **Logo:** replace the placeholder in `components/SiteHeader.tsx`.
- **Domain:** set `NEXT_PUBLIC_SITE_URL` in production so social preview images resolve.

## Temporary photography

The current images are freely licensed venue photos from Wikimedia Commons, credited in the footer.
The Marriott slot uses a Lagos skyline photo, because no freely licensed photo of the Lagos Marriott was available.
