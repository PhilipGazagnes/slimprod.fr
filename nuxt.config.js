module.exports = {
  target: 'static',
  env: {},
  head: {
    htmlAttrs: {
      lang: 'fr-FR',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no',
      },
    ],
  },
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    // [
    //   '@nuxtjs/robots',
    //   {
    //     UserAgent: '*',
    //     Disallow:
    //       process.env.BASE_URL === 'https://www.fun-live.fr/' ? '' : '/',
    //     Sitemap:
    //       process.env.BASE_URL === 'https://www.fun-live.fr/'
    //         ? `${process.env.BASE_URL}sitemap.xml`
    //         : undefined,
    //   },
    // ],
    // '@nuxtjs/sitemap',
    // ['nuxt-canonical', { baseUrl: process.env.BASE_URL }],
  ],
  plugins: [
    { src: '~/plugins/lazyload.js', mode: 'client' },
    { src: '~/plugins/in-view.js', mode: 'client' },
    { src: '~/plugins/gtm.js', mode: 'client' },
    // { src: '~/plugins/tawk-to.js', mode: 'client' },
    { src: '~/plugins/gsap.js', mode: 'client' },
  ],
  build: {
    postcss: {
      plugins: {
        // 'postcss-custom-properties': {
        //   importFrom: [
        //     {
        //       customProperties: {
        //         '--primaryColor': '#010223',
        //       },
        //     },
        //   ],
        // },
        'postcss-nested': {},
        'postcss-custom-media': {
          importFrom: [
            {
              customMedia: {
                '--phone': '(min-width: 480px)',
                '--tablet': '(min-width: 768px)',
                '--desktop': '(min-width: 992px)',
                '--largeDesktop': '(min-width: 1200px)',
              },
            },
          ],
        },
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
  sitemap: {
    hostname: 'https://www.slimprod.fr',
  },
};
