<template>
    <el-aside :width="`${sideBarWidth}px`">
        <div class="base-side-container flex-direction-column h100" :class="{ collapse }">
            <Logo title="Kpi看板" />
            <el-scrollbar class="side-main flex-auto">
                <el-menu mode="vertical" :collapse="collapse" :default-active="$route.path" :collapse-transition="false"
                    unique-opened router>
                    <SideBarItem v-for="route in permissionStore.route" :key="route.path" :item="route" />
                </el-menu>
            </el-scrollbar>
        </div>
    </el-aside>
</template>

<script lang="ts" setup>
import Logo from "./logo.vue";
import SideBarItem from "./side-bar-item.vue";
import { usePermissionStoreWithOut } from "@/stores/modules/permission";

const props = defineProps({
    collapse: {
        type: Boolean,
        default: false
    }
});

const permissionStore = usePermissionStoreWithOut();

const sideBarWidth = computed(() => {
    return props.collapse ? 64 : 180;
});
</script>

<style lang="scss">
@use "./index.scss";
</style>
