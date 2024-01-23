export const usePlaySfx = () => {
    const playSfx = sfx => {
        const sound = new Audio(sfx);
        sound.volume = 0.1;
        sound.play();
    };

    return {
        playSfx,
    };
};
