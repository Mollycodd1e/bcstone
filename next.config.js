module.exports = {
  reactStrictMode: true,
}

module.exports = {
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  images: {
    loader: 'akamai',
    path: '',
  },

/*  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './pages/!**!/!*.{js,jsx,ts,tsx}',
          './components/!**!/!*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"]
      }
    ],
  ]*/
}

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
//
// module.exports = nextConfig