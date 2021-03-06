import colors from 'vuetify/es5/util/colors'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - kasir',
        title: 'kasir',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/apollo',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa', [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: "AIzaSyDLkc_jS2Y1dohRKLHIFr4U8CH82L4Im-I",
                    authDomain: "tugas-altera.firebaseapp.com",
                    projectId: "tugas-altera",
                    storageBucket: "tugas-altera.appspot.com",
                    messagingSenderId: "637571888803",
                    appId: "1:637571888803:web:820e2a08052bbf5ebfb116",
                    measurementId: "G-S55HRML7LR"
                },
                services: {
                    auth: {
                        initialize: {
                            onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
                        },
                    },


                },
            }
        ]

    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },
    pwa: {
        manifest: {
            name: "KasirKu",
            short_name: "KasirKu",
            lang: "id",
            useWebManifestExtention: false,
            start_url: "/",
            theme_color: "#ffffff"
        },
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },
    apollo: {


        clientConfigs: {
            default: {
                httpEndpoint: 'https://set-bug-14.hasura.app/v1/graphql',
            }
        }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: '#4caf50',
                    secondary: '#4caf50',
                    tertiary: '#495057',
                    accent: '#82B1FF',
                    error: '#f55a4e',
                    info: '#00d3ee',
                    success: '#5cb860',
                    warning: '#ffa21a',
                    link: '#013289',
                    text: '#0d6efd',
                    bg: '#f6f9ff;',
                },
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}