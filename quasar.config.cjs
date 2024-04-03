'use module'
/* eslint-env node */

/**
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 *
 * Configuration for your app
 * @link https://v2.quasar.dev/quasar-cli-vite/quasar-config-js
 */

const { configure } = require('quasar/wrappers')
const { resolve } = require('path')
const packageJson = require('./package.json')

module.exports = configure(async (/* ctx */) => {
  // console.log('Quasar 配置上下文', ctx)
  const { mars3dPlugin } = await import('vite-plugin-mars3d')
  return {
    /**
     * Options with which Quasar CLI will use ESLint
     */
    eslint: {
      /**
       * Fix on save
       */
      // fix: true,

      /**
       * Files to include (can be in glob format)
       */
      // include: [],

      /**
       * Files to exclude (can be in glob format).
       * Recommending to use .eslintignore file instead.
       */
      // exclude: [],

      /**
       * Raw options to send to ESLint
       */
      // rawOptions: {},

      /**
       * Should it report warnings?
       * @default true
       */
      warnings: true,

      /**
       * Should it report errors?
       * @default true
       */
      errors: true,
    },

    /**
     * Enable the preFetch feature
     * @link https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
     */
    preFetch: true,

    /**
     * app boot file (/src/boot) --> boot files are part of "main.js"
     * Order is important.
     * @link https://v2.quasar.dev/quasar-cli-vite/boot-files
     */
    boot: ['i18n', 'axios'],

    /**
     * Global CSS/Stylus/SCSS/SASS/... files from `/src/css/`,
     * except for theme files, which are included by default.
     * @link https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
     */
    css: ['app.scss'],

    /**
     * What to import from [@quasar/extras](https://github.com/quasarframework/quasar/tree/dev/extras) package.
     * @example ['material-icons', 'roboto-font', 'ionicons-v4']
     * @link https://github.com/quasarframework/quasar/tree/dev/extras
     */
    extras: [
      // 'ionicons-v4',
      // 'mdi-v7',
      'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      // 'material-icons', // optional, you are not bound to it
    ],

    /**
     * Build configuration options.
     * @link Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
     */
    build: {
      target: {
        /**
         * @default ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1']
         */
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        /**
         * @example 'node16'
         */
        node: 'node20',
      },

      /**
       * Sets [Vue Router mode](https://router.vuejs.org/guide/essentials/history-mode.html).
       * History mode requires configuration on your deployment web server too.
       *
       * @default 'hash'
       */
      vueRouterMode: 'hash', // available values: 'hash', 'history'

      /**
       * Sets Vue Router base.
       * Should not need to configure this, unless absolutely needed.
       */
      // vueRouterBase,

      // vueDevtools,

      /**
       * Should the Vue Options API be available? If all your components only use Composition API
       * it would make sense performance-wise to disable Vue Options API for a compile speedup.
       * @default true
       */
      // vueOptionsAPI: false,

      /**
       * Should we invalidate the Vite and ESLint cache on startup?
       * @default false
       */
      // rebuildCache: true,

      /**
       * Public path of your app.
       * Use it when your public path is something else,
       * like _“<protocol>://<domain>/some/nested/folder”_ – in this case,
       * it means the distributables are in _“some/nested/folder”_ on your webserver.
       *
       * @default '/'
       */
      // publicPath: '/',

      /**
       * Do you want to analyze the production bundles?
       * Generates and opens an html report.
       * @default false
       */
      analyze: true,

      /**
       * Add properties to `process.env` that you can use in your website/app JS code.
       *
       * @example { SOMETHING: 'someValue' }
       */
      // env: {},

      /**
       * Defines constants that get replaced in your app.
       *
       * @example { SOMETHING: JSON.stringify('someValue') } -> console.log(SOMETHING) // console.log('someValue')
       */
      // rawDefine: {}

      /**
       * (requires @quasar/app-vite v1.1+)
       *
       * Build production assets with or without the hash part in filenames.
       * Example: "454d87bd" in "assets/index.454d87bd.js"
       *
       * When used, please be careful how you configure your web server cache strategy as
       * files will not change name so your client might get 304 (Not Modified) even when
       * it's not the case.
       *
       * Will not change anything if your Vite config already touches the
       * build.rollupOptions.output.entryFileNames/chunkFileNames/assetFileNames props.
       *
       * Gets applied to production builds only.
       *
       * Useful especially for (but not restricted to) PWA. If set to false then updating the
       * PWA will force to re-download all assets again, regardless if they were changed or
       * not (due to how Rollup works through Vite).
       *
       * @default true
       */
      // useFilenameHashes: false;

      /**
       * Ignores the public folder.
       * @default false
       */
      // ignorePublicFolder: true,

      /**
       * Set to `false` to disable minification, or specify the minifier to use.
       * Available options are 'terser' or 'esbuild'.
       * If set to anything but boolean false then it also applies to CSS.
       * For production only.
       * @default 'esbuild'
       */
      // minify: false,

      /**
       * whether to inject module preload polyfill.
       * @default false
       */
      // polyfillModulePreload: true,

      /**
       * If `true`, a separate sourcemap file will be created. If 'inline', the
       * sourcemap will be appended to the resulting output file as data URI.
       * 'hidden' works like `true` except that the corresponding sourcemap
       * comments in the bundled files are suppressed.
       * @default false
       */
      // sourcemap: true,

      /**
       * (requires @quasar/app-vite v1.1.1+)
       *
       * Treeshake Quasar's UI on dev too?
       * Recommended to leave this as false for performance reasons.
       * @default false
       */
      // devQuasarTreeshaking: true,

      /**
       * Folder where Quasar CLI should generate the distributables.
       * Relative path to project root directory.
       *
       * @default 'dist/{ctx.modeName}' For all modes except Cordova.
       * @default 'src-cordova/www' For Cordova mode.
       */
      // distDir

      /**
       * @example setting an alias for a custom folder
       *    {
       *       locales: path.join(__dirname, 'src/locales')
       *    }
       */
      // alias: [],

      /**
       * Extend Vite config generated by Quasar CLI.
       */
      extendViteConf(viteConf) {
        viteConf.plugins.push(mars3dPlugin())
        viteConf.define = {
          __APP_VERSION__: JSON.stringify(packageJson.version),
          'process.env': {},
        }
      },

      /**
       * Options to supply to @vitejs/plugin-vue
       */
      // viteVuePluginOptions: {},

      /**
       * Vite plugins
       *
       * @example
       *   [
       *     [ 'package-name', { ..options.. } ],
       *     [ require('some-plugin'), { ...options... } ]
       *   ]
       */
      vitePlugins: [
        [
          '@intlify/vite-plugin-vue-i18n',
          {
            /**
             * if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
             * compositionOnly: false,
             * if you want to use named tokens in your Vue I18n messages, such as 'Hello {name}',
             * you need to set `runtimeOnly: false`
             * runtimeOnly: false,
             * you need to set i18n resource including paths !
             */
            include: resolve(__dirname, './src/i18n/**'),
          },
        ],
      ],

      /**
       * Prepare external services before `$ quasar dev` command runs
       * like starting some backend or any other service that the app relies on.
       * Can use async/await or directly return a Promise.
       */
      // beforeDev?: (params: QuasarHookParams) => void;

      /**
       * Run hook after Quasar dev server is started (`$ quasar dev`).
       * At this point, the dev server has been started and is available should you wish to do something with it.
       * Can use async/await or directly return a Promise.
       */
      // afterDev?: (params: QuasarHookParams) => void;

      /**
       * Run hook before Quasar builds app for production (`$ quasar build`).
       * At this point, the distributables folder hasn’t been created yet.
       * Can use async/await or directly return a Promise.
       */
      // beforeBuild?: (params: QuasarHookParams) => void;

      /**
       * Run hook after Quasar built app for production (`$ quasar build`).
       * At this point, the distributables folder has been created and is available
       *  should you wish to do something with it.
       * Can use async/await or directly return a Promise.
       */
      // afterBuild?: (params: QuasarHookParams) => void;

      /**
       * Run hook if publishing was requested (`$ quasar build -P`),
       *  after Quasar built app for production and the afterBuild hook (if specified) was executed.
       * Can use async/await or directly return a Promise.
       * `opts` is Object of form `{arg, distDir}`,
       * where “arg” is the argument supplied (if any) to -P parameter.
       */
      // onPublish?: (ops: { arg: string; distDir: string }) => void;
    },

    /**
     * Vite "server" options.
     * Some properties are overwritten based on the Quasar mode you're using in order
     * to ensure a correct config.
     * Note: if you're proxying the development server (i.e. using a cloud IDE),
     * set the `public` setting to your public application URL.
     * @link Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
     */
    devServer: {
      // https: true
      open: true, // opens browser window automatically
    },

    /**
     * What Quasar language pack to use, what Quasar icon
     * set to use for Quasar components.
     * @link https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
     */
    framework: {
      /**
       * Quasar UI config -- you'll notice in docs when you need it
       */
      config: {},

      /**
       * one of the Quasar IconSets (see specific docs page)
       * @example 'material-icons'
       */
      iconSet: 'fontawesome-v6',

      /**
       * one of the Quasar language pack in String format (see specific docs page)
       * @example 'en-US' / 'es' / 'he' / ...
       */
      lang: 'zh-CN',

      /**
       * if you want the Quasar CSS Addons (see specific docs page)
       */
      cssAddon: true,

      /**
       * Format in which you will write your Vue templates when
       * using Quasar components.
       *
       * @default 'kebab'
       */
      // autoImportComponentCase?: "kebab" | "pascal" | "combined";

      /**
       * For special cases outside of where the auto-import strategy can have an impact
       * (like functional components as one of the examples),
       * you can manually specify Quasar components/directives to be available everywhere:
       * @example [ 'QAvatar', 'QChip' ]
       */
      // components: [],
      // directives: [],

      /**
       * Quasar plugins.
       * @example [ 'Notify', 'Loading', 'Meta', 'AppFullscreen' ]
       */
      plugins: [],
    },

    /**
     * What Quasar CSS animations](/options/animations) to import.
     * @example [ 'bounceInLeft', 'bounceOutRight' ]
     * @link https://v2.quasar.dev/options/animations
     */
    animations: [],

    /**
     * Use this property to change the default names of some files of your website/app if you have to.
     * All paths must be relative to the root folder of your project.
     *
     * @default
     * {
     *  rootComponent: 'src/App.vue',
     *  router: 'src/router/index',
     *  store: 'src/stores/index', // for Pinia
     *  // store: 'src/store/index' // for Vuex
     *  pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
     *  pwaServiceWorker: 'src-pwa/custom-service-worker',
     *  pwaManifestFile: 'src-pwa/manifest.json',
     *  electronMain: 'src-electron/electron-main',
     *  electronPreload: 'src-electron/electron-preload'
     * }
     * @link https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#sourcefiles
     */
    // sourceFiles: {
    //   rootComponent: 'src/App.vue',
    //   router: 'src/router/index',
    //   store: 'src/store/index',
    //   registerServiceWorker: 'src-pwa/register-service-worker',
    //   serviceWorker: 'src-pwa/custom-service-worker',
    //   pwaManifestFile: 'src-pwa/manifest.json',
    //   electronMain: 'src-electron/electron-main',
    //   electronPreload: 'src-electron/electron-preload'
    // },

    /**
     * Add variables that you can use in /index.html.
     */
    // htmlVariables?: { [index: string]: string };

    // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
    ssr: {
      // ssrPwaHtmlFilename: 'offline.html', // do NOT use index.html as name!
      // will mess up SSR

      // extendSSRWebserverConf (esbuildConf) {},
      // extendPackageJson (json) {},

      pwa: false,

      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if process.env.PORT is specified at runtime)

      middlewares: [
        'render', // keep this as last one
      ],
    },

    // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,

      // useFilenameHashes: true,
      // extendGenerateSWOptions (cfg) {}
      // extendInjectManifestOptions (cfg) {},
      // extendManifestJson (json) {}
      // extendPWACustomSWConf (esbuildConf) {}
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true,
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
    electron: {
      // extendElectronMainConf (esbuildConf)
      // extendElectronPreloadConf (esbuildConf)

      inspectPort: 5858,

      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'quasar-project-test',
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
    bex: {
      contentScripts: ['my-content-script'],

      // extendBexScriptsConf (esbuildConf) {}
      // extendBexManifestJson (json) {}
    },
  }
})
