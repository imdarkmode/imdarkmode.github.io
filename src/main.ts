import './assets/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const darkModeTheme = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#303030',
    primary: '#dc42b0',
    'primary-darken-1': '#871e80',
    secondary: '#BB86FC',
    'secondary-darken-1': '#332940',
    error: '#CF6679',
    info: '#2196F3', // not changed
    success: '#214E34',
    warning: '#FB8C00', // not changed
  },
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'darkModeTheme',
    themes: {
      darkModeTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
