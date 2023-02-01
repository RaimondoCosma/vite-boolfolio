<script>
export default {
  name: "ProjectCard",
  props: {
    projectInfo: Object,
  },
};
</script>

<template>
  <div class="card">
    <div class="img">
      <img :src="projectInfo.image_url" :alt="projectInfo.title" />
      <div class="filter"></div>
      <div class="technology">
        <span class="badge" v-for="technology in projectInfo.technologies">{{
          technology.name
        }}</span>
      </div>
    </div>
    <div class="card-bottom">
      <h3 class="card-title">{{ projectInfo.title }}</h3>
      <p class="description">{{ projectInfo.description }}</p>
      <div v-if="projectInfo.type" class="typology">
        <h4>Tipologia:</h4>
        <div>{{ projectInfo.type.name }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
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
