<template>
    <video class="background-video" autoplay loop muted plays-inline>
        <source src="@img/decor/bg.mp4" type="video/mp4" />
    </video>
    <!-- <div class="background"></div> -->
    <div class="background-overlay"></div>
    <div class="book-wrapper">
        <div class="book-cover book-cover--left"></div>
        <div
            class="book-cover book-cover--right"
            ref="coverRef"
            :class="{
                turn: pageStates.cover,
            }"></div>

        <div class="book">
            <!-- intro page -->
            <div class="book__page book__page--left" ref="introRef">
                <ViewIntro :turnAllPages="turnAllPages" />
            </div>

            <!-- other pages -->
            <div
                ref="page1Ref"
                class="book__page book__page--right"
                :class="{
                    turn: pageStates.page1,
                }">
                <ViewAboutServices :turnPage="() => turnPage('page1')" />
            </div>
            <div
                ref="page2Ref"
                class="book__page book__page--right"
                :class="{
                    turn: pageStates.page2,
                }">
                <ViewSkillsProject :turnPage="() => turnPage('page2')" />
            </div>
            <div
                ref="page3Ref"
                class="book__page book__page--right"
                :class="{
                    turn: pageStates.page3,
                }">
                <ViewProjectMoreAboutMe :turnPage="() => turnPage('page3')" />
            </div>
            <div
                ref="page4Ref"
                class="book__page book__page--right"
                :class="{
                    turn: pageStates.page4,
                }">
                <ViewContactEnd :turnAllPagesReversed="turnAllPagesReversed" />
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
import Sfx6 from '@/assets/sounds/page-shuffle.mp3?url';
import { usePlaySfx } from '@/use/usePlaySfx';

const { playSfx } = usePlaySfx();

const pageStates = ref({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
    cover: false,
});

const page1Ref = ref(null);
const page2Ref = ref(null);
const page3Ref = ref(null);
const page4Ref = ref(null);
const coverRef = ref(null);

const pageRefs = [page1Ref, page2Ref, page3Ref, page4Ref, coverRef];

const zIndexCounter = ref({
    page1: 18,
    page2: 19,
    page3: 20,
    page4: 21,
    cover: 22,
});

const pages = Object.keys(pageStates.value);

const isAnimationInProgress = ref(false);

const turnPage = page => {
    pageStates.value[page] = !pageStates.value[page];
    setTimeout(() => {
        updateZIndex(page);
    }, 500);
};

const updateZIndex = page => {
    zIndexCounter.value[page] =
        Math.max(...Object.values(zIndexCounter.value)) + 1;
};

const turnAllPages = () => {
    if (!isAnimationInProgress.value) {
        isAnimationInProgress.value = true;
        pages.slice(0, 3).forEach((page, index) => {
            setTimeout(() => {
                turnPage(page);
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

const turnAllPagesReversed = () => {
    if (!isAnimationInProgress.value) {
        isAnimationInProgress.value = true;
        const reversedPages = pages.slice(0, 3).reverse();
        reversedPages.forEach((page, index) => {
            setTimeout(() => {
                turnPage(page);
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

const openBook = () => {
    const reversedPages = [...pages].reverse();
    reversedPages.forEach((page, index) => {
        setTimeout(() => {
            turnPage(page);
        }, 100 + 200 * index);
    });
};

setTimeout(() => {
    openBook();
}, 1400);

onMounted(async () => {
    watchEffect(() => {
        for (let i = 0; i < pageRefs.length; i++) {
            const pageIndex = i === 4 ? 'cover' : `page${i + 1}`;
            pageRefs[i].value.style.zIndex = zIndexCounter.value[pageIndex];
        }
    });
});
</script>

<style lang="scss">
.background-video {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    opacity: 0.5;
    width: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out;
}
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
// book-wrapper
.book-wrapper {
    position: relative;
    border-radius: $br-8;
    padding-inline: $p-20;
    width: 75rem;
    min-height: 50rem;
    animation: show-book 2s forwards;
}
@keyframes show-book {
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
    transform-origin: left;
    &--left {
        left: 0;
        border-top-left-radius: $br-8;
        border-bottom-left-radius: $br-8;
        box-shadow: $dc-shadow-card;
    }
    &--right {
        right: 0;
        border-top-right-radius: $br-8;
        border-bottom-right-radius: $br-8;
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
// book
.book {
    &-overlay--left,
    &-overlay--right {
        position: absolute;
        top: 2.5em;
        width: 560px;
        height: 720px;
    }
    &-overlay--left {
        @include bg;
        background-image: url('@img/decor/content/content-left.jpg');
        filter: drop-shadow(-11px 10px 11px rgba(0, 0, 0, 0.329));
        left: calc(0% + 2.5em);
    }
    &-overlay--right {
        @include bg;
        background-image: url('@img/decor/content/content-right.jpg');
        filter: drop-shadow(11px 10px 11px rgba(0, 0, 0, 0.329));
        right: calc(0% + 2.5em);
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
            transform: rotateY(180deg);
            &.fast-transition {
                transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
            }
            &.turn {
                transform: rotateY(0deg);
            }
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
</style>
