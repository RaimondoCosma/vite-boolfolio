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
  <section class="single-project">
    <div>
      <h2 class="project-title">Progetto: {{ project.title }}</h2>
      <div class="card">
        <div class="img">
          <img :src="project.image_url" :alt="project.title" />
          <div class="filter"></div>
          <div class="technology">
            <span class="badge" v-for="technology in project.technologies">{{
              technology.name
            }}</span>
          </div>
        </div>
        <div class="card-bottom">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="description">{{ project.description }}</p>
          <div v-if="project.type" class="typology">
            <h4>Tipologia:</h4>
            <div>{{ project.type.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.single-project {
  padding: 3.125rem 0;
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .project-title {
      margin-bottom: 0.625rem;
    }
  }
}
.card {
  position: relative;
  max-width: 18.75rem;
  border: 0.0625rem solid lightgrey;
  border-radius: 0.625rem 0.625rem 0 0;
  cursor: pointer;
  background-color: #f3f3f3;
  &:hover img {
    transform: scale(1.1);
  }
  .technology {
    position: absolute;
    top: 0.1875rem;
    right: 0.1875rem;
    .badge {
      padding: 0.3125rem;
      margin: 0 0.1875rem;
      color: red;
      background-color: rgba(84, 91, 230, 0.723);
      border-radius: 0.3125rem;
      transition: background-color 0.3s;
      &:hover {
        background-color: rgba(0, 255, 255, 0.723);
      }
    }
  }
  .card-bottom {
    padding: 0.625rem 0.9375rem;
    & > * {
      margin-bottom: 0.3125rem;
    }
  }
  .card-title {
    text-align: center;
  }
  .description {
    padding: 0.3125rem 0;
  }
  .img {
    position: relative;
    border-radius: 0.625rem 0.625rem 0 0;
    overflow: hidden;
    height: 12.5rem;
    img {
      transition: transform 0.5s;
    }
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.096);
      transition: background-color 0.5s;
      &:hover {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
  .typology {
    text-align: center;
  }
}
</style>
