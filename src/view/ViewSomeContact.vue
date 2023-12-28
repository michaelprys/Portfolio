<template>
    <!-- page 5 (front) -->
    <div class="book__page-front">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <h1 class="title">Page 5</h1>
                <span class="book__page-number">5</span>
                <ItemTurnBtn @click="togglePageState('page3')">
                    <SvgBtnNext />
                </ItemTurnBtn>
            </div>
        </div>
    </div>
    <!-- page 6 (back) -->
    <div class="book__page-back">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <h1 class="title">Page 6</h1>
                <span class="book__page-number">6</span>
                <ItemTurnBtn @click="togglePageState('page3')">
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

const props = defineProps(['togglePageState']);
</script>

<style lang="scss"></style>
