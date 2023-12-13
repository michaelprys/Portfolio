import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/assets/scss/main.scss" as *;`,
            },
        },
    },
    plugins: [
        vue(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@img': fileURLToPath(
                new URL('./src/assets/images', import.meta.url)
            ),
            '@fonts': fileURLToPath(
                new URL('./public/fonts/', import.meta.url)
            ),
        },
    },
});
