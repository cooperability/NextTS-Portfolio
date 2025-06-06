# [Co-Operability.com](https://www.cooperability.com)

My Next.js portfolio website, running on Vercel. I'm parting with IPFS because it's too expensive to keep a responsive page there.

## TODO:

- OC input fields block numbers but should pop up numpad on mobile
- SEO; site:cooperability.com

## Linting, Formatting, and Testing

- **Automation**: `husky` and `lint-staged` automatically run a pre-commit lint, format, and test of staged files.
- **Available Scripts:**
- `yarn dev`: Runs `next dev`, starting the local server
- `yarn lint`: Runs **ESLint** (See `eslint.config.mjs`), extending `next/core-web-vitals`, checking for Next.js errors and style issues.
- `yarn format`: Runs **Prettier** (See `.prettierrc.json`) to automatically format all project files. Integrated with ESLint via `eslint-config-prettier` to avoid conflicting rules.
- `yarn test`: Runs **Jest** to automatically test; Jest also automatically tests during the pre-commit hook.
- `yarn analyze`: Runs `cross-env ANALYZE=true next build` to build the project and open an interactive bundle analyzer to inspect bundle sizes.
- `yarn run access`: Starts the development server, then runs a series of accessibility checks: ESLint for static analysis, Axe-core for runtime WCAG checks, and Lighthouse for an accessibility audit. Reports are saved to the `./accessibility-reports/` directory. You should review these reports and update the `src/resources/AccessibilityStatement.mdx` file accordingly.

## Privacy Policy, SEO, Analytics

- **Privacy**: Privacy-forward Next Analytics is used instead of Google Analytics for better anonymization.
- **SEO**: Invisible h1 headers

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

## Resources I used to build this website

