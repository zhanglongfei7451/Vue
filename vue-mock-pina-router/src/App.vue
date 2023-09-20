<script setup lang="ts">
import { useUserStoreWithOut } from "@/stores/modules/user";
import { computed, reactive } from "vue";

const userStore = useUserStoreWithOut();
const loginForm = reactive({
  username: "admin",
  password: "123456",
  remember: 0
});


const cc = userStore.login(loginForm)
userStore.getUserInfo()

console.log(userStore.userInfo + '0000');

console.log('11');

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div>kkkk</div>
    <div>{{ userStore.userInfo }}</div>
  </header>
</template>

<style scoped></style>
