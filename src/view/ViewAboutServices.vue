<template>
    <!-- page 1 (front) -->
    <div class="book__page-front">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <div class="experience">
                    <h1 class="title">Experience</h1>
                    <span class="year">
                        <SvgCalendar />
                        2017-present</span
                    >
                    <h2 class="subtitle">Music Producer – YouTube</h2>
                    <div class="experience__description">
                        Mediation of trade and services Production,
                        reproduction, distribution, sale, rental of audio and
                        audio-visual recordings and production of unrecorded
                        data carriers and recordings.
                    </div>
                </div>
                <div class="education">
                    <h1 class="title">Education</h1>
                    <span class="year">
                        <SvgCalendar />
                        2015-2019</span
                    >
                    <div class="subtitle">
                        Odessa Mechnikov National University
                    </div>
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
                <ItemTurnBtn @click="togglePageState('page1')">
                    <SvgBtnNext />
                </ItemTurnBtn>
            </div>
            <span class="book__page-number">1</span>
        </div>
    </div>
    <!-- page 2 (back) -->
    <div class="book__page-back">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <h1 class="title">What I Offer</h1>
                <ul class="services">
                    <li class="services__item">
                        <svg
                            class="services__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24">
                            <path
                                d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                        </svg>
                        <span class="services__title">Code Quality</span>
                        <p class="services__text">
                            Ensure high-quality, maintainable code with best
                            practices, modern standards, semantic HTML, and
                            accessibility.
                        </p>
                    </li>
                    <li class="services__item">
                        <svg
                            class="services__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24">
                            <path
                                d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9.997 19H4V9h6l-.003 10zm10-2H12V9c0-1.103-.897-2-2-2H7V5h13l-.003 12z"></path>
                        </svg>
                        <span class="services__title">Responsive Design</span>
                        <p class="services__text">
                            Craft a seamless user experience with responsive
                            design that adapts flawlessly to various devices.
                        </p>
                    </li>
                    <li class="services__item">
                        <svg
                            class="services__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path>
                            <path
                                d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path>
                        </svg>
                        <span class="services__title"> API Integration </span>
                        <p class="services__text">
                            Integrate external APIs with advanced Fetch requests
                            for efficient data retrieval and optimal user
                            experience.
                        </p>
                    </li>
                    <li class="services__item">
                        <svg
                            class="services__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24">
                            <path
                                d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z"></path>
                            <circle cx="15.73" cy="8.3" r="2"></circle>
                            <path
                                d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z"></path>
                        </svg>
                        <span class="services__title">SEO</span>
                        <p class="services__text">
                            Optimize code, assets, and server responses for
                            faster load times, ensuring an enhanced user
                            experience.
                        </p>
                    </li>
                </ul>
                <span class="book__page-number">2</span>
                <ItemTurnBtn @click="togglePageState('page1')">
                    <SvgBtnPrev />
                </ItemTurnBtn>
            </div>
        </div>
    </div>
</template>

<script setup>
import ItemTurnBtn from '@/component/ItemTurnBtn.vue';
import SvgCalendar from '@/component/svg/SvgCalendar.vue';
import SvgBtnNext from '@/component/svg/SvgBtnNext.vue';
import SvgBtnPrev from '@/component/svg/SvgBtnPrev.vue';

const props = defineProps(['togglePageState']);
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
