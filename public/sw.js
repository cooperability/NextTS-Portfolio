if (!self.define) {
  let e,
    s = {}
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;((e.src = a), (e.onload = s), document.head.appendChild(e))
        } else ((e = a), importScripts(a), s())
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (i, n) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[c]) return
    let t = {}
    const r = (e) => a(e, c),
      d = { module: { uri: c }, exports: t, require: r }
    s[c] = Promise.all(i.map((e) => d[e] || r(e))).then((e) => (n(...e), t))
  }
}
define(['./workbox-7e7a8aeb'], function (e) {
  'use strict'
  ;(importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/dynamic-css-manifest.json',
          revision: 'd751713988987e9331980363e24189ce',
        },
        {
          url: '/_next/static/RZ7OQOXACPGy8HTpeqjiA/_buildManifest.js',
          revision: 'd08d1afa0eb1646d550a1352631dba6f',
        },
        {
          url: '/_next/static/RZ7OQOXACPGy8HTpeqjiA/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/142.2d4784e89feb9ebd.js',
          revision: '2d4784e89feb9ebd',
        },
        {
          url: '/_next/static/chunks/502-96340a431f524c4b.js',
          revision: '96340a431f524c4b',
        },
        {
          url: '/_next/static/chunks/534-978595dbaa84e7f3.js',
          revision: '978595dbaa84e7f3',
        },
        {
          url: '/_next/static/chunks/716-b70398b9a54d9b91.js',
          revision: 'b70398b9a54d9b91',
        },
        {
          url: '/_next/static/chunks/803-e843c32b5ad06c1e.js',
          revision: 'e843c32b5ad06c1e',
        },
        {
          url: '/_next/static/chunks/867.7c4b7084ee18a80e.js',
          revision: '7c4b7084ee18a80e',
        },
        {
          url: '/_next/static/chunks/967-26a62896d945a060.js',
          revision: '26a62896d945a060',
        },
        {
          url: '/_next/static/chunks/framework-4d0803bfb6adbcce.js',
          revision: '4d0803bfb6adbcce',
        },
        {
          url: '/_next/static/chunks/main-b214d9cc5e2e9c2b.js',
          revision: 'b214d9cc5e2e9c2b',
        },
        {
          url: '/_next/static/chunks/pages/_app-ef01cf468c7b2216.js',
          revision: 'ef01cf468c7b2216',
        },
        {
          url: '/_next/static/chunks/pages/_error-3a54ddeec3ec40fc.js',
          revision: '3a54ddeec3ec40fc',
        },
        {
          url: '/_next/static/chunks/pages/demos-e14a9c558e960c59.js',
          revision: 'e14a9c558e960c59',
        },
        {
          url: '/_next/static/chunks/pages/index-c6647eb6dcbe0ae6.js',
          revision: 'c6647eb6dcbe0ae6',
        },
        {
          url: '/_next/static/chunks/pages/opioid-converter-b4d9deed1663b7ea.js',
          revision: 'b4d9deed1663b7ea',
        },
        {
          url: '/_next/static/chunks/pages/prompt-composer-ea9b2f2997da8b5a.js',
          revision: 'ea9b2f2997da8b5a',
        },
        {
          url: '/_next/static/chunks/pages/resources-58c6ffc31a89d10d.js',
          revision: '58c6ffc31a89d10d',
        },
        {
          url: '/_next/static/chunks/pages/resources/%5Bslug%5D-db54b149b9afdce4.js',
          revision: 'db54b149b9afdce4',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-75bbe9c1a5f18861.js',
          revision: '75bbe9c1a5f18861',
        },
        {
          url: '/_next/static/css/3d9871540eb56ccd.css',
          revision: '3d9871540eb56ccd',
        },
        {
          url: '/_next/static/css/4a0fd44e6ceaede7.css',
          revision: '4a0fd44e6ceaede7',
        },
        {
          url: '/_next/static/css/d375119ec6df9a81.css',
          revision: 'd375119ec6df9a81',
        },
        { url: '/icon.ico', revision: '10e1829238963bd8ee137f1c9e988cd0' },
        {
          url: '/icons/apple-touch-icon.png',
          revision: 'e1b0f4832728f21198d1c9bab1720e7c',
        },
        {
          url: '/icons/favicon-96x96.png',
          revision: 'a5b6af2c112617c1c5d104a9bfa993f8',
        },
        {
          url: '/icons/favicon.ico',
          revision: '6f76e37a45721044bb4d6d339625a1b4',
        },
        {
          url: '/icons/favicon.svg',
          revision: '61b0a38358b8825c57c691dcd6a2b3a5',
        },
        {
          url: '/icons/site.webmanifest',
          revision: '0f656e726df754958b5548837f9b827a',
        },
        {
          url: '/icons/web-app-manifest-192x192.png',
          revision: '7ef1314456b103c1d8735da4ab374611',
        },
        {
          url: '/icons/web-app-manifest-512x512.png',
          revision: 'b2247516a7d9b8890fe01b88d1755286',
        },
        {
          url: '/images/CHOIR.png',
          revision: '8c329f6d09400656c93a03f0930f7d74',
        },
        {
          url: '/images/bluesky.png',
          revision: 'b2b03a64353a4a70023f54e88ca08442',
        },
        {
          url: '/images/css.png',
          revision: '75e4d6d5a0f6b8f4e4030f9b00511ca7',
        },
        {
          url: '/images/django.png',
          revision: 'ca591b22bbd800117e26a10acb7140dd',
        },
        {
          url: '/images/docker.png',
          revision: 'daf63aeacc95336c602c206abac18697',
        },
        {
          url: '/images/firebase.png',
          revision: 'c24b6b9c0fcd84c7b258879880472660',
        },
        {
          url: '/images/github.png',
          revision: '439d255873e666051b6fe22519a7eb0b',
        },
        {
          url: '/images/headshot.jpg',
          revision: 'c47819944333eabf9e300fadfbedfff8',
        },
        {
          url: '/images/linkedin.png',
          revision: '891b44e23e42648639dc5306f2919edc',
        },
        {
          url: '/images/mongodb.png',
          revision: '20d8652c9fd1853ac11a27da7b915ac1',
        },
        {
          url: '/images/nextjs.png',
          revision: '511a46200397895b799d3b362199e571',
        },
        {
          url: '/images/njs.png',
          revision: '99d580e2755af3d2ee4c763d408f6359',
        },
        {
          url: '/images/node.png',
          revision: '55e83371dbf50a5f027b1fe31a054ad3',
        },
        {
          url: '/images/operamini.png',
          revision: '3c71a07c5f066c314d22c4799ba41f71',
        },
        {
          url: '/images/poetry.png',
          revision: 'aeebd2f5d4db544ed9af633dddb4233f',
        },
        {
          url: '/images/postgresql.png',
          revision: '86b7fa154f78e1bd0502e9cb3e31770b',
        },
        {
          url: '/images/profile.jpg',
          revision: '9e60e83eb4ccf64ef9f049f381d2810b',
        },
        {
          url: '/images/python.png',
          revision: 'b184270dddbb9fb229621c5da1c01103',
        },
        {
          url: '/images/react.png',
          revision: 'c3ba82a536fe4983dad4c06b578dcd5d',
        },
        {
          url: '/images/redux.png',
          revision: '8d7c2068c11984bf9944b3484fb163ad',
        },
        {
          url: '/images/shadcn.png',
          revision: '0d5bd6be8e1f1f4e93d3947ac20df1a3',
        },
        {
          url: '/images/substack.png',
          revision: 'dfcc31215ace60952d571ad5574d441a',
        },
        {
          url: '/images/svelte.png',
          revision: 'fc855b3fbf6ea060624302a78584bb72',
        },
        {
          url: '/images/tailwind.png',
          revision: 'a0ce90f3f9795b652ca714c063c4dbf3',
        },
        {
          url: '/images/typescript.png',
          revision: '2909cc6b65ff2f5f85326741ba018245',
        },
        {
          url: '/images/vercel.png',
          revision: '6ec6c7b7f67a45bc9ada196e2124ae44',
        },
        {
          url: '/images/youtube.png',
          revision: '28aef3fa22ff8d13d7cf53f80a293fb9',
        },
        { url: '/oldSite.html', revision: '481dd8d10e8b4a7c30454a78f90fdc93' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    ))
})
