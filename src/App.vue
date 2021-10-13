<template>
  <div class="p-5">
    <div class="flex justify-center">
      <img alt="Datain Logo" src="./assets/logo-datain.png" style="width: 300px;"/>
    </div>
    <div class="container-title border rounded-lg mx-auto mt-10">
      <div class="content mx-3 py-1 border-b">
        <div class="w-full flex items-center ml-10">
          <p class="font-bold text-lg">Task</p>
        </div>
        <div class="description-title w-full ">
          <p class="font-bold text-lg">Description</p>
        </div>
        <div class="status-container p-2 ml-2">
          <p class="font-bold text-lg">Status</p>
        </div>
      </div>
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

.container-title {
    max-width: 1400px;
    width: 100%;
}

.content {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
}

.description-title {
  display: flex;
  align-items: center;
}

.status-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  .content {
      grid-auto-columns: 1fr auto;
  }
  .description-title {
    display: none;
  }
  .status-container {
    justify-content: end;
  }
}
</style>
