<script>
import axios from "axios";

export default {
  name: "ShowProject",
  data() {
    return {
      project: "",
    };
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
      .then((resp) => {
        this.project = resp.data;
      });
  },
};
</script>

<template>
  <div>
    {{ project.title }}
  </div>
</template>

<style lang="scss" scoped></style>
