<template>
    <button class="book__nav-btn" @click="handleButtonClick">
        <slot> </slot>
    </button>
</template>

<script setup>
import Sfx1 from '@/assets/sounds/page-turn-1.mp3?url';
import Sfx2 from '@/assets/sounds/page-turn-2.mp3?url';
import Sfx3 from '@/assets/sounds/page-turn-3.mp3?url';
import Sfx4 from '@/assets/sounds/page-turn-4.mp3?url';
import Sfx5 from '@/assets/sounds/page-turn-5.mp3?url';
import { inject } from 'vue';

const sounds = [Sfx1, Sfx2, Sfx3, Sfx4, Sfx5];
let previousSound;

const getSound = () => {
    const filteredSounds = sounds.filter(sound => sound !== previousSound);
    return (previousSound =
        filteredSounds[Math.floor(Math.random() * filteredSounds.length)]);
};

const playSfx = () => {
    const sound = new Audio(getSound());
    sound.volume = 0.1;
    sound.play();
};

const calcZIndex = inject('calcZIndex');
const zIndexRef = inject('zIndexRef');

const handleButtonClick = page => {
    setTimeout(() => {
        const updatedZIndex = calcZIndex(page);
        zIndexRef.value[page] = updatedZIndex.zIndex;
    }, 500);
};
</script>

<style lang="scss"></style>
