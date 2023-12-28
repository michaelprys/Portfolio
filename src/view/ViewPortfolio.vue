<template>
    <!-- <video class="background-video" autoplay loop muted plays-inline>
        <source src="@img/decor/bg.mp4" type="video/mp4" />
    </video> -->
    <!-- <div class="background"></div> -->
    <div class="book-wrapper">
        <div class="book-cover book-cover--left"></div>
        <div class="book-cover book-cover--right"></div>
        <div class="book">
            <!-- overlay page -->
            <div class="book__page book__page--left">
                <div class="book__content book__content--left overlay"></div>
            </div>
            <div class="book__page book__page--right">
                <div class="book__content book__content--right overlay"></div>
            </div>
            <!-- intro page -->
            <ViewIntro />
            <!-- other pages -->
            <div
                class="book__page book__page--right"
                :class="{ turn: pageStates.page3 }"
                :style="calcZIndex('page3')">
                <ViewSomeContact :togglePageState="togglePageState" />
            </div>
            <div
                class="book__page book__page--right"
                :class="{ turn: pageStates.page2 }"
                :style="calcZIndex('page2')">
                <ViewSkillsProject :togglePageState="togglePageState" />
            </div>
            <div
                class="book__page book__page--right"
                :class="{ turn: pageStates.page1 }"
                :style="calcZIndex('page1')">
                <ViewAboutServices :togglePageState="togglePageState" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ViewIntro from '@/view/ViewIntro.vue';
import ViewAboutServices from '@/view/ViewAboutServices.vue';
import ViewSkillsProject from '@/view/ViewSkillsProject.vue';
import ViewSomeContact from '@/view/ViewSomeContact.vue';
import { ref, provide } from 'vue';

const pageStates = ref({
    page3: false,
    page2: false,
    page1: false,
});

const calcZIndex = page => {
    const index = Object.keys(pageStates.value).findIndex(p => p === page);
    if (pageStates.value === true) {
        return { zIndex: 20 - index };
    } else {
        return { zIndex: 20 + index };
    }
};

console.log(calcZIndex);

const togglePageState = page => {
    pageStates.value[page] = !pageStates.value[page];
};

provide('calcZIndex', calcZIndex);
</script>

<style lang="scss">
// bg
.background {
    @include bg;
    background-image: url('@img/decor/bg-mobile.jpg');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    opacity: 80%;
}
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
    & .overlay {
        box-shadow: $dc-shadow-light;
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
    &__page-front {
        transform: rotateY(0deg) translateZ(0.1px);
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
            transform: rotateY(0deg);
            transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
            &.turn {
                transform: rotateY(-180deg);
            }
        }
    }
    &__content {
        position: relative;
        background-color: $c-warm;
        box-shadow: inset 0 0 30px 10px rgba(0, 0, 0, 0.2);
        height: 100%;
        &-inner {
            // box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
            padding-inline: $p-8;
            padding-block: $p-14;
            height: 100%;
        }
        &--left {
            @include bg;
            background-image: url('@img/decor/content/content-left.jpg');
        }
        &--right {
            @include bg;
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
    // font-family: $ff-primary-italic;
    margin-block: $m-2;
}
</style>
