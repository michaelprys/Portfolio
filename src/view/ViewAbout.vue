<template>
    <div class="book__content book__content--right">
        <div class="book__content-inner">
            <div class="experience">
                <h1 class="title">Experience</h1>
                <span class="year">
                    <SvgCalendar />
                    2017-present</span
                >
                <h2 class="subtitle">Music Producer – Online</h2>
                <div class="experience__description">
                    Mediation of trade and services. Production, reproduction,
                    distribution, sale, rental of audio and audio-visual
                    recordings and production of unrecorded data carriers and
                    recordings.
                </div>
            </div>
            <div class="education">
                <h1 class="title">Education</h1>
                <span class="year">
                    <SvgCalendar />
                    2015-2019</span
                >
                <div class="subtitle">Odessa Mechnikov National University</div>
                <ul class="education__info">
                    <li>Academic Degree: Bachelor</li>
                    <li>Faculty: Information Technology</li>
                    <li>Specialization: Computer Engineering</li>
                </ul>
            </div>
            <div class="communication">
                <h1 class="title">Communication</h1>
                <div class="subtitle">Languages</div>
                <ul class="communication__info">
                    <li>English (Advanced)</li>
                    <li>Spanish (Upper-Intermediate)</li>
                    <li>Czech (Intermediate)</li>
                    <li>Ukrainian (Native)</li>
                    <li>Russian (Native)</li>
                </ul>
            </div>

            <span class="book__page-number">1</span>
            <ItemTurnBtn
                v-if="windowWidth > 1280"
                @click="handleTurnPage('page1')">
                <SvgBtnNext />
            </ItemTurnBtn>

            <ItemTurnBtn v-else @click="dropPage">
                <SvgBtnNext />
            </ItemTurnBtn>
        </div>
    </div>
</template>

<script setup>
import ItemTurnBtn from '@/component/ItemTurnBtn.vue';
import SvgCalendar from '@/component/svg/SvgCalendar.vue';
import SvgBtnNext from '@/component/svg/SvgBtnNext.vue';
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
.experience {
    &__description {
        margin-top: $m-2_5;
    }
    &__calendar-icon {
        line-height: 0;
    }
}
.education,
.communication {
    margin-top: $m-6;
    &__info {
        margin-top: $m-2_5;
        padding-left: $p-5;
        & li {
            list-style: disc;
        }
    }
}
.year {
    display: flex;
    align-items: center;
    position: relative;
    gap: $g-3;
    fill: $c-text;
    font-family: $ff-primary-italic;
    font-size: $fs-base;
    margin-top: $m-2;
}
.services {
    margin-top: $m-10;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: $g-7;
    &__item {
        z-index: 4;
        border-radius: $br-8;
        padding: $p-4;
        box-shadow: $dc-shadow-inner;
        transition: $tr-smooth;
        &:hover {
            box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.3);
        }
    }
    &__title {
        display: block;
        text-align: center;
        font-weight: bold;
        font-size: $fs-h6;
        margin-block: $m-2_5;
    }
    &__text {
        font-size: $fs-medium;
    }
    &__icon {
        fill: $c-text;
        margin-inline: auto;
    }
}
</style>
