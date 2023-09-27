<template>
    <div class="nav-wrapper flex-row-center justify-between">
        <div class="nav-basic flex-row-center h100">
            <base-icon :svg-name="collapse ? 'unfold' : 'fold'" class="nav-fold pointer box-hover"
                @click="toggleCollapse(!collapse)" />
            <Breadcrumb />
        </div>
        <div class="nav-actions flex-row-center h100">
            <NavFullscreen />
            <NavSwitch />
            <NavUser />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import Breadcrumb from "./breadcrumb.vue";
import NavUser from "./nav-user.vue";
import NavSwitch from "./nav-switch.vue";
import NavFullscreen from "./nav-fullscreen.vue";

import { useAppStoreWithOut } from "@/stores/modules/app";

const props = defineProps({
    collapse: {
        type: Boolean,
        default: false
    }
});

const router = useRouter();
const appStore = useAppStoreWithOut();

const count = ref(6);

const handleGoError = () => {
    router
        .push({
            name: "ErrorLog"
        })
        .then(() => {
            count.value = 0;
        });
};

const toggleCollapse = (bool: boolean) => {
    appStore.setCollapse(bool);
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
    height: 48px;
    border-bottom: 1px solid var(--base-tag-border);
    transition: all 0.2s;
    background-color: var(--base-main-content-bg-color);

    .nav-basic {
        .nav-fold {
            transition: all 0.3s, padding 0s;
            padding: 0 12px;
        }
    }

    .nav-actions {
        :deep(.action-item) {
            padding: 0 12px;
        }
    }

    :deep(.box-hover) {
        height: 100%;
        box-sizing: content-box;

        &:hover {
            background: var(--base-nav-bar-box-hover);
        }
    }
}
</style>
