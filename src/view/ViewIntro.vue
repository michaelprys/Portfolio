<template>
    <div class="book__page book__page--left">
        <div class="book__content book__content--left">
            <div class="book__content-inner">
                <div class="profile">
                    <div class="profile__avatar"></div>
                    <div class="profile__name">Mykhailo Prysiazhnyi</div>
                    <div class="profile__specialization">
                        a creative freelancer & web developer
                    </div>
                    <ul class="profile__social">
                        <li>
                            <a
                                class="profile__social-link"
                                href="https://www.linkedin.com/"
                                target="_blank">
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
                            <a
                                class="profile__social-link"
                                href="https://github.com/michaelprys"
                                target="_blank">
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
                            <a
                                class="profile__social-link"
                                href="https://stackoverflow.com/users/20343913"
                                target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M17.24 19.399v-4.804h1.6V21H4.381v-6.405h1.598v4.804H17.24zM7.582 17.8h8.055v-1.604H7.582V17.8zm.195-3.64 7.859 1.641.34-1.552-7.861-1.642-.338 1.553zm1.018-3.794 7.281 3.398.678-1.463-7.281-3.399-.678 1.454v.01zm2.037-3.589 6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213-.006.001zm3.982-3.778-1.311.969 4.803 6.454 1.313-.971-4.807-6.452h.002z"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                class="profile__social-link"
                                href="https://stackblitz.com/"
                                target="_blank">
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
                        Hello, my name is Mykhailo and I am a web developer and
                        music producer. As a musician, I feel that music has
                        become a direct source of inspiration for creating
                        beautiful, user-friendly web interfaces, since, in my
                        opinion, just like music, creating a design and
                        'bringing it to life' is also part of the art.
                    </div>
                    <a
                        class="profile__resume-link"
                        href="https://drive.google.com/file/d/1F7AlNa7Uol8v_DNeV30reOGzze08o44o/view?usp=sharing"
                        target="_blank"
                        >Resume</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.profile {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    &__avatar {
        position: relative;
        @include bg;
        background-image: url('@img/decor/profile/avatar.jpg');
        // background-image: url('https://placehold.co/200x200');
        margin-inline: auto;
        width: 200px;
        height: 200px;
        border-radius: $br-6;
        // border-radius: $br-circle;
        filter: grayscale(80%);
        border: $bw-4 solid $c-cover;
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
        &:hover {
            fill: $c-cover;
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
</style>
