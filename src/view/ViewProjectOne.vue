<template>
    <div class="book__content book__content--right">
        <div class="book__content-inner">
            <h1 class="title">Featured project #1</h1>
            <div class="project">
                <a class="project__link" href="#" target="_blank">
                    <div class="project__demo-wrapper">
                        <video
                            class="project__video"
                            loop
                            muted
                            plays-inline
                            ref="video">
                            <source
                                src="@img/content/herbalist-demo.mp4"
                                type="video/mp4" />
                        </video>
                        <picture>
                            <source
                                srcset="@img/content/herbalist.avif"
                                type="image/avif" />
                            <source
                                srcset="@img/content/herbalist.avif"
                                type="image/avif" />
                            <img
                                @mouseover="playVideo"
                                @mouseleave="pauseVideo"
                                class="project__img"
                                src="@img/content/herbalist.jpg"
                                alt="Herbalist app" />
                        </picture>
                    </div>
                </a>
                <div class="project__general-wrapper">
                    <div class="project__info">
                        <div class="project__wrapper">
                            <h2 class="project__name">Herbalist</h2>
                            <a class="project__demo" href="#" target="_blank"
                                >Demo <SvgBtnDemo
                            /></a>
                        </div>
                        <span class="project__tech"
                            ><span>Tech used:</span> Vue 3, SCSS, HTML, Pinia,
                            Node.js/Express, PostgreSQL, Vite
                        </span>
                        <h3 class="project__description-heading">
                            Description:
                        </h3>
                        <p class="project__description">
                            Herbalist allows you to search recipes by name or
                            ingredients, browse popular and all recipes.
                            Authorization and recipe favoriting are coming soon.
                            The website includes server-side pagination, a
                            custom server/database, and optimizations like
                            skeleton loaders. The website is responsive across
                            all devices.
                        </p>
                    </div>
                    <a
                        class="project__code-btn"
                        href="https://github.com/michaelprys/Herbalist"
                        target="_blank"
                        >Code</a
                    >
                </div>
            </div>
            <span class="book__page-number">4</span>

            <ItemTurnBtn
                v-if="windowWidth > 1280"
                @click="handleTurnPage('page2')">
                <SvgBtnPrev />
            </ItemTurnBtn>

            <ItemTurnBtn v-else @click="dropPage">
                <SvgBtnDrop />
            </ItemTurnBtn>
        </div>
    </div>
</template>

<script setup>
import ItemTurnBtn from '@/component/ItemTurnBtn.vue';
import SvgBtnPrev from '@/component/svg/SvgBtnPrev.vue';
import SvgBtnDrop from '@/component/svg/SvgBtnDrop.vue';
import SvgBtnDemo from '@/component/svg/SvgBtnDemo.vue';
import { usePlayVideo } from '@/use/usePlayVideo';
const { video, playVideo, pauseVideo } = usePlayVideo();
import { inject } from 'vue';
import { useWindowSize } from '@vueuse/core';

const { width: windowWidth } = useWindowSize();
const props = defineProps(['dropPage']);
const turnPage = inject('turnPage');

const handleTurnPage = page => {
    turnPage(page);
};
</script>

<style lang="scss">
.project {
    &__general-wrapper {
        min-height: 350.4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__link {
        width: $w-64;
        margin-inline: auto;
    }
    &__video {
        margin-top: $m-6;
        border-radius: $br-4;
        width: $w-64;
        margin-inline: auto;
        border: 8px solid rgba($c-text, 10%);
        transition: $tr-smooth;
        box-shadow: 0 0 12.8px rgba(0, 0, 0, 0.3);
        &:hover {
            box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
        }
    }
    &__img {
        position: absolute;
        width: 256.0096px;
        height: 199.7408px;
        filter: grayscale(60%);
        border: 8px solid rgba($c-text, 0%);
        box-shadow: inset 0rem 0rem 0.625rem rgba(0, 0, 0, 0.5);
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        transition: opacity $tr-smooth;
        &:hover {
            opacity: 0;
        }
    }
    &__demo-wrapper {
        width: $w-64;
        position: relative;
    }
    &__video {
        filter: grayscale(40%);
    }
    &__name {
        font-size: $fs-h4;
    }
    &__info {
        margin-top: $m-5;
        display: flex;
        flex-direction: column;
        gap: $g-2;
    }
    &__tech {
        margin-top: $m-2;
    }
    &__tech span,
    &__description-heading {
        font-weight: bold;
    }
    &__tech,
    &__description-heading,
    &__description {
        font-size: $fs-medium;
    }
    &__demo {
        position: relative;
        display: flex;
        align-items: center;
        gap: $g-2;
        color: $c-text;
        transition: $tr-basic;
        & svg {
            fill: $c-text;
        }
        &::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 0.125rem;
            background-color: rgba($c-text, 65%);
            bottom: -0.125rem;
            transform: scaleX(0);
            transition: transform $tr-fast;
            transform-origin: left;
        }
        &:hover::after {
            transform: scale(1);
        }
    }
    &__code-btn,
    &__more-projects-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        color: $c-text;
        border-radius: $br-6;
        background-color: #e3e3e37b;
        @include btn;
    }
    &__code-btn {
        width: $w-20;
    }
    &__more-projects-btn {
        width: 8.5rem;
    }
    &__code-btn,
    &__more-projects-btn {
        padding: $p-2;
    }
}

@media (width <= $screen-sm) {
    .project {
        &__img {
            width: 7.8125rem;
            height: 100px;
        }
        &__demo-wrapper {
            width: 100%;
            height: 6.25rem;
        }
        &__video {
            width: 12.5rem;
            height: 6.25rem;
        }
        &__name {
            font-size: $fs-h6;
        }
        &__info {
            font-size: 14px;
        }
        &__tech {
            font-size: 14px;
        }
        &__tech,
        &__description-heading,
        &__description {
            font-size: 14px;
        }
        &__code-btn,
        &__more-projects-btn {
            font-size: $fs-smaller;
            padding-block: 0.125rem;
        }
    }
}
</style>
