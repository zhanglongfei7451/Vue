<template>
    <div class="page-analysis-container hidden">
        <TurnoverAnalysis :loading="loading" class="mt0" />
        <DetailAnalysis :loading="loading" class="mt20" />
    </div>
</template>

<script lang="ts" setup>
import TurnoverAnalysis from "./components/TurnoverAnalysis.vue";
import DetailAnalysis from "./components/DetailAnalysis.vue";
import { ref } from "vue";

const loading = ref(true);

setTimeout(() => {
    loading.value = false;
}, 1200);
</script>

<style lang="scss" scoped></style>
