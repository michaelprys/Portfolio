<template>
    <div class="book__page-back">
        <div class="book__content book__content--right">
            <div class="book__content-inner">
                <h1 class="title">Page 3</h1>
                <span class="book__page-number">{{ pageNumber }}</span>
                <router-link
                    :to="{
                        params: {
                            page: toPrevPage(),
                        },
                    }"
                    class="book__nextprev-btn">
                    <svg
                        class="book__nextprev-icon back"
                        xmlns="http://www.w3.org/2000/svg"
                        width="2.5rem"
                        height="2.5rem"
                        viewBox="0 0 24 24">
                        <path
                            d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['toPrevPage', 'pageNumber']);
</script>

<style lang="scss"></style>
