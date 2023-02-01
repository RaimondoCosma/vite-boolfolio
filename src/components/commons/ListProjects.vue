<script>
import axios from "axios";
import ProjectCard from "../commons/ProjectCard.vue";

export default {
  name: "ListProjects",
  components: {
    ProjectCard,
  },
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
  <section class="project">
    <h2>Lista Projects</h2>
    <div class="container">
      <div class="project-card" v-for="project in projects">
        <ProjectCard :projectInfo="project" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project {
  padding: 1.25rem 0;
  .project-card {
    width: calc(100% / 3 - 1.25rem);
    margin: 0.625rem;
  }
  h2 {
    font-size: 1.875rem;
    text-align: center;
  }
}
</style>
