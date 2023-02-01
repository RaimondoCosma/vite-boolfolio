<script>
import { store } from "../../../store";

export default {
  name: "HeaderDifficulties",
  data() {
    return {
      store,
    };
  },
  methods: {
    deleteBombs() {
      this.store.boxBombs = [];
    },
    createBombs() {
      let i = 0;
      while (i < 16) {
        let random = Math.floor(Math.random() * this.store.difficulties) + 1;
        if (!this.store.boxBombs.includes(random)) {
          this.store.boxBombs.push(random);
          i++;
        }
      }
    },
  },
};
</script>

<template>
  <form>
    <label for="difficulties">Seleziona livello di difficoltà:</label>
    <select
      @click="deleteBombs()"
      name="difficulties"
      id="difficulties"
      v-model="this.store.difficulties"
    >
      <option value="" selected>Difficoltà</option>
      <option value="49">Easy</option>
      <option value="81">Medium</option>
      <option value="100">Hard</option>
    </select>
  </form>
  <button @click="createBombs()">Play</button>
</template>

<style lang="scss" scoped>
label,
select,
button {
  font-size: 1.25rem;
  padding: 0.3125rem 0.625rem;
}
</style>
