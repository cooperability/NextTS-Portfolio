# [Co-Operability.com](https://www.cooperability.com)

My Next.js portfolio website, running on Vercel. I'm parting with IPFS because it's too expensive to keep a responsive page there, although my original ultralight IPFS site will continue running.

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
- Add papers whose tech I've contributed to
- alt+shift+f automatically runs prettier or whatever linter is configured

## Key Learnings from Recent Development (MDX, Theming, Layouts)

1.  **Using React Components in MDX:**

    - While standard Markdown doesn't support interactive components, **MDX (`.mdx`)** allows embedding and rendering custom React components directly within Markdown content.
    - When using `next-mdx-remote` (or similar libraries) to render MDX pages dynamically (e.g., for blog posts under `/resources/[slug].tsx`), components imported _inside_ the `.mdx` file must also be explicitly passed to the `<MDXRemote />` component via its `components` prop in the page rendering file (`[slug].tsx`). See [this discussion](https://github.com/vercel/next.js/discussions/39719) for more context.

2.  **CSS Modules and Theming (`next-themes`):**
    **\* Attempting to define global theme styles using `:root` or attribute selectors like `[data-theme='dark']` directly within a **CSS Module\*\* file (e.g., `utils.module.css`) will cause build errors. CSS Modules expect locally scoped class names or `:global(...)` syntax for non-scoped rules.

    - For theme switching integrated with `next-themes`, the effective pattern is to define **theme-specific classes** within the CSS Module (e.g., `.dropdownLight`, `.dropdownDark`).
    - React components should then use the `useTheme` hook from `next-themes` to get the current theme (`'light'` or `'dark'`) and conditionally apply the corresponding theme classes alongside base structural classes (e.g., `className={\`\${styles.dropdown} \${isDarkMode ? styles.dropdownDark : styles.dropdownLight}\`}`).

3.  **Tailwind CSS and Next.js Integration:**

    - If Tailwind utility classes are present in the rendered HTML (verified via browser inspector) but the corresponding CSS rules are not being applied (styles don't appear in the computed styles), it often indicates an issue with Tailwind's CSS generation process.
    - Ensure the `content` array in `tailwind.config.js` correctly includes paths to all files where Tailwind classes are used (e.g., `./components/**/*.{js,ts,jsx,tsx}`, `./sections/**/*.{js,ts,jsx,tsx}`).
    - Verify that `styles/global.css` (or your main CSS entry point imported in `_app.tsx`) contains the `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;` directives.
    - **Crucially:** Modern Next.js versions (10+) generally handle Tailwind integration seamlessly _without_ requiring a separate `postcss.config.js` file, provided `tailwindcss` and `autoprefixer` are installed. Adding an explicit `postcss.config.js` can sometimes conflict with Next.js's built-in PostCSS setup and may lead to unexpected styling breaks. If encountering issues, try removing `postcss.config.js` and restarting the development server.

4.  **TypeScript Strictness, Layout Customization, and Responsiveness:**

    - Enabling TypeScript's strict mode often reveals numerous "implicitly has an 'any' type" errors, particularly in component props (`Layout`, `_app`, API routes, page components). Fixing these requires systematically adding explicit types (e.g., `React.ReactNode`, `AppProps`, `NextApiRequest/NextApiResponse`, custom interfaces) and potentially handling `undefined` cases (like route parameters `params.slug`). Using `npx tsc --noEmit` helps identify all errors upfront, although they often need individual correction.
    - To render a page _without_ the application's default layout (e.g., for a standalone tool like the Opioid Converter), define a `getLayout` property on the specific page component (`Page.getLayout = (page) => page`). The `_app.tsx` must then be updated to respect this property, typically by checking `Component.getLayout` and falling back to the default layout otherwise.
    - When creating components intended for various contexts (like the standalone converter page), ensuring mobile-friendliness from the start is crucial. This typically involves using responsive design principles within the component itself, such as leveraging Tailwind CSS's responsive prefixes (e.g., `md:flex-row`, `w-full sm:w-auto`) for layout adjustments, flexible sizing, and testing across different viewport sizes using browser developer tools.

5.  **Integrating and Refining the Opioid Converter:**

    - Integrating the standalone `OpioidConverter` component required careful file restructuring within the `components/` directory and establishing a dedicated page (`/opioid-converter`) with its own layout (`OpioidConverterLayout`) to bypass the default site template. Reimplementing the original class-based component using React hooks (`useState`, `useCallback`, `useEffect`) allowed for modern state management and real-time calculation updates. Achieving the desired visual style (matching a legacy maroon/grey theme) involved iterative refinement of CSS Modules, addressing challenges with table layouts vs. flexbox for row alignment, ensuring consistent row separation (`border-collapse: collapse`), managing active input states, and implementing responsive sizing using `clamp()` and relative units for mobile-friendliness. Debugging involved resolving CSS Module syntax errors (like improper `:root` usage) and React build errors (e.g., misuse of HTML `<link>` vs. Next.js `<Link>`).

6.  **Opioid Converter Refinement - Layout & Responsiveness:**

    - Further refining the `OpioidConverter` involved restructuring its associated files. The component logic (`OpioidConverter.tsx`), styles (`OpioidConverter.module.css`), types, and utilities were consolidated under `src/components/opioid-converter/`. Shared components like `Button.tsx` were moved to `src/components/common/` to improve reusability.
    - A key challenge was isolating the converter's specific layout from the site's default. This was achieved using Next.js's per-page layout pattern: the custom layout component (`OpioidConverterLayout.tsx`) was placed within the feature's directory, the converter page (`src/pages/opioid-converter.tsx`) was updated to export a `getLayout` function referencing this custom layout, and `src/pages/_app.tsx` was configured to prioritize page-level layouts via `Component.getLayout`, necessitating the export of the `NextPageWithLayout` type from `_app.tsx` to resolve type errors.
    - Ensuring mobile-friendliness for the standalone converter page required careful application of responsive design principles, primarily using TailwindCSS utility classes and potentially CSS functions like `clamp()` within its dedicated CSS Module, ensuring usability across various screen sizes.

7.  **Iterative Mobile Responsiveness for Complex Components:**
    - Making the `OpioidConverter` mobile-friendly required an iterative approach beyond basic responsive design. Initial adjustments using `@media` queries addressed padding, font sizes (`clamp()`), and flexbox layouts. However, fine-tuning was necessary to address specific layout issues on smaller screens, such as the middle "Dosage per Day" column appearing cramped. This involved adjusting CSS Grid `grid-template-columns`, ensuring sufficient `min-width` for input fields to display increment values legibly, allowing header text (`.headerCell`) to wrap (`white-space: normal`), and reducing inter-element `gap` to optimize space. This process highlights that achieving good mobile UX for data-dense components often requires multiple rounds of targeted CSS refinement beyond initial responsive adaptations.

## Linting & Formatting

This project uses ESLint and Prettier to maintain code quality and consistent formatting.

- **ESLint**: Configured via `eslint.config.mjs`, extending `next/core-web-vitals` for Next.js specific rules and best practices. It checks for potential errors and code style issues.
- **Prettier**: Configured via `.prettierrc.json`, handles automatic code formatting (line breaks, spacing, quotes, etc.). It's integrated with ESLint via `eslint-config-prettier` to avoid conflicting rules.

**Automation:**
`husky` and `lint-staged` automatically lint and format staged files before each commit.

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

- `@eslint/compat`: Compatibility utilities for ESLint flat config.
- `@eslint/eslintrc`: Utilities for using `.eslintrc` configs with flat config.
- `@eslint/js`: Core JavaScript rules for ESLint.
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
- `typescript-eslint`: Tooling which enables ESLint to lint TypeScript code.
