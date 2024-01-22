<template>
    <!-- page 5 (front) -->
    <div class="book__page-front">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <!-- <h1 class="title">Future Plans</h1> -->
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
                                    srcset="@img/content/nuka-cola.webp"
                                    type="image/webp" />
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
                                <a
                                    class="project__demo"
                                    href="#"
                                    target="_blank"
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
                                Nuka-Cola is a re-designed Coca-Cola clone
                                inspired by the Fallout series of games. I have
                                implemented several commonly used features such
                                as SPA routing, modals, timer etc. to test my
                                proficiency in writing pure JavaScript without
                                the use of frameworks. The website is fully
                                responsive and adaptive on all devices.
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
                <ItemTurnBtn @click="turnPage">
                    <SvgBtnNext />
                </ItemTurnBtn>
            </div>
        </div>
    </div>
    <!-- page 6 (back) -->
    <div class="book__page-back">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <h1 class="title">More about me</h1>
                <div class="about">
                    <p class="about__text">
                        I have 2+ years experience building web applications
                        from scratch, strong grasp of modern HTML, CSS,
                        JavaScript, and accessibility best practices,
                        familiarity with Git version control and pull request
                        workflows.
                    </p>
                    <h2 class="about__subtitle">Some facts</h2>
                    <ul class="about__facts">
                        <li class="about__fact">
                            Former wushu Changquan martial artist.
                        </li>
                        <li class="about__fact">
                            I make different genres of music such as RnB and
                            Ambient. Also, I make samples using midi-keyboards
                            and drumpads.
                        </li>
                        <li class="about__fact">
                            Learning languages is my passion.
                        </li>
                        <li class="about__fact">
                            Sometimes I play strategy games.
                        </li>
                        <li class="about__fact">I like asian food.</li>
                    </ul>
                    <h2 class="about__subtitle">Future plans</h2>
                    <p class="about__text">
                        I plan to learn more technologies, one of which I'm
                        focused right now is Quasar. Unlike Vuetify, Bootstrap,
                        Bulma and other component frameworks which focus
                        primarily on providing components, Quasar provides a
                        wide range of use cases and supports, has its own CLI
                        and it integrates with Cordova, allowing you to build
                        both mobile and desktop applications with ease. Also, in
                        my opinion, Quasar currently has the most complete
                        component library for Vue 3.
                    </p>
                </div>

                <span class="book__page-number">6</span>
                <ItemTurnBtn @click="turnPage">
                    <SvgBtnPrev />
                </ItemTurnBtn>
            </div>
        </div>
    </div>
</template>

<script setup>
import ItemTurnBtn from '@/component/ItemTurnBtn.vue';
import SvgBtnNext from '@/component/svg/SvgBtnNext.vue';
import SvgBtnPrev from '@/component/svg/SvgBtnPrev.vue';
import SvgBtnDemo from '@/component/svg/SvgBtnDemo.vue';
import { usePlayVideo } from '@/use/usePlayVideo';

const { video, playVideo, pauseVideo } = usePlayVideo();

const props = defineProps(['turnPage']);
</script>

<style lang="scss">
.about {
    display: flex;
    flex-direction: column;
    gap: $g-2;
    margin-top: $m-4;
    font-size: $fs-medium;
    &__subtitle {
        font-size: $fs-h6;
        font-weight: 800;
    }
    &__fact {
        list-style: disc;
        margin-left: $p-5;
    }
}
</style>
