<template>
    <div class="background"></div>
    <div class="book-wrapper">
        <div class="book-cover book-cover--left"></div>
        <div class="book-cover book-cover--right"></div>
        <div class="book">
            <!-- overlay page -->
            <!-- <div class="book__page book__page--left">
                <div
                    class="book__content book__content--left overlay-left"></div>
            </div>
            <div class="book__page book__page--right">
                <div
                    class="book__content book__content--right transparent overlay-right"></div>
            </div> -->
            <!-- intro page -->
            <ViewIntro />
            <!-- other pages -->
            <div
                ref="page1Ref"
                class="book__page book__page--right"
                :class="{ turn: pageStates.page1 }">
                <ViewAboutServices :turnPage="() => turnPage('page1')" />
            </div>
            <div
                ref="page2Ref"
                class="book__page book__page--right"
                :class="{ turn: pageStates.page2 }">
                <ViewSkillsProject :turnPage="() => turnPage('page2')" />
            </div>
            <div
                ref="page3Ref"
                class="book__page book__page--right"
                :class="{ turn: pageStates.page3 }">
                <ViewProjectMoreAboutMe :turnPage="() => turnPage('page3')" />
            </div>
            <div
                ref="page4Ref"
                class="book__page book__page--right"
                :class="{
                    turn: pageStates.page4,
                }">
                <ViewContactEnd :turnPage="() => turnPage('page4')" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ViewIntro from '@/view/ViewIntro.vue';
import ViewAboutServices from '@/view/ViewAboutServices.vue';
import ViewSkillsProject from '@/view/ViewSkillsProject.vue';
import ViewProjectMoreAboutMe from '@/view/ViewProjectMoreAboutMe.vue';
import ViewContactEnd from '@/view/ViewContactEnd.vue';
import { ref, watchEffect, onMounted } from 'vue';

const pageStates = ref({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
});

const page1Ref = ref(null);
const page2Ref = ref(null);
const page3Ref = ref(null);
const page4Ref = ref(null);

const pageRefs = [page1Ref, page2Ref, page3Ref, page4Ref];

const zIndexCounter = ref({
    page1: 20,
    page2: 19,
    page3: 18,
    page4: 17,
});

const turnPage = page => {
    pageStates.value[page] = !pageStates.value[page];
    updateZIndex(page);
};

const updateZIndex = page => {
    zIndexCounter.value[page] =
        Math.max(...Object.values(zIndexCounter.value)) + 1;
};

onMounted(() => {
    watchEffect(() => {
        for (let i = 0; i < pageRefs.length; i++) {
            const pageIndex = `page${i + 1}`;
            const zIndexValue = zIndexCounter.value[pageIndex];
            pageRefs[i].value.style.zIndex = zIndexValue;
        }
    });
});
</script>

<style lang="scss">
.background {
    @include bg;
    @supports (background-image: url('@img/decor/bg-mobile.webp')) {
        background-image: url('@img/decor/bg-mobile.webp');
    }
    background-image: url('@img/decor/bg-mobile.jpg');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    opacity: 80%;
}
// book-wrapper
.book-wrapper {
    position: relative;
    border-radius: $br-8;
    padding-inline: $p-20;
    width: 75rem;
    min-height: 50rem;
    box-shadow: $dc-shadow-card;
}
// book-cover
.book-cover {
    position: absolute;
    background-color: $c-cover;
    width: 50%;
    height: 100%;
    box-shadow: inset 0 0 30px 10px rgba(0, 0, 0, 0.2);
    @supports (background-image: url('@img/decor/cover/book-texture.webp')) {
        background-image: url('@img/decor/cover/book-texture.webp');
    }
    background-image: url('@img/decor/cover/book-texture.jpg');
    &--left {
        left: 0;
        border-top-left-radius: $br-8;
        border-bottom-left-radius: $br-8;
    }
    &--right {
        right: 0;
        border-top-right-radius: $br-8;
        border-bottom-right-radius: $br-8;
    }
}
// book
.book {
    // & .overlay-left {
    //     box-shadow: $dc-shadow-light;
    // }
    // & .overlay-right {
    //     transition: 0.5s linear;
    //     box-shadow: $dc-shadow-light;
    // }
    // & .remove-overlay {
    //     box-shadow: none;
    // }
    // & .add-overlay {
    //     transition: 3s linear;
    //     box-shadow: none;
    // }

    &__page-front,
    &__page-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding-right: $p-10;
        padding-block: $p-10;
    }
    &__page-back {
        transform: rotateY(180deg) translateZ(0.1px);
        padding-right: 0;
        padding-left: $p-10;
    }
    &__page {
        perspective: 250rem;
        position: absolute;
        width: 50%;
        height: 100%;
        padding-block: $p-10;
        &-number {
            position: absolute;
            bottom: 20px;
            transform: translateX(-50%);
            left: 50%;
            color: lighten($c-text, 10%);
            font-size: $fs-h4;
            font-family: $ff-primary;
        }
        &--left {
            top: 0;
            left: 0;
            padding-left: $p-10;
        }
        &--right {
            right: 0;
            padding-right: $p-10;
            transform-style: preserve-3d;
            transform-origin: left;
            transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);

            &.turn {
                transform: rotateY(180deg);
            }
        }
    }
    &__content {
        position: relative;
        background-color: $c-warm;
        // box-shadow: inset 0 0 30px 10px rgba(0, 0, 0, 0.2);
        height: 100%;
        &-inner {
            padding-inline: $p-8;
            padding-block: $p-14;
            height: 100%;
        }
        &--left {
            @include bg;
            @supports (
                background-image: url('@img/decor/content/content-left.webp')
            ) {
                background-image: url('@img/decor/content/content-left.webp');
            }
            background-image: url('@img/decor/content/content-left.jpg');
        }
        &--right {
            @include bg;
            @supports (
                background-image: url('@img/decor/content/content-right.webp')
            ) {
                background-image: url('@img/decor/content/content-right.webp');
            }
            background-image: url('@img/decor/content/content-right.jpg');
            &.transparent {
                background-color: transparent;
                background-image: none;
            }
        }
    }
    &__nav-btn {
        -webkit-user-drag: none;
    }
    &__nav-icon {
        position: absolute;
        fill: lighten($c-text, 10%);
        transition: $tr-smooth;
        border-radius: $br-circle;
        bottom: 18px;
        right: 18px;
        cursor: pointer;
        &:hover {
            fill: $c-cover;
        }
        &.back {
            left: 18px;
        }
    }
}
// common
.title {
    font-size: $fs-h3;
    text-align: center;
    font-family: $ff-primary-italic;
    line-height: 1;
}
.subtitle {
    // font-family: $ff-primary-italic;
    margin-block: $m-2;
}
</style>
