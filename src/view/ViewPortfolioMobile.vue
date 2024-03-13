<template>
    <div class="background-image"></div>
    <ItemBgOverlay />
    <div class="container">
        <div
            class="tablet"
            :class="{
                'fade-in': isFadeInDone,
                'show-tablet': isShowTabletDone,
            }">
            <div class="tablet__cover">
                <div class="tablet__clamp"></div>
                <div class="tablet__overlay"></div>
                <!-- Page 7 -->
                <div class="tablet__page" ref="page7Ref" :style="dynamicStyle">
                    <ViewContact
                        :dropPage="() => dropPage('page7')"
                        :turnAllPagesReversed="() => turnAllPagesReversed()" />
                </div>
                <!-- Page 6 -->
                <div class="tablet__page" ref="page6Ref" :style="dynamicStyle">
                    <ViewMoreAboutMe :dropPage="() => dropPage('page6')" />
                </div>
                <!-- Page 5 -->
                <div class="tablet__page" ref="page5Ref" :style="dynamicStyle">
                    <ViewProjectTwo :dropPage="() => dropPage('page5')" />
                </div>
                <!-- Page 4 -->
                <div class="tablet__page" ref="page4Ref" :style="dynamicStyle">
                    <ViewProjectOne :dropPage="() => dropPage('page4')" />
                </div>
                <!-- Page 3 -->
                <div class="tablet__page" ref="page3Ref" :style="dynamicStyle">
                    <ViewSkills :dropPage="() => dropPage('page3')" />
                </div>
                <!-- Page 2 -->
                <div class="tablet__page" ref="page2Ref" :style="dynamicStyle">
                    <ViewServices :dropPage="() => dropPage('page2')" />
                </div>
                <!-- Page 1 -->
                <div class="tablet__page" ref="page1Ref" :style="dynamicStyle">
                    <ViewAbout :dropPage="() => dropPage('page1')" />
                </div>
                <!-- page 0 -->
                <div class="tablet__page" ref="page0Ref" :style="dynamicStyle">
                    <ViewIntro
                        :dropPage="() => dropPage('page0')"
                        :turnAllPages="turnAllPages" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// pages 0-7
import ViewIntro from '@/view/ViewIntro.vue';
import ViewAbout from '@/view/ViewAbout.vue';
import ViewServices from '@/view/ViewServices.vue';
import ViewSkills from '@/view/ViewSkills.vue';
import ViewProjectOne from '@/view/ViewProjectOne.vue';
import ViewProjectTwo from '@/view/ViewProjectTwo.vue';
import ViewMoreAboutMe from '@/view/ViewMoreAboutMe.vue';
import ViewContact from '@/view/ViewContact.vue';
// other imports
import ItemBgOverlay from '@/component/ItemBgOverlay.vue';
import { ref, onMounted } from 'vue';
import Sfx6 from '@/assets/sounds/page-shuffle.mp3?url';
import { usePlaySfx } from '@/use/usePlaySfx';
import { useWindowSize } from '@vueuse/core';

const { width: windowWidth } = useWindowSize();

const { playSfx } = usePlaySfx();

const pageStates = ref({
    page0: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
    page6: false,
    page7: false,
});

const page0Ref = ref(null);
const page1Ref = ref(null);
const page2Ref = ref(null);
const page3Ref = ref(null);
const page4Ref = ref(null);
const page5Ref = ref(null);
const page6Ref = ref(null);
const page7Ref = ref(null);

const pageRefs = [
    page0Ref,
    page1Ref,
    page2Ref,
    page3Ref,
    page4Ref,
    page5Ref,
    page6Ref,
    page7Ref,
];

const pages = Object.keys(pageStates.value);

const randomizePageFall = () => {
    return `rotateZ(${Math.floor(
        Math.random() * (10 - -10) + -10
    )}deg) translateY(150%)`;
};

const dropPage = page => {
    pageStates.value[page] = !pageStates.value[page];
    pageRefs[pages.indexOf(page)].value.style.transform = randomizePageFall();
};

const isAnimationInProgress = ref(false);

