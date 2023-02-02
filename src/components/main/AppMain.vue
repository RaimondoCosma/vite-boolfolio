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
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-image: linear-gradient(
    to right top,
    #efefef,
    #efedf3,
    #f1ecf6,
    #f3e9f8,
    #f7e7f9
  );
}
</style>
