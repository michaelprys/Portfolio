<template>
    <div class="book__content book__content--right">
        <div class="book__content-inner">
            <h1 class="title">More about me</h1>
            <div class="about">
                <p class="about__text">
                    Experienced in building web applications from scratch, solid
                    understanding of modern HTML, CSS, JavaScript, and
                    accessibility practices, a knowledge of GIT version control
                    and pull request processes.
                </p>
                <h2 class="about__subtitle">Some facts</h2>
                <ul class="about__facts">
                    <li class="about__fact">
                        Former wushu Changquan martial artist.
                    </li>
                    <li class="about__fact">
                        I make different genres of music such as RnB and
                        Hip-Hop. Also, I like making samples using
                        midi-keyboards and drumpads.
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
                    I plan to learn more technologies, primarily Nuxt 3. Nuxt
                    extends Vue with features like server-side rendering, link
                    prefetching, auto-generated router configuration, and many
                    other. It also includes convention over configuration for
                    reducing the time spent on setting up the code. In my view,
                    it is useful not only for productivity improvement, but also
                    for building faster and more efficient Vue applications.
                </p>
            </div>

            <span class="book__page-number">6</span>

            <ItemTurnBtn
                v-if="windowWidth > 1280"
                @click="handleTurnPage('page3')">
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

@media (width <= $screen-sm) {
    .about {
        font-size: 0.75rem;
        &__subtitle {
            font-size: $fs-small;
        }
        &__fact {
        }
    }
}
</style>
