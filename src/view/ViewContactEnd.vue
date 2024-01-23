<template>
    <!-- page 7 (front) -->
    <div class="book__page-front">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <h1 class="title">Contact me</h1>
                <form
                    class="contact"
                    action="https://api.web3forms.com/submit"
                    method="POST">
                    <div class="contact__list">
                        <div class="contact__item">
                            <input
                                type="hidden"
                                name="access_key"
                                value="1964582c-239d-4b57-b56e-a0fc45dbc2d3" />
                        </div>
                        <div class="contact__wrapper">
                            <div class="contact__item">
                                <input
                                    class="contact__input"
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    placeholder="Your Name"
                                    autocomplete="off" />
                            </div>
                            <div class="contact__item">
                                <input
                                    class="contact__input"
                                    type="email"
                                    id="mail"
                                    name="user_email"
                                    placeholder="Email Address"
                                    autocomplete="off" />
                            </div>
                        </div>

                        <div class="contact__wrapper">
                            <div class="contact__item">
                                <input
                                    class="contact__input"
                                    type=""
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone Number"
                                    autocomplete="off" />
                            </div>
                            <div class="contact__item">
                                <input
                                    class="contact__input"
                                    type="email"
                                    id="subject"
                                    placeholder="Subject"
                                    autocomplete="off" />
                            </div>
                        </div>

                        <div class="contact__item">
                            <textarea
                                class="contact__textarea"
                                name="user_message"
                                id="msg"
                                placeholder="Your Message"></textarea>
                        </div>
                    </div>
                    <button class="contact__btn">Send Message</button>
                </form>
                <span class="book__page-number">7</span>
                <!-- <ItemTurnBtn @click="turnPage">
                    <SvgBtnNext />
                </ItemTurnBtn> -->
                <button
                    class="contact__to-first-page-btn"
                    @click="[turnAllPagesReversed(), handlePlaySfx()]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2.2rem"
                        height="2.2rem"
                        viewBox="0 0 24 24">
                        <path
                            d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Sfx6 from '@/assets/sounds/page-shuffle.mp3?url';
import { usePlaySfx } from '@/use/usePlaySfx';

const { playSfx } = usePlaySfx();

const handlePlaySfx = () => {
    playSfx(Sfx6);
};

const props = defineProps(['turnPage', 'turnAllPagesReversed']);
</script>

<style lang="scss">
.contact {
    margin-top: $m-6;
    width: 100%;
    height: 100%;
    &__wrapper {
        display: flex;
        justify-content: space-between;
    }
    &__list {
        display: flex;
        flex-direction: column;
        gap: $g-7;
        text-align: center;
    }
    &__item {
        & input,
        & textarea {
            border: 2px solid rgba($c-text, 40%);
            border-radius: $br-6;
            width: 100%;
            font-size: $fs-base;
            font-family: $ff-primary;
            background-color: transparent;
            color: darken($c-text, 10%);
            transition: $tr-fast;
            &:focus {
                outline: none;
                border: 2px solid lighten($c-text, 10%);
            }
            &:-webkit-autofill,
            &:-webkit-autofill:hover,
            &:-webkit-autofill:focus,
            &:-webkit-autofill:active {
                transition: background-color 5000s;
                -webkit-text-fill-color: darken($c-text, 10%) !important;
            }
            &::placeholder {
                color: $c-text;
            }
        }
        & input,
        & textarea {
            padding-inline: $p-5;
            padding-block: $p-3_5;
        }
        & textarea {
            min-width: 100%;
            max-width: 100%;
            min-height: 15rem;
            max-height: 15rem;
        }
    }
    &__btn {
        @include btn;
        margin-top: $m-6;
        display: block;
        margin-inline: auto;
        padding-inline: $p-4;
        padding-block: $p-3;
    }
    &__to-first-page-btn {
        border-radius: $br-6;
        border: 2px;
        position: absolute;
        bottom: 16px;
        right: 28px;
        background-color: transparent;
        & svg {
            border: 2px solid transparent;
            border-radius: $br-6;
            transition: fill $tr-smooth, stroke $tr-smooth;
            fill: $c-cover;
            stroke: transparent;
            stroke-width: 1.8px;
        }
        &:hover svg {
            stroke: $c-cover;
            stroke-width: 1.8px;
            fill: transparent;
        }
    }
}

// .book__content-inner {
//     position: relative;
// }
// .end-title {
//     position: absolute;
//     top: 41%;
//     left: 50%;
//     transform: translateY(-50%);
//     transform: translateX(-50%);
//     color: $c-text;
//     font-size: 4.2rem;
//     font-family: $ff-secondary;
// }
</style>
