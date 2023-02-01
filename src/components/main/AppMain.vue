<script>
import { store } from "../../store";

import BoxContainer from "./box-container/BoxContainer.vue";
import WinnerBan from "./winner-ban/WinnerBan.vue";

export default {
  name: "AppMain",
  components: {
    BoxContainer,
    WinnerBan,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <BoxContainer />
    <WinnerBan
      class="winner-ban"
      :class="{ 'show-ban': this.store.gameOverWin }"
    />
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
  flex-grow: 1;
  background-color: #7fffd4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.winner-ban {
  position: absolute;
  top: 50%;
  left: -26.25rem;
  width: 25rem;
  transform: translateY(-50%);
  transition: left 0.6s cubic-bezier(0.17, 0.67, 0.57, 1.9);
}
.show-ban {
  left: 1.25rem !important;
}
</style>
