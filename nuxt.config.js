
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '',
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk
        ? `${titleChunk} - Simak Education`
        : 'Simak Education'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website Simak Education' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo-small.svg' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        integrity:
          'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
        crossorigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap',
      },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~/assets/css/app.scss',
    },
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: '~/plugins/vee-validate.js',
      ssr: true,
    },
    {
      src: '~/plugins/vue-slick-carousel.js',
      ssr: true,
    },
    {
      src: '~/plugins/vue-select.js',
      ssr: true,
    },
    {
      src: '~/plugins/vue-moment.js',
      ssr: 'client',
    },
    {
      src: '~/plugins/vue-markdown.js',
      ssr: false,
    },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/nuxt-i18n
    'nuxt-i18n',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL,
    browserBaseURL: process.env.API_URL
  },
  /*
   ** Auth module configuration
   ** Doc: https://github.com/nuxt-community/axios-module
   */
  auth: {
    strategies: {
      local: {
        token: {
          prefix: 'Bearer ',
          property: 'access_token',
          maxAge: 86400,
        },
        endpoints: {
          login: { 
            url: '/api/v1/auth/web/login', 
            method: 'post', 
            // propertyName: 'token.token' 
          },
          user: { 
            url: '/api/v1/auth/me', 
            method: 'get', 
            // propertyName: false 
          },
          logout: false,
        },
        // tokenRequired: true,
      }
    },
    // resetOnError: true,
    redirect: {
      login: '/',
      logout: '/',
      // home: '/dashboard'
    },
  },
  /*
   ** Nuxt I18n module configuration
   ** Doc: https://github.com/nuxt-community/nuxt-i18n
   */
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'id',
    locales: [{
        code: 'en',
        file: 'en-EN.js'
      },
      {
        code: 'id',
        file: 'id-ID.js'
      },
    ],
    lazy: true,
    langDir: 'lang/'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: ['vee-validate/dist/rules'],
  },

  server: {
    port: process.env.PORT || 3000, // default: 3000
    host: process.env.HOST || 'localhost', // default: localhost
  },
}
