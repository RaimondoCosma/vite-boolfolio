<script>
import { store } from "../../store";
import ListProjects from "../commons/ListProjects.vue";

export default {
  name: "AppMain",
  components: {
    ListProjects,
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
    <ListProjects />
  </main>
</template>

<style lang="scss" scoped></style>
