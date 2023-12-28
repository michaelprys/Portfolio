<template>
    <!-- page 3 (front) -->
    <div class="book__page-front">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <h1 class="title">Skills</h1>
                <span class="book__page-number">3</span>
                <ItemTurnBtn @click="togglePageState('page2')">
                    <SvgBtnNext />
                </ItemTurnBtn>
            </div>
        </div>
    </div>
    <!-- page 4 (back) -->
    <div class="book__page-back">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <h1 class="title">Page 4</h1>
                <span class="book__page-number">4</span>
                <ItemTurnBtn @click="togglePageState('page2')">
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
