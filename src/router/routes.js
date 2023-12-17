import ViewPorfolio from '@/view/ViewPortfolio.vue';

export const routes = [
    {
        path: '/:page?',
        name: 'home',
        component: ViewPorfolio,
    },
];
