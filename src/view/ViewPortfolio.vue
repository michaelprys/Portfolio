<template>
    <div class="background"></div>
    <div class="wrapper">
        <div class="cover cover--left"></div>
        <div class="cover cover--right"></div>
        <div class="book">
            <div class="book__page book__page--left">
                <div class="book__content book__content--left">
                    <svg
                        class="book__prev-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="3rem"
                        height="3rem"
                        viewBox="0 0 24 24">
                        <path
                            d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                    </svg>
                    <div class="book__content-shadow">
                        <div class="profile">
                            <div class="profile__avatar"></div>
                            <div class="profile__name">
                                Mykhailo Prysiazhnyi
                            </div>
                            <div class="profile__specialization">
                                a creative freelancer & web developer
                            </div>

                            <div class="profile__about">
                                Hello, my name is Mykhailo and I am a web
                                developer and music producer. As a musician, I
                                can tell that music has become a direct source
                                of inspiration for creating beautiful,
                                user-friendly web interfaces, since, in my
                                opinion, just like music, creating a design and
                                'bringing it to life' is also part of the art.
                            </div>
                            <button class="profile__button">Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="book__page book__page--right">
                <div class="book__content book__content--right">
                    <svg
                        class="book__next-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="3rem"
                        height="3rem"
                        viewBox="0 0 24 24">
                        <path
                            d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                    </svg>
                    <div class="book__content-shadow"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.background {
    @include bg;
    background-image: url('@img/decor/bg.jpg');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    opacity: 80%;
}
.wrapper {
    position: relative;
    border-radius: $br-8;
    padding-inline: $p-20;
    width: 75rem;
    min-height: 50rem;
}
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
.book {
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
        background-color: $c-page;
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
            background-image: url('@img/decor/content/content-left.jpg');
        }
        &--right {
            @include bg;
            background-image: url('@img/decor/content/content-right.jpg');
        }
    }
    &__prev-icon,
    &__next-icon {
        position: absolute;
        fill: $c-text;
        cursor: pointer;
        transition: $tr-smooth;
        &:hover {
            fill: $c-cover;
        }
    }

    &__prev-icon {
        bottom: 15px;
        left: 18px;
    }
    &__next-icon {
        bottom: 15px;
        right: 18px;
    }
}
.profile {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    &__avatar {
        position: relative;
        @include bg;
        background-image: url('@img/decor/profile/avatar.jpg');
        margin-inline: auto;
        width: 200px;
        height: 200px;
        // border-radius: $br-circle;
        border-radius: $br-6;
        border: $bw-4 solid $c-cover;
        z-index: 1;
    }
    &__name {
        margin-top: $m-4;
        color: $c-text;
        font-size: 2.75rem;
        font-family: 'Italianno';
    }
    &__specialization {
        position: relative;
        color: $c-text;
        font-size: $fs-base;
        font-style: italic;
        margin-top: $m-3;
        margin-inline: auto;
        &::before {
            position: absolute;
            bottom: 35px;
            transform: translateX(-50%);
            left: 50%;
            content: '';
            width: 110%;
            height: 1px;
            background-color: rgba($c-cover, 30%);
        }
    }

    &__about {
        color: $c-text;
        text-align: justify;
        margin-top: $m-4;
    }
    &__button {
        margin-inline: auto;
        min-width: $w-28;
        padding: 15px;
        border-radius: $br-6;
        background-color: $c-cover;
        color: $c-white;
        margin-top: $m-4;
        font-size: $fs-medium;
    }
}
</style>
