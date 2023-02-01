<script>
import axios from "axios";

export default {
  name: "ListProjects",
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((resp) => {
      this.projects = resp.data;
    });
  },
};
</script>

<template>
  <section>
    <h2>Lista Projects</h2>
    <ul>
      <li v-for="project in projects">{{ project.title }}</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped></style>
