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
                <ItemTurnBtn @click="turnPage">
                    <SvgBtnNext />
                </ItemTurnBtn>
            </div>
        </div>
    </div>
    <!-- page 8 (back) -->
    <div class="book__page-back">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <h2 class="end-title">Go to page 1</h2>
                <span class="book__page-number">8</span>
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

const props = defineProps(['turnPage']);
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
}
.book__content-inner {
    position: relative;
}
.end-title {
    position: absolute;
    top: 41%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    color: $c-text;
    font-size: 4.2rem;
    font-family: $ff-secondary;
}
</style>
