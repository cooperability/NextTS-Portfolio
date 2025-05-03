# Co-Operability

A dynamic personal website built with Next.js, running on Vercel. I'm parting with IPFS because it's too expensive to keep a responsive page there, although my original ultralight IPFS site will continue running.

Visit: [cooperability.com](https://www.cooperability.com).

## Resources I used to build this website
[Light/Dark Mode Button in NextJS](https://www.youtube.com/watch?v=optD7ns4ISQ) \
[Tailwind with Next](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css) \
[Server-side rendering a random number](https://auroratide.com/posts/server-side-rendering-a-random-number) \
[Adding analytics with Vercel](https://ahmadrosid.com/blog/vercel-analytics-tutorial) \
[Changing the site's icon](https://stackoverflow.com/questions/74353529/how-to-add-a-favicon-to-a-nextjs-app-structure-possible-hydration-issue) \
[something to explain mobile compatibility](https://en.wikipedia.org/wiki/Web_Compatibility_Test_for_Mobile_Browsers)
[Vercel Observability](https://vercel.com/docs/observability); [Vercel Analytics](https://vercel.com/docs/analytics)

### Date Sorting Implementation
When implementing date-based sorting for posts, we discovered that simpler is better:
- Direct string comparison with `localeCompare()` is more reliable than creating new Date objects
- For ISO 8601 formatted dates (YYYY-MM-DD), string comparison works perfectly for chronological sorting
- Complex date parsing can lead to TypeScript construct signature errors and unnecessary type assertions

## Next Steps:
- Nlp_ipynb and course completion; JupyterLite
- anki decks shareable
- Add "other stack components I've worked on" section
- Configure linting pipeline
- lt+shift+f automatically runs prettier or whatever linter is configured

## Linting & Formatting

This project uses ESLint and Prettier to maintain code quality and consistent formatting.

- **ESLint**: Configured via `.eslintrc.json`, extending `next/core-web-vitals` for Next.js specific rules and best practices. It checks for potential errors and code style issues.
- **Prettier**: Configured via `.prettierrc.json`, handles automatic code formatting (line breaks, spacing, quotes, etc.). It's integrated with ESLint via `eslint-config-prettier` to avoid conflicting rules.

**Automation:**

This project uses `husky` and `lint-staged` to automatically lint and format staged files before each commit. This ensures that only code adhering to the defined standards enters the codebase.

**Available Scripts:**
- `yarn dev`: Runs next dev, starting the local server
- `yarn lint`: Runs ESLint to check for issues across the project.
- `yarn format`: Runs Prettier to automatically format all project files.

## Project Dependencies

### Runtime Dependencies (`dependencies`)

- `@heroicons/react`: SVG icons as React components.
- `@mdx-js/loader`: Webpack loader for MDX files.
- `@mdx-js/react`: React components for rendering MDX.
- `@next/mdx`: Integration for using MDX with Next.js.
- `@tailwindcss/typography`: Tailwind plugin for beautiful typography defaults.
- `@vercel/analytics`: Vercel integration for website analytics.
- `@vercel/speed-insights`: Vercel integration for performance monitoring.
- `date-fns`: Modern JavaScript date utility library.
- `gray-matter`: Parses front-matter from files (e.g., Markdown metadata).
- `next`: The React framework for production.
- `next-mdx-remote`: Renders MDX content dynamically in Next.js.
- `next-themes`: Theme switching support for Next.js apps.
- `prop-types`: Runtime type checking for React props.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Serves as the entry point to the DOM and server renderers for React.
- `remark`: Markdown processor.
- `remark-html`: Plugin for `remark` to serialize Markdown to HTML.
- `sharp`: High-performance Node.js image processing library.

### Development Dependencies (`devDependencies`)

- `@types/node`: TypeScript definitions for Node.js.
- `@types/react`: TypeScript definitions for React.
- `autoprefixer`: PostCSS plugin to parse CSS and add vendor prefixes.
- `cross-env`: Sets environment variables cross-platform for scripts.
- `eslint`: Pluggable linting utility for JavaScript and JSX/TSX.
- `eslint-config-next`: Standard ESLint configuration for Next.js projects.
- `eslint-config-prettier`: Disables ESLint rules that conflict with Prettier.
- `husky`: Manages Git hooks to automate tasks.
- `lint-staged`: Runs linters against staged Git files.
- `postcss`: Tool for transforming CSS with JavaScript plugins.
- `postcss-import`: PostCSS plugin to inline `@import` rules.
- `prettier`: Opinionated code formatter.
- `tailwindcss`: Utility-first CSS framework.
- `typescript`: Typed superset of JavaScript that compiles to plain JavaScript.
