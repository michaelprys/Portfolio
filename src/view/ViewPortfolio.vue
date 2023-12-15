<template>
    <!-- <video class="background-video" autoplay loop muted plays-inline>
        <source src="@img/decor/bg.mp4" type="video/mp4" />
    </video> -->
    <div class="background"></div>
    <!-- <div class="light-mode"> -->
    <!-- <audio>
            <source src="@/assets/sounds/light-mode-on.mp3" type="audio/mp3" />
        </audio> -->
    <!-- </div> -->
    <div class="wrapper">
        <div class="cover cover--left"></div>
        <div class="cover cover--right"></div>
        <div class="book">
            <div class="book__page book__page--left">
                <div class="book__content book__content--left">
                    <!-- <svg
                        class="book__prev-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="2.5rem"
                        height="2.5rem"
                        viewBox="0 0 24 24">
                        <path
                            d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                    </svg> -->
                    <div class="book__content-shadow">
                        <div class="profile">
                            <div class="profile__avatar"></div>
                            <div class="profile__name">
                                Mykhailo Prysiazhnyi
                            </div>
                            <div class="profile__specialization">
                                a creative freelancer & web developer
                            </div>
                            <ul class="profile__social">
                                <li>
                                    <a class="profile__social-link" href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <circle
                                                cx="4.983"
                                                cy="5.009"
                                                r="2.188"></circle>
                                            <path
                                                d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="profile__social-link" href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="profile__social-link" href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M17.24 19.399v-4.804h1.6V21H4.381v-6.405h1.598v4.804H17.24zM7.582 17.8h8.055v-1.604H7.582V17.8zm.195-3.64 7.859 1.641.34-1.552-7.861-1.642-.338 1.553zm1.018-3.794 7.281 3.398.678-1.463-7.281-3.399-.678 1.454v.01zm2.037-3.589 6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213-.006.001zm3.982-3.778-1.311.969 4.803 6.454 1.313-.971-4.807-6.452h.002z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="profile__social-link" href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M20.98 11.802a.995.995 0 0 0-.738-.771l-6.86-1.716 2.537-5.921a.998.998 0 0 0-.317-1.192.996.996 0 0 0-1.234.024l-11 9a1 1 0 0 0 .39 1.744l6.719 1.681-3.345 5.854A1.001 1.001 0 0 0 8 22a.995.995 0 0 0 .6-.2l12-9a1 1 0 0 0 .38-.998z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <div class="profile__about">
                                Hello, my name is Mykhailo and I am a web
                                developer and music producer. As a musician, I
                                feel that music has become a direct source of
                                inspiration for creating beautiful,
                                user-friendly web interfaces, since, in my
                                opinion, just like music, creating a design and
                                'bringing it to life' is also part of the art.
                            </div>
                            <a
                                class="profile__resume-link"
                                href="https://drive.google.com/file/d/1Nt2rLL4LPawWGpPRnwPzKaQ8BDLQM4iA/view?usp=drive_link"
                                target="_blank"
                                >Resume</a
                            >
                        </div>
                        <!-- ./profile -->
                    </div>
                </div>
            </div>
            <div class="book__page book__page--right">
                <div class="book__page-front">
                    <div class="book__content book__content--right">
                        <div class="book__content-shadow">
                            <div class="experience">
                                <h1 class="title">Experience</h1>
                                <span class="year">2017-present</span>
                                <h2 class="subtitle">
                                    Music Producer (Self-Employed) - YouTube
                                </h2>
                                <div class="experience__description">
                                    Mediation of trade and services Production,
                                    reproduction, distribution, sale, rental of
                                    audio and audio-visual recordings and
                                    production of unrecorded data carriers and
                                    recordings.
                                </div>
                            </div>
                            <!-- ./experience -->
                            <div class="education">
                                <h1 class="title">Education</h1>
                                <span class="year">2015-2019</span>
                                <div class="subtitle">
                                    Odessa Mechnikov National University
                                </div>
                                <ul class="education__info">
                                    <li>Academic Degree: Bachelor</li>
                                    <li>Faculty: Information Technology</li>
                                    <li>
                                        Specialization: Computer Engineering
                                    </li>
                                </ul>
                            </div>
                            <!-- ./education -->
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
                            <!-- ./communication -->
                        </div>
                        <svg
                            class="book__next-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="2.5rem"
                            height="2.5rem"
                            viewBox="0 0 24 24">
                            <path
                                d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                        </svg>
                        <span class="book__page-number">1</span>
                    </div>
                </div>
                <!-- ./page front -->
                <div class="book__page-back"></div>
                <!-- ./page back -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    document.cookie = 'locale=EN';
});
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
// .light-mode {
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     flex-shrink: 0;
//     background-image: url('@img/decor/light-mode-inactive.png');
//     position: absolute;
//     top: -1px;
//     right: 50px;
//     z-index: 5;
//     width: 32px;
//     height: 115.5px;
//     filter: drop-shadow(5px 5px 5px #222);
//     transition: $tr-smooth;
//     cursor: pointer;
//     &:hover {
//         filter: drop-shadow(10px 10px 10px #222);
//         animation: $an-hanging;
//         background-image: url('@img/decor/light-mode-active.png');
//     }
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
        height: 100%;
    }
    &__page {
        box-shadow: $dc-shadow-card;
        position: absolute;
        width: 50%;
        height: 100%;
        &--left {
            left: 0;
            padding-left: $p-10;
            padding-block: $p-10;
            top: 0;
        }
        &--right {
            right: 0;
            padding-right: $p-10;
            padding-block: $p-10;
            top: 0;
        }
    }
    &__content {
        position: relative;
        background-color: $c-warm;
        box-shadow: inset 0 0 30px 10px rgba(0, 0, 0, 0.2);
        height: 100%;

        &-shadow {
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
            padding-inline: $p-8;
            padding-block: $p-14;
            height: 100%;
        }
        &--left {
            @include bg;
            // background-image: url('@img/decor/content/content-left.jpg');
        }
        &--right {
            @include bg;
            // background-image: url('@img/decor/content/content-right.jpg');
        }
    }
    &__prev-icon,
    &__next-icon {
        position: absolute;
        fill: lighten($c-text, 10%);
        transition: $tr-smooth;
        border-radius: $br-circle;
        // cursor: $dc-pointer;
        cursor: pointer;
        &:hover {
            fill: $c-cover;
            // box-shadow: $dc-shadow-inner;
        }
        bottom: 18px;
    }
    &__prev-icon {
        left: 18px;
    }
    &__next-icon {
        right: 18px;
    }
    &__page-number {
        position: absolute;
        bottom: 20px;
        transform: translateX(-50%);
        left: 50%;
        color: lighten($c-text, 10%);
        font-size: $fs-h4;
        font-family: $ff-primary;
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
    font-family: $ff-primary-italic;
    margin-block: $m-2;
}

