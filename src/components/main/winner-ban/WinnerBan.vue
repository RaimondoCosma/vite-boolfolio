<script>
import { store } from "../../../store";
export default {
  name: "WinnerBan",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="banner">
    <h3>Complimenti hai vinto:</h3>
    <h3>Sei riuscito a evitare<br />tutte le bombe</h3>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  color: #fff;
  text-align: center;
  font-size: 1.875rem;
  background-image: linear-gradient(
    to right top,
    #030b16,
    #212041,
    #5b265f,
    #9f1c63,
    #da1d4b
  );
  padding: 1.875rem 1.25rem;
  box-shadow: 5px 5px 10px 0px #000000;
}
</style>
