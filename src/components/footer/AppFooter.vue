<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  },
};
</script>

<template>
  <footer>
    <small> Made with ❤️ by Boolean </small>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  padding: 0 0.625rem;
  height: 4.375rem;
  background-color: rgb(42, 42, 42);
  small {
    color: white;
  }
}
</style>
