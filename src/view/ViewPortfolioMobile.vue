<template>
    <div class="background-image"></div>
    <ItemBgOverlay />
    <div class="tablet-wrapper">
        <div class="tablet-cover">
            <div class="tablet-cover__clamp"></div>
        </div>
        <div class="tablet">
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
import { ref } from 'vue';
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

const isAnimationInProgress = ref(false);

const randomizePageFall = () => {
    return `rotateZ(${Math.floor(
        Math.random() * (10 - -10) + -10
    )}deg) translateY(150%)`;
};

const dropPage = page => {
    pageStates.value[page] = !pageStates.value[page];
    if (pageStates.value[page] === false && windowWidth.value <= 1280) {
        pageRefs[pages.indexOf(page)].value.style.transform =
            randomizePageFall();
    }
};

const turnAllPages = () => {
    if (!isAnimationInProgress.value) {
        isAnimationInProgress.value = true;
        pages.slice(0, 3).forEach((page, index) => {
            setTimeout(() => {
                dropPage(page);
                if (index === 2) {
                    setTimeout(() => {
                        isAnimationInProgress.value = false;
                    }, 1000);
                }
            }, 100 + 200 * index);
        });
        playSfx(Sfx6);
    }
};
</script>

<style lang="scss">
.background-image {
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
    transition: opacity 1s ease-in-out;
    opacity: 0.5;
}
// tablet-wrapper
.tablet-wrapper {
    position: relative;
    left: 25%;
    border-radius: $br-8;
    padding-inline: $p-20;
    width: 75rem;
    min-height: 50rem;
    animation: show-tablet 2s forwards;
}
@keyframes show-tablet {
    0%,
    30% {
        opacity: 0;
        transform: rotate(-20deg);
    }
    100% {
        opacity: 1;
        transform: rotate(0deg);
    }
}
@keyframes show-bg {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
// tablet-cover
.tablet-cover {
    position: absolute;
    left: 0;
    background-color: $c-cover;
    width: 50%;
    height: 100%;
    box-shadow: inset 0 0 30px 10px rgba(0, 0, 0, 0.2);
    @supports (background-image: url('@img/decor/cover/tablet-texture.webp')) {
        background-image: url('@img/decor/cover/tablet-texture.webp');
    }
    background-image: url('@img/decor/cover/tablet-texture.jpg');
    transform-origin: left;
    border-radius: $br-8;
    &__clamp {
        @include bg;
        background-image: url('@img/decor/cover/tablet-clamp.png');
        width: 233px;
        height: 100px;
        z-index: 1000;
        position: absolute;
        top: -5.7%;
        left: 50%;
        transform: translateX(-50%);
    }
    &--left {
        left: 0;
        box-shadow: $dc-shadow-card;
    }
    &--right {
        right: 0;
        box-shadow: $dc-shadow-card;
        transform: rotateY(180deg);
        transform-style: preserve-3d;
        transform-origin: left;
        transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
        &.turn {
            transform: rotateY(0deg);
        }
    }
}
// tablet
.tablet {
    &__overlay--left,
    &__overlay--right {
        position: absolute;
        top: 2.5em;
        width: 560px;
        height: 720px;
    }
    &__overlay--left {
        @include bg;
        background-image: url('@img/decor/content/content-left.jpg');
        filter: drop-shadow(-11px 10px 11px rgba(0, 0, 0, 0.329));
        left: 2.5em;
    }
    &__overlay--right {
        @include bg;
        background-image: url('@img/decor/content/content-right.jpg');
        filter: drop-shadow(11px 10px 11px rgba(0, 0, 0, 0.329));
        right: 2.5em;
    }
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
        left: 20px;
        padding-inline: $p-10;
        right: 0;
        padding-right: $p-10;
        transform-style: preserve-3d;
        transform-origin: left;
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
    &__content {
        position: relative;
        background-color: $c-warm;
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
    margin-block: $m-2;
}

@media (width <= $screen-sm) {
    // .tablet-wrapper {
    //     width: 57rem;
    //     min-height: 45rem;
    // }
}
</style>
