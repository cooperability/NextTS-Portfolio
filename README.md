# Co-Operability

A dynamic personal website built with Next.js, running on Vercel. I'm parting with IPFS because it's too expensive to keep a responsive page there, although my original ultralight IPFS site will continue running.

Visit the live webpage at [cooperability.com](https://www.cooperability.com).

## Resources I used to build this website

[Light/Dark Mode Button in NextJS](https://www.youtube.com/watch?v=optD7ns4ISQ) \
[Tailwind with Next](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css) \
[Server-side rendering a random number](https://auroratide.com/posts/server-side-rendering-a-random-number) \
[Adding analytics with Vercel](https://ahmadrosid.com/blog/vercel-analytics-tutorial) \
[Changing the site's icon](https://stackoverflow.com/questions/74353529/how-to-add-a-favicon-to-a-nextjs-app-structure-possible-hydration-issue) \
[something to explain mobile compatibility](https://en.wikipedia.org/wiki/Web_Compatibility_Test_for_Mobile_Browsers)

### Date Sorting Implementation
When implementing date-based sorting for posts, we discovered that simpler is better:
- Direct string comparison with `localeCompare()` is more reliable than creating new Date objects
- For ISO 8601 formatted dates (YYYY-MM-DD), string comparison works perfectly for chronological sorting
- Complex date parsing can lead to TypeScript construct signature errors and unnecessary type assertions


## Next to be done here:
- [4/5] Opioid Converter Mobile compatible + Writeup
- [0/5] Nlp_ipynb and course completion; JupyterLite
- [0/5] anki decks shareable
- [0/5] Demo hover + active link compatibility
- [0/5] Recommendations prompt
- [0/5] Vercel Observability & Analytics integration
- [0/5] Switch X link to Bluesky Link
