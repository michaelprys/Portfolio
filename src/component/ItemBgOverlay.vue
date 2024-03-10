<template>
    <div class="background-overlay"></div>
</template>

<script setup></script>

<style lang="scss">
.background-overlay {
    @include bg;
    background-image: url('@img/decor/bg-overlay.jpg');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    animation: show-bg 2s forwards;
}
</style>
