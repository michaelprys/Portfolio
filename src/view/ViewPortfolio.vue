<template>
    <div class="wrapper">
        <div class="cover cover--left"></div>
        <div class="cover cover--right"></div>
        <div class="book">
            <div class="book__page book__page--left">
                <div class="book__content">
                    <div class="profile">
                        <div class="profile__avatar"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.wrapper {
    position: relative;
    border-radius: $br-4;
    padding-inline: $p-20;
    width: 70rem;
    min-height: 50rem;
}
.cover {
    position: absolute;
    background-color: $c-cover;
    width: 50%;
    height: 100%;
    box-shadow: $dc-shadow-inner;

    &--left {
        left: 0;
        border-top-left-radius: $br-4;
        border-bottom-left-radius: $br-4;
    }
    &--right {
        right: 0;
        border-top-right-radius: $br-4;
        border-bottom-right-radius: $br-4;
    }
}

.book {
    &__page {
        position: absolute;
        width: 50%;
        height: 100%;
        &--left {
            left: 0;
            padding-left: $p-10;
            padding-block: $p-10;
            top: 0;
        }
    }
    &__content {
        background-color: $c-page;
        height: 100%;
        padding-inline: $p-7;
        padding-block: $p-14;
    }
}

.profile {
    &__avatar {
        margin-inline: auto;
        width: 200px;
        height: 200px;
        @include bg;
        border-radius: $br-circle;
        // border-radius: $br-4;
        border: $bw-4 solid $c-outline;
        background-image: url('@img/decor/profile/avatar.jpg');
    }
}
</style>
