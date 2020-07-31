import Vue from 'vue'
import VueI18n from 'vue-i18n'

// here
Vue.use(VueI18n)

const messages = {
  en: require('./locales/en.json'),
}

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})
