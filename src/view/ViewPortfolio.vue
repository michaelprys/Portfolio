<template>
    <!-- <video class="background-video" autoplay loop muted plays-inline>
        <source src="@img/decor/bg.mp4" type="video/mp4" />
    </video> -->
    <div class="background"></div>
    <div class="wrapper">
        <div class="cover cover--left"></div>
        <div class="cover cover--right"></div>
        <div class="book">
            <!-- page intro -->
            <ViewIntro />

            <!-- page 1 & 2 -->
            <div class="book__page book__page--right" v-if="pageNumber === 1">
                <ViewPageOne
                    :toNextPage="toNextPage"
                    :pageNumber="pageNumber" />
            </div>

            <div
                class="book__page book__page--right"
                :class="{ turn: pageNumber === 2 }"
                v-if="pageNumber === 2">
                <ViewPageTwo
                    v-if="pageNumber === 2"
                    :toPrevPage="toPrevPage"
                    :pageNumber="pageNumber" />
            </div>
            <!-- page 3 & 4 -->
            <div class="book__page book__page--right" v-if="pageNumber === 2">
                <ViewPageThree
                    v-if="pageNumber === 2"
                    :toNextPage="toNextPage"
                    :pageNumber="pageNumber" />
            </div>

            <!-- <div
                class="book__page book__page--right"
                :class="{ turn: pageNumber === 4 }"
                v-if="pageNumber === 4">
                <ViewPageFour
                    v-if="pageNumber === 4"
                    :toPrevPage="toPrevPage"
                    :pageNumber="pageNumber" />
            </div> -->

            <!-- page 5 (front)-->
            <!-- <div
                class="book__page book__page--right"
                :class="{ turn: pageNumber === 5 }"
                :toNextPage="toNextPage">
                <ViewPageFive v-if="pageNumber === 5" :pageNumber="pageNumber" />
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ViewIntro from '@/view/ViewIntro.vue';
import ViewPageOne from '@/view/ViewPageOne.vue';
import ViewPageTwo from '@/view/ViewPageTwo.vue';
import ViewPageThree from '@/view/ViewPageThree.vue';
import ViewPageFour from '@/view/ViewPageFour.vue';
import ViewPageFive from '@/view/ViewPageFive.vue';

const route = useRoute();
const pageNumber = computed(() => parseInt(route.params.page) || 1);
const toNextPage = () => (pageNumber.value += 1);
const toPrevPage = () => (pageNumber.value -= 1);

// const isOddOrEven = computed(() => {
//     return pageNumber.value % 2 === 0 ? 'Even' : 'Odd';
// });
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
// .background-video {
//     position: absolute;
//     top: 0;
//     left: 0;
//     min-height: 100vh;
//     opacity: 0.5;
//     width: 100%;
//     object-fit: cover;
//     transition: opacity 1s ease-in-out;
// }
// wrapper
.wrapper {
    position: relative;
    border-radius: $br-8;
    padding-inline: $p-20;
    width: 75rem;
    min-height: 50rem;
}
// cover
.cover {
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
        transform: rotateY(0deg) translateZ(1px);
    }
    &__page-back {
        transform: rotateY(180deg) translateZ(1px);
        padding-right: 0;
        padding-left: $p-10;
    }
    &__page {
        box-shadow: $dc-shadow-card;
        position: absolute;
        width: 50%;
        height: 100%;
        padding-block: $p-10;
        &--left {
            top: 0;
            left: 0;
            padding-left: $p-10;
        }
        &--right {
            top: 0;
            right: 0;
            padding-right: $p-10;
            transform: rotateY(0deg);
            transform-origin: left;
            transition: rotateY 3s ease-in-out;
            z-index: 5;
            &.turn {
                transform: rotateY(-180deg);
            }
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
        box-shadow: inset 0 0 30px 10px rgba(0, 0, 0, 0.2);
        height: 100%;
        &-inner {
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
            padding-inline: $p-8;
            padding-block: $p-14;
            height: 100%;
        }
        &--left {
            // @include bg;
            // background-image: url('@img/decor/content/content-left.jpg');
        }
        &--right {
            // @include bg;
            // background-image: url('@img/decor/content/content-right.jpg');
            transform-style: preserve-3d;
        }
    }
    &__nextprev-btn {
        -webkit-user-drag: none;
    }
    &__nextprev-icon {
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
.year {
    display: flex;
    align-items: center;
    gap: $g-3;
    fill: $c-text;
    font-family: $ff-primary-italic;
    font-size: $fs-base;
    margin-top: $m-2;
}
</style>