[Light/Dark Mode Button in NextJS](https://www.youtube.com/watch?v=optD7ns4ISQ) \
[Tailwind with Next](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css) \
[Server-side rendering a random number](https://auroratide.com/resources/server-side-rendering-a-random-number) \
[Adding analytics with Vercel](https://ahmadrosid.com/blog/vercel-analytics-tutorial) \
[Changing the site's icon](https://stackoverflow.com/questions/74353529/how-to-add-a-favicon-to-a-nextjs-app-structure-possible-hydration-issue) \
[something to explain mobile compatibility](https://en.wikipedia.org/wiki/Web_Compatibility_Test_for_Mobile_Browsers)
[Vercel Observability](https://vercel.com/docs/observability); [Vercel Analytics](https://vercel.com/docs/analytics)
[Jest Testing in Next.js](https://nextjs.org/docs/pages/guides/testing/jest)

## Key Learnings from Recent Development (MDX, Theming, Layouts)

1. **Date Sorting Implementation:**
   -When implementing date-sorting for posts:

   - Direct string comparison with `localeCompare()` is more reliable than creating new Date objects for ISO 8601 formatted dates (YYYY-MM-DD)
   - Complex date parsing can lead to TypeScript construct signature errors and unnecessary type assertions

2. **Using React Components in MDX:**

   - When using `next-mdx-remote` (or similar libraries) to render MDX pages dynamically (e.g., for blog posts under `/resources/[slug].tsx`), components imported _inside_ the `.mdx` file must also be explicitly passed to the `<MDXRemote />` component via its `components` prop in the page rendering file (`[slug].tsx`).

3. **CSS Modules and Theming (`next-themes`):**
   **\* Attempting to define global theme styles using `:root` or attribute selectors like `[data-theme='dark']` directly within a **CSS Module\*\* file (e.g., `utils.module.css`) will cause build errors. CSS Modules expect locally scoped class names or `:global(...)` syntax for non-scoped rules.S

   - For theme switching integrated with `next-themes`, the effective pattern is to define **theme-specific classes** within the CSS Module (e.g., `.dropdownLight`, `.dropdownDark`).
   - React components should then use the `useTheme` hook from `next-themes` to get the current theme (`'light'` or `'dark'`) and conditionally apply the corresponding theme classes alongside base structural classes (e.g., `className={\`\${styles.dropdown} \${isDarkMode ? styles.dropdownDark : styles.dropdownLight}\`}`).

4. **Tailwind CSS and Next.js Integration:**

   - If Tailwind utility classes are present in the rendered HTML (verified via browser inspector) but the corresponding CSS rules are not being applied (styles don't appear in the computed styles), it often indicates an issue with Tailwind's CSS generation process.
   - Ensure the `content` array in `tailwind.config.js` correctly includes paths to all files where Tailwind classes are used (e.g., `./components/**/*.{js,ts,jsx,tsx}`, `./sections/**/*.{js,ts,jsx,tsx}`).
   - Verify that `styles/global.css` (or your main CSS entry point imported in `_app.tsx`) contains the `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;` directives.
   - Modern Next.js versions (10+) generally handle Tailwind integration seamlessly _without_ requiring a separate `postcss.config.js` file, provided `tailwindcss` and `autoprefixer` are installed. Adding an explicit `postcss.config.js` can conflict with Next.js's built-in PostCSS setup. If encountering issues, try removing `postcss.config.js` and restarting the development server.

5. **Opioid Converter Integration & Mobile Refinement:**

   - Integrated the standalone `OpioidConverter` by creating `/opioid-converter` with a custom `OpioidConverterLayout` (bypassing the default layout via `Page.getLayout` and `_app.tsx` checking `Component.getLayout`; required exporting `NextPageWithLayout`). Refactored the component to use React hooks (`useState`, `useCallback`, `useEffect`) and styled with CSS Modules (using `clamp()` for responsive sizing).
   - Extensive mobile refinement for the data-dense table was required beyond standard responsive techniques, involving adjustments to CSS Grid (`grid-template-columns`), input `min-width`, header text wrapping (`white-space: normal`), and element `gap`.

6. **Case Sensitivity in File Names (Windows vs. Linux Deployment):**
   - **Problem**: Images and assets may work locally on Windows (case-insensitive file system) but fail in production on Vercel/Linux (case-sensitive file system).
   - **Symptoms**: Files load correctly in local development but return 404 errors in production deployment.
   - **Solution**: Use `git mv oldName.png newName.png` to rename files in git to match the exact case used in code references. For example, if code references `linkedin.png` but git tracks `Linkedin.png`, use `git mv public/images/Linkedin.png public/images/linkedin.png`.
   - **Prevention**: Always use consistent lowercase naming for assets, or ensure file names in git exactly match their references in code.

### Advanced Jest Setup and TypeScript Learnings

Setting up Jest with Next.js, TypeScript, and ESLint involved several key insights, particularly for ensuring correct type checking for test utilities and robustly testing dynamic components:

1.  **Jest-DOM Matcher Types (`toBeInTheDocument`, etc.):**

    - While `@testing-library/jest-dom` provides its own types, and `jest.setup.js` (with `import '@testing-library/jest-dom';`) correctly extends Jest's matchers at runtime, TypeScript's static type checking (especially within IDEs and ESLint) can be tricky.
    - **Solution:** The most reliable fix for `Property 'toBeInTheDocument' does not exist...` type errors was to explicitly add `"types": ["jest", "@testing-library/jest-dom"]` to the `compilerOptions` in the **root `tsconfig.json`**. While a `tsconfig.jest.json` can specify these, ensuring they are in the root `tsconfig.json` helps IDEs and ESLint consistently pick them up.
    - Remember to restart your IDE/TypeScript server and sometimes even clear `node_modules` (followed by a reinstall) after significant TypeScript configuration changes if type errors persist unexpectedly.

2.  **Mocking `Math.random` for Component State:**

    - When testing components that use `Math.random()` in their `useState` initializer (e.g., to pick a random initial quote), directly mocking `global.Math.random` needs to be active _before_ the component's first render in a test.
    - **Testing Strategy:** For increased robustness and simpler test logic, instead of asserting exact random outputs, consider a strategy that:
      1.  Captures the initial state's rendered value.
      2.  Simulates an interaction that should change the state.
      3.  Captures the new state's rendered value.
      4.  Asserts that the new value is different from the initial value.
          This tests the change mechanism effectively. A simplified `Math.random` mock (e.g., returning distinct values like 0.1 then 0.8 on subsequent calls) can still be useful to ensure different values are generated by the component.

3.  **ESLint and `jest.config.js`:**

    - The `jest.config.js` file, especially when using `next/jest`, typically uses `require()`. If your ESLint setup (e.g., with `@typescript-eslint`) disallows `require()`, add `// eslint-disable-next-line @typescript-eslint/no-require-imports` above the specific `require()` line in `jest.config.js`.

4.  **Integrating Jest with `lint-staged`:**
    - To run Jest tests on staged files during pre-commit, add the following to your `lint-staged` configuration (e.g., in `package.json`):
      ```json
      "*.{js,jsx,ts,tsx}": [
        // ... other commands like prettier, eslint ...
        "jest --bail --findRelatedTests --passWithNoTests"
      ]
      ```
    - `--bail`: Exits on the first test failure.
    - `--findRelatedTests`: Runs tests related to changed files.
    - `--passWithNoTests`: Prevents an error if no tests are found for the staged files, which is crucial for `lint-staged`.

## Bundle Analysis & Optimization

### How to Interpret Bundle Analyzer Results

Run `yarn analyze` to generate bundle visualization reports in `.next/analyze/`:

- **nodejs.html**: Server-side bundle analysis
- **edge.html**: Edge runtime bundle analysis

#### What to Look For:

**🟢 Good Signs:**

- Balanced rectangle sizes (no single massive dependencies)
- Clear separation between vendor code and application code
- Efficient code splitting across routes

**🟡 Monitor These:**

- **Large Dependencies**:
  - `date-fns`: Ensure tree-shaking with specific imports: `import { format } from 'date-fns'`
  - `@heroicons/react`: Should only include used icons
  - MDX processing libraries: Necessary but watch for bloat

**🔴 Red Flags:**

- Duplicate dependencies across bundles
- Disproportionately large rectangles
- Unused code from large libraries

#### Bundle Optimization Checklist:

- [ ] **Import Optimization**: Use specific imports instead of entire libraries
- [ ] **Dynamic Imports**: Use `React.lazy()` or `next/dynamic` for code splitting
- [ ] **Image Optimization**: Leverage Next.js `Image` component (already using)
- [ ] **Dependency Audit**: Regular review of bundle impact before adding new dependencies
- [ ] **Tree Shaking**: Verify webpack is eliminating unused code

#### Current Bundle Health Status:

- ✅ **Lean Runtime Dependencies**: Well-curated dependency list
- ✅ **Modern Stack**: React 19 + Next.js 15 optimizations
- ✅ **Tree-Shakable Libraries**: Most dependencies support tree-shaking
- ⚠️ **Monitor**: MDX stack and date-fns usage patterns

### Performance Monitoring

Combined with Vercel Analytics and Speed Insights, use bundle analysis to:

1. **Identify bottlenecks** before they impact users
2. **Track bundle size over time** as features are added
3. **Optimize critical paths** for better Core Web Vitals

## SEO Strategy & Implementation

### Completed SEO Tasks

- **✅ Google Search Console (GSC) Integration:** Monitoring search performance and indexing
- **✅ Meta Descriptions:** Compelling descriptions for search results
- **✅ Header Tags:** Hierarchical structure with accessible H1 tags
- **✅ Image Alt Text:** Descriptive text for accessibility and SEO
- **✅ Technical SEO:**
  - HTTPS security (standard with Vercel)
  - Mobile-responsive design
  - Site speed optimization (monitored via Vercel Speed Insights)
  - 301 redirects implemented in `next.config.js` for old URLs (`/skills` → `/demos`, `/prompts` → `/resources`)
- **✅ Internal Linking:** Strategic cross-page linking for navigation and SEO
- **✅ Sitemap Submission:** Up-to-date XML sitemap submitted to GSC

### SEO Maintenance Tasks

- **[ ] Content Strategy:** Continue incorporating "Cooper Reed" and "cooperability.com" naturally in content
- **[ ] Regular GSC Audits:** Monitor for indexing issues and optimization opportunities
- **[ ] Content Freshness:** Keep content updated and relevant

### Quick Guide: Google Search Console Setup

1. **Access GSC:** [Google Search Console](https://search.google.com/search-console)
2. **Add Property:** Select "Domain" property type, enter `cooperability.com`
3. **DNS Verification:** Add TXT record from GSC to domain registrar DNS settings
4. **Submit Sitemap:** Add `sitemap.xml` in GSC Sitemaps section
5. **Monitor:** Review performance and indexing status regularly

### Addressing Search Result Issues

Historical "Untitled" listings and old paths (`/skills`, `/prompts`) have been resolved with:

- Proper `<title>` tags on all pages
- 301 redirects in `next.config.js`
- Updated sitemap submission
- GSC monitoring for re-indexing progress

## Accessibility Implementation & Testing

### Completed Accessibility Features

- **✅ Semantic HTML5:** Proper structural elements and heading hierarchy
- **✅ Keyboard Navigation:** All interactive elements accessible via keyboard
- **✅ ARIA Attributes:** Enhanced screen reader support for navigation
- **✅ Responsive Design:** Tested across devices and screen sizes
- **✅ Color Contrast:** WCAG AA compliance in light and dark themes
- **✅ Automated Testing Suite:**
  - `eslint-plugin-jsx-a11y`: Static analysis during development
  - `axe-core-cli`: Runtime WCAG testing
  - Lighthouse: Comprehensive accessibility audits
  - Combined in `yarn access` command with reports saved to `./accessibility-reports/`
- **✅ Manual Testing:** Browser dev tools (Axe DevTools) and keyboard navigation testing

### Accessibility Maintenance Tasks

- **[ ] Advanced Testing:** Explore Playwright + Axe-core for CI-integrated theme testing
- **[ ] Button Enhancement:** Ensure all iconic buttons have discernible screen reader text
- **[ ] User Feedback Integration:** Process accessibility feedback for continuous improvement
- **[ ] WCAG Compliance Review:** Regular audits against WCAG 2.1 AA standards

### Known Testing Limitations

- Axe CLI sometimes reports false positives for contrast on dynamically themed content
- Pre-hydration testing doesn't always capture themed states accurately
- Manual browser testing remains the most reliable method for theme-specific accessibility
