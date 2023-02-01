<script>
import { store } from "../../../store";
export default {
  name: "AppScore",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="score">Il Tuo Punteggio: {{ this.store.boxNoBomb.length }}</div>
</template>

<style lang="scss" scoped>
.score {
  font-size: 1.875rem;
}
</style>
