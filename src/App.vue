<template>
  <div class="p-5">
    <div class="flex justify-center">
      <img alt="Datain Logo" src="./assets/logo-datain.png" style="width: 300px;"/>
    </div>
    <div class="todos">
      <Tasks/>
    </div>
  </div>
</template>

<script>
import Tasks from './components/Tasks.vue';

export default {
  name: "App",
  components: { Tasks },

  /* computed: {
    texto() {
      return this.$store.state.holaMundo
    },
  }, */
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}
</style>
