import pkg from './package'

export default {
  mode: 'universal',

  router: {
    base:         '/trades/arts/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'BEAD - Trades District Public Art',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ]
  },

  manifest: {
    name:         'BEAD - Bloomington Entertainment & Arts District',
    short_name:   'BEAD',
    description:  'Showcasing the five finalists for the Trades District Public Art.',
    theme_color:  '#1c1c1c'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#8c28ff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/ga.js',        ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/pwa', {
      icon: true,
      sizes: [16, 120, 144, 152, 192, 384, 512],
    }]
  ],

  /*
  ** Build configuration
  */
  builder: {
    extend (config, { isDev }) {
      if(!ctx.isDev) {
        config.output.publicPath = '/trades/arts/_nuxt/'
      }
    }
  }
}
