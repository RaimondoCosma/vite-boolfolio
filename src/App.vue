<script>
import { store } from "./store";
import AppHeader from "./components/header/AppHeader.vue";
import AppMain from "./components/main/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
