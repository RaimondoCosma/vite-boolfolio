<script>
import { store } from "../../store";

import HeaderTitle from "./title/HeaderTitle.vue";
import HeaderDifficulties from "./choose-difficulties/HeaderDifficulties.vue";

export default {
  name: "AppHeader",
  components: {
    HeaderTitle,
    HeaderDifficulties,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <HeaderTitle />
    <HeaderDifficulties />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0.625rem;
}
</style>
