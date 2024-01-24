import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fr from './locales/fr.json';
import en from './locales/en.json';
import {createI18n} from "vue-i18n";

const app = createApp(App)

const languages = {
    fr,
    en
}
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages: languages
})

app.use(router)
app.use(i18n)
app.mount('#app')