const turnAllPages = () => {
    if (!isAnimationInProgress.value) {
        isAnimationInProgress.value = true;
        pages.slice(0, 7).forEach((page, index) => {
            setTimeout(() => {
                dropPage(page);
                if (index === 2) {
                    setTimeout(() => {
                        isAnimationInProgress.value = false;
                    }, 1000);
                }
            }, 20 + 100 * index);
        });
        playSfx(Sfx6);
    }
};

const isFadeInDone = ref(false);
const isShowTabletDone = ref(false);

const changeWidth = () => {
    if (windowWidth.value <= 680) {
        isFadeInDone.value = true;
    } else {
        isShowTabletDone.value = true;
    }
    console.log(windowWidth.value);
};

onMounted(() => {
    changeWidth();
});
</script>

<style lang="scss">
.background-image {
    @include bg;
    @supports (background-image: url('@img/decor/bg-mobile.avif')) {
        background-image: url('@img/decor/bg-mobile.avif');
    }
    background-image: url('@img/decor/bg-mobile.jpg');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    transition: opacity 1s ease-in-out;
    opacity: 0.5;
}
// tablet
.tablet {
    display: flex;
    justify-content: center;
    position: relative;
    top: 0;
    left: 0;
    width: 36em;
    min-height: 51rem;
    &.show-tablet {
        animation: show 2s forwards;
    }
    &.fade-in {
        animation: fade-in 2s forwards;
    }
    &__overlay {
        @include bg;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 512px;
        height: 720px;
        @supports (
            background-image: url('@img/decor/content/content-left.avif')
        ) {
            background-image: url('@img/decor/content/content-left.avif');
        }
        background-image: url('@img/decor/content/content-left.jpg');
        box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.2);
    }
    &__cover {
        @include bg;
        position: absolute;
        top: 0;
        left: 0;
        background-color: $c-cover;
        width: 100%;
        height: 100%;
        box-shadow: $dc-shadow-card;
        @supports (
            background-image: url('@img/decor/cover/book-texture.avif')
        ) {
            background-image: url('@img/decor/cover/book-texture.avif');
        }
        background-image: url('@img/decor/cover/book-texture.jpg');
        transform-origin: left;
        border-radius: $br-8;
    }
    &__clamp {
        @include bg;
        @supports (
            background-image: url('@img/decor/cover/tablet-clamp.avif')
        ) {
            background-image: url('@img/decor/cover/tablet-clamp.avif');
        }
        background-image: url('@img/decor/cover/tablet-clamp.png');
        width: 14.5625rem;
        min-height: 6.25rem;
        z-index: 1000;
        position: absolute;
        top: -4.7%;
        left: 50%;
        transform: translateX(-50%);
    }
    &__page {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding-block: $p-10;
        padding-inline: $p-6;
        transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
        &.fast-transition {
            transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        &-number {
            position: absolute;
            bottom: 20px;
            transform: translateX(-50%);
            left: 50%;
            color: lighten($c-text, 10%);
            font-size: $fs-h4;
            font-family: $ff-primary;
        }
    }
    &__nav-icon {
        position: absolute;
        fill: lighten(rgb(16, 16, 16), 15%);
        transition: fill $tr-smooth;
        border-radius: $br-circle;
        bottom: 18px;
        right: 18px;
        cursor: pointer;
        &:hover {
            fill: rgb(105, 47, 47);
        }
        &.back {
            left: 18px;
        }
    }
}

@media (width <= $screen-sm) {
    .tablet {
        width: 28rem;
        min-height: 40rem;
        animation: none;
        &__overlay {
            width: 408px;
            height: 593px;
            @supports (
                background-image: url('@img/decor/content/content-left.avif')
            ) {
                background-image: url('@img/decor/content/content-left.avif');
            }
            background-image: url('@img/decor/content/content-left.jpg');
            box-shadow: 0 0 18px 3px rgba(0, 0, 0, 0.2);
        }
        &__clamp {
            top: -10%;
        }
        &__page {
            padding-block: $p-6;
            padding-inline: $p-5;
        }
        &__nav-icon {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
    .title {
        font-size: $fs-h5;
    }
    .subtitle {
        font-size: $fs-small;
    }
    .year {
        font-size: $fs-smaller;
    }
    .book__page-number {
        font-size: $fs-h6;
        bottom: 16px;
    }
}
</style>
