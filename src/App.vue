<template>
    <main>
        <ViewPortfolio v-if="windowWidth > 1280" />
        <ViewPortfolioMobile v-else />
    </main>
</template>

<script setup>
import ViewPortfolio from '@/view/ViewPortfolio.vue';
import ViewPortfolioMobile from '@/view/ViewPortfolioMobile.vue';
import { useWindowSize } from '@vueuse/core';

const { width: windowWidth } = useWindowSize();
</script>

<style lang="scss"></style>