.year {
    display: block;
    font-family: $ff-primary-italic;
    font-size: $fs-base;
    margin-top: $m-2;
}

// profile
.profile {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    &__avatar {
        position: relative;
        @include bg;
        // background-image: url('@img/decor/profile/avatar.jpg');
        background-image: url('https://placehold.co/200x200');
        margin-inline: auto;
        width: 200px;
        height: 200px;
        border-radius: $br-6;
        // border-radius: $br-circle;
        filter: grayscale(80%);
        border: $bw-4 solid $c-cover;
        z-index: 1;
    }
    &__name {
        margin-top: $m-3_5;
        font-size: 2.75rem;
        font-family: $ff-secondary;
    }
    &__specialization {
        position: relative;
        color: $c-text;
        font-size: $fs-base;
        margin-inline: auto;
        font-family: $ff-secondary;
        font-size: 1.75rem;
        margin-top: $m-2;
        &::before {
            position: absolute;
            top: -15%;
            transform: translateX(-50%);
            left: 50%;
            content: '';
            width: 110%;
            height: 1px;
            background-color: rgba($c-cover, 30%);
        }
    }
    &__social {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: $g-5;
    }
    &__social-link {
        width: 2.3rem;
        height: 2.3rem;
        transition: $tr-smooth;
        fill: $c-text;
        border-radius: $br-circle;
        outline: 2px solid transparent;
        padding: 5px;
        // cursor: $dc-pointer;
        &:hover {
            fill: $c-cover;
            // outline-color: rgba($c-cover, 55%);
        }
    }
    &__about {
        text-align: justify;
        margin-top: $m-5;
        font-family: $ff-primary-italic;
        font-size: $fs-base;
    }
    &__resume-link {
        margin-top: $m-12;
        margin-inline: auto;
        min-width: $w-24;
        padding-block: $p-5;
        border-radius: $br-6;
        background-color: $c-cover;
        color: $c-warm;
        font-size: $fs-medium;
        line-height: 0;
        transition: $tr-smooth;
        border: 2px solid transparent;
        font-family: $ff-primary;
        font-size: $fs-small;
        // cursor: $dc-pointer;
        &:hover {
            background-color: $c-warm;
            border-color: rgba($c-cover, 55%);
            color: $c-text;
        }
    }
}

// experience
.experience {
    &__description {
        margin-top: $m-2_5;
    }
}

// education
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
