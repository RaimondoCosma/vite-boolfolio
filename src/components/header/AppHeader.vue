<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <h2>ProjectLogo</h2>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 4.375rem;
  background-color: rgb(35, 35, 35);
  padding: 0 0.625rem;
  h2 {
    font-size: 3.125rem;
    color: white;
  }
}
</style>
