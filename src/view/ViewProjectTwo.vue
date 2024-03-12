<template>
    <div class="book__content book__content--right">
        <div class="book__content-inner">
            <div class="project project--nuka-cola">
                <h2 class="title title--nuka-cola">Featured project #2</h2>
                <a class="project__link" href="#" target="_blank">
                    <div class="project__demo-wrapper">
                        <video
                            class="project__video"
                            loop
                            muted
                            plays-inline
                            ref="video">
                            <source
                                src="@img/content/nuka-cola-demo.mp4"
                                type="video/mp4" />
                        </video>
                        <picture>
                            <source
                                srcset="@img/content/nuka-cola.avif"
                                type="image/avif" />
                            <source
                                srcset="@img/content/nuka-cola.avif"
                                type="image/avif" />
                            <img
                                @mouseover="playVideo"
                                @mouseleave="pauseVideo"
                                class="project__img"
                                src="@img/content/nuka-cola.jpg"
                                alt="Nuka-Cola app" />
                        </picture>
                    </div>
                </a>
                <div class="project__general-wrapper">
                    <div class="project__info">
                        <div class="project__wrapper">
                            <h2 class="project__name">Nuka-Cola</h2>
                            <a class="project__demo" href="#" target="_blank"
                                >Demo <SvgBtnDemo
                            /></a>
                        </div>
                        <span class="project__tech"
                            ><span>Tech used:</span> Vanilla JavaScript,
                            Tailwind CSS, HTML, Node.js/Express, Vite
                        </span>
                        <h3 class="project__description-heading">
                            Description:
                        </h3>
                        <p class="project__description">
                            Nuka-Cola is a re-designed Coca-Cola clone inspired
                            by the Fallout series of games. I have implemented
                            several commonly used features such as modals, timer
                            etc. to test my proficiency in writing pure
                            JavaScript without the use of frameworks. The
                            website is fully responsive on all devices.
                        </p>
                    </div>
                    <div class="project__wrapper">
                        <a
                            class="project__code-btn"
                            href="https://github.com/michaelprys/Nuka-Cola"
                            target="_blank"
                            >Code</a
                        >
                        <a
                            class="project__more-projects-btn"
                            href="https://github.com/michaelprys?tab=repositories"
                            target="_blank"
                            >More projects</a
                        >
                    </div>
                </div>
            </div>
            <span class="book__page-number">5</span>

            <ItemTurnBtn
                v-if="windowWidth > 1280"
                @click="handleTurnPage('page3')">
                <SvgBtnNext />
            </ItemTurnBtn>

            <ItemTurnBtn v-else @click="dropPage">
                <SvgBtnDrop />
            </ItemTurnBtn>
        </div>
    </div>
</template>

<script setup>
import ItemTurnBtn from '@/component/ItemTurnBtn.vue';
import SvgBtnNext from '@/component/svg/SvgBtnNext.vue';
import SvgBtnDrop from '@/component/svg/SvgBtnDrop.vue';
import SvgBtnDemo from '@/component/svg/SvgBtnDemo.vue';
import { usePlayVideo } from '@/use/usePlayVideo';
import { inject } from 'vue';
import { useWindowSize } from '@vueuse/core';

const { video, playVideo, pauseVideo } = usePlayVideo();
const { width: windowWidth } = useWindowSize();
const props = defineProps(['dropPage']);
const turnPage = inject('turnPage');

const handleTurnPage = page => {
    turnPage(page);
};
</script>

<style lang="scss"></style>
