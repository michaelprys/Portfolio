import { ref } from 'vue';

export const usePlayVideo = () => {
    const video = ref(null);

    const playVideo = () => {
        video.value.play();
    };
    const pauseVideo = () => {
        video.value.pause();
        video.value.currentTime = 0;
    };

    return {
        video,
        playVideo,
        pauseVideo,
    };
};
