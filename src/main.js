import { createApp } from 'vue';
import { router } from '@/router';
import { createI18n } from 'vue-i18n';
import EN from '@/locale/en.json';
import DE from '@/locale/en.json';
import ES from '@/locale/en.json';
import ZH from '@/locale/en.json';
import App from './App.vue';

const i18n = createI18n({
    locale: document.cookie.split('=')[1],
    messages: {
        EN: EN,
        DE: DE,
    },
});

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount('#app');
