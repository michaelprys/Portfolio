<template>
    <button @click="handlePlaySfx">
        <slot> </slot>
    </button>
</template>

<script setup>
import Sfx1 from '@/assets/sounds/page-turn-1.mp3?url';
import Sfx2 from '@/assets/sounds/page-turn-2.mp3?url';
import Sfx3 from '@/assets/sounds/page-turn-3.mp3?url';
import Sfx4 from '@/assets/sounds/page-turn-4.mp3?url';
import Sfx5 from '@/assets/sounds/page-turn-5.mp3?url';
import { usePlaySfx } from '@/use/usePlaySfx';

const { playSfx } = usePlaySfx();

const sounds = [Sfx1, Sfx2, Sfx3, Sfx4, Sfx5];
let previousSound;

const getSound = () => {
    const filteredSounds = sounds.filter(sound => sound !== previousSound);
    return (previousSound =
        filteredSounds[Math.floor(Math.random() * filteredSounds.length)]);
};

const handlePlaySfx = () => {
    playSfx(getSound());
};
</script>

<style lang="scss"></style>
