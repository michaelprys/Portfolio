<template>
    <div
        class="book__overlay book__overlay--right"
        v-if="windowWidth > 1280"></div>
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
            <button
                class="contact__to-home-btn"
                v-if="windowWidth > 1280"
                @click="toIntroPage()">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.2rem"
                    height="2.2rem"
                    viewBox="0 0 24 24">
                    <path
                        d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
                </svg>
            </button>

            <ItemTurnBtn
                class="contact__to-home-btn-mobile"
                v-else
                @click="toIntroPage()">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 24 24">
                    <path
                        d="M19.89 10.105a8.696 8.696 0 0 0-.789-1.456l-1.658 1.119a6.606 6.606 0 0 1 .987 2.345 6.659 6.659 0 0 1 0 2.648 6.495 6.495 0 0 1-.384 1.231 6.404 6.404 0 0 1-.603 1.112 6.654 6.654 0 0 1-1.776 1.775 6.606 6.606 0 0 1-2.343.987 6.734 6.734 0 0 1-2.646 0 6.55 6.55 0 0 1-3.317-1.788 6.605 6.605 0 0 1-1.408-2.088 6.613 6.613 0 0 1-.382-1.23 6.627 6.627 0 0 1 .382-3.877A6.551 6.551 0 0 1 7.36 8.797 6.628 6.628 0 0 1 9.446 7.39c.395-.167.81-.296 1.23-.382.107-.022.216-.032.324-.049V10l5-4-5-4v2.938a8.805 8.805 0 0 0-.725.111 8.512 8.512 0 0 0-3.063 1.29A8.566 8.566 0 0 0 4.11 16.77a8.535 8.535 0 0 0 1.835 2.724 8.614 8.614 0 0 0 2.721 1.833 8.55 8.55 0 0 0 5.061.499 8.576 8.576 0 0 0 6.162-5.056c.22-.52.389-1.061.5-1.608a8.643 8.643 0 0 0 0-3.45 8.684 8.684 0 0 0-.499-1.607z"></path>
                </svg>
            </ItemTurnBtn>
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
import ItemTurnBtn from '@/component/ItemTurnBtn.vue';

const { width: windowWidth } = useWindowSize();

const props = defineProps(['dropPage', 'toIntroPage']);
</script>

<style lang="scss">
.contact {
    margin-top: $m-6;

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
            transition: outline $tr-fast, border $tr-fast;
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
        @include btn-big;
        margin-top: $m-6;
        display: block;
        margin-inline: auto;
        padding-inline: $p-4;
        padding-block: $p-3;
    }
    &__to-home-btn {
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
    &__to-home-btn-mobile {
        @include btn-small;
    }
}

.book__content-inner {
    position: relative;
}

@media (width <= $screen-xl) {
    .contact {
        &__item {
            & input {
                width: 13.25rem;
            }
        }
    }
}

@media (width <= $screen-sm) {
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
                font-size: $fs-smaller;
                padding-block: 6px;
            }
            & input {
                width: 10rem;
            }
            & textarea {
                min-width: 100%;
                max-width: 100%;
                min-height: 13rem;
                max-height: 13rem;
            }
        }
        &__btn {
            margin-inline: auto;
            padding-inline: $p-4;
            padding-block: $p-2;
            font-size: 0.75rem;
        }
        &__to-home-btn-mobile {
            @include btn-small;
            width: 1.8rem;
            height: 1.8rem;
        }
    }
}
</style>
