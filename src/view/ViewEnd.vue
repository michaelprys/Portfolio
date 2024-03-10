<template>
    <div class="book__content book__content--right">
        <div class="book__content-inner">
            <h2 class="end-title">
                Programming is not a science. Programming is a craft.
            </h2>
            <span class="book__page-number">8</span>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss">
.end-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $c-text;
    font-size: $fs-lg;
    font-family: $ff-secondary;
    text-align: center;
}
</style>
