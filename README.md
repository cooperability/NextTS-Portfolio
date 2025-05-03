# Co-Operability

A dynamic personal website built with Next.js, running on Vercel. I'm parting with IPFS because it's too expensive to keep a responsive page there, although my original ultralight IPFS site will continue running.

Visit: [cooperability.com](https://www.cooperability.com).

## Resources I used to build this website
[Light/Dark Mode Button in NextJS](https://www.youtube.com/watch?v=optD7ns4ISQ) \
[Tailwind with Next](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css) \
[Server-side rendering a random number](https://auroratide.com/resources/server-side-rendering-a-random-number) \
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

## Key Learnings from Recent Development (MDX, Theming, Layouts)

During a recent development session focusing on UI components and MDX integration, several key insights emerged:

1.  **Using React Components in MDX:**
    *   While standard Markdown doesn't support interactive components, **MDX (`.mdx`)** allows embedding and rendering custom React components directly within Markdown content.
    *   When using `next-mdx-remote` (or similar libraries) to render MDX pages dynamically (e.g., for blog posts under `/resources/[slug].tsx`), components imported *inside* the `.mdx` file must also be explicitly passed to the `<MDXRemote />` component via its `components` prop in the page rendering file (`[slug].tsx`). See [this discussion](https://github.com/vercel/next.js/discussions/39719) for more context.

2.  **CSS Modules and Theming (`next-themes`):**
    ***   Attempting to define global theme styles using `:root` or attribute selectors like `[data-theme='dark']` directly within a **CSS Module** file (e.g., `utils.module.css`) will cause build errors. CSS Modules expect locally scoped class names or `:global(...)` syntax for non-scoped rules.
    *   For theme switching integrated with `next-themes`, the effective pattern is to define **theme-specific classes** within the CSS Module (e.g., `.dropdownLight`, `.dropdownDark`).
    *   React components should then use the `useTheme` hook from `next-themes` to get the current theme (`'light'` or `'dark'`) and conditionally apply the corresponding theme classes alongside base structural classes (e.g., `className={\`\${styles.dropdown} \${isDarkMode ? styles.dropdownDark : styles.dropdownLight}\`}`).

3.  **Next.js Page Layouts (`getLayout` pattern):**
    ***   When using the `getLayout` pattern (often in conjunction with `_app.tsx` or directly on a page component) to apply a consistent `Layout` component, ensure the page component itself **does not** also wrap its content in the same `Layout`.
    *   Doing so results in nested layouts and duplication of shared elements like headers and footers. The page component should return only its unique content (often wrapped in a `React.Fragment`), and `getLayout` should be solely responsible for applying the main `Layout` wrapper.

4.  **Tailwind CSS and Next.js Integration:**
    *   If Tailwind utility classes are present in the rendered HTML (verified via browser inspector) but the corresponding CSS rules are not being applied (styles don't appear in the computed styles), it often indicates an issue with Tailwind's CSS generation process.
    *   Ensure the `content` array in `tailwind.config.js` correctly includes paths to all files where Tailwind classes are used (e.g., `./components/**/*.{js,ts,jsx,tsx}`, `./sections/**/*.{js,ts,jsx,tsx}`).
    *   Verify that `styles/global.css` (or your main CSS entry point imported in `_app.tsx`) contains the `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;` directives.
    *   **Crucially:** Modern Next.js versions (10+) generally handle Tailwind integration seamlessly *without* requiring a separate `postcss.config.js` file, provided `tailwindcss` and `autoprefixer` are installed. Adding an explicit `postcss.config.js` can sometimes conflict with Next.js's built-in PostCSS setup and may lead to unexpected styling breaks. If encountering issues, try removing `postcss.config.js` and restarting the development server.

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

## Portfolio Pages

*   [Landing Page](https://auroratide.com/)
*   [Resume](https://docs.google.com/document/d/15wtKG9juJMYQOI793LvNYMfmeu7hyErO4xWixkTrSHI/edit?usp=sharing)
*   [Resources](https://auroratide.com/resources)
*   [Server-side rendering a random number](https://auroratide.com/resources/server-side-rendering-a-random-number) \
    [All Links](https://auroratide.com/resources/linktree)
