<template>
    <div class="book__page-front">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <div class="experience">
                    <h1 class="title">Experience</h1>
                    <span class="year"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1rem"
                            height="1rem"
                            viewBox="0 0 24 24">
                            <path
                                d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
                            <path
                                d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
                        </svg>
                        2017-present</span
                    >
                    <h2 class="subtitle">
                        Music Producer (Self-Employed) - YouTube
                    </h2>
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1rem"
                            height="1rem"
                            viewBox="0 0 24 24">
                            <path
                                d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
                            <path
                                d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
                        </svg>
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
                        <li>Spanish (Upper Intermediate)</li>
                        <li>Czech (Upper Intermediate)</li>
                        <li>Ukrainian (Native)</li>
                        <li>Russian (Native)</li>
                    </ul>
                </div>
            </div>
            <router-link
                :to="{ params: { page: toNextPage() } }"
                class="book__nextprev-btn"
                v-if="pageNumber < 5">
                <svg
                    class="book__nextprev-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5rem"
                    height="2.5rem"
                    viewBox="0 0 24 24">
                    <path
                        d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                </svg>
            </router-link>
            <span class="book__page-number">{{ pageNumber }}</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['toNextPage', 'pageNumber']);
</script>

<style lang="scss">
.experience {
    &__description {
        margin-top: $m-2_5;
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
</style>
