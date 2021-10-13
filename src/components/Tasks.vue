<template >
  <div class="container border rounded-lg mx-auto mt-5">
    <ul>
      <li class="hover:bg-indigo-100" v-for="item in items" :key="item.id">
        <div class="grid mx-3 py-5 border-b cursor-pointer" style="grid-template-columns: 1fr auto;">
          <div class="w-full flex items-center">
            <div class="w-max">
              <img class="rounded-full w-7 h-7 mr-3" src="@/assets/lapiz.png" alt="">
            </div>
            <div class="title pr-5">
              <p class="font-semibold truncate">{{item.title}}</p>
            </div>
            <div class="description">
              <p class=" truncate">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt est harum, nobis aut facilis? Ut, debitis odio suscipit eligendi animi, sit voluptate consequuntur obcaecati amet hic aperiam, aspernatur maxime?</p>
            </div>
          </div>
          <div class="status flex justify-center items-center p-2 ml-2">
            <label class="check">
              <input type="checkbox" v-model="item.completed"/>
              <div class="box"></div>
            </label>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'Tasks',
  components: {
  },

  mounted() {
    this.$store.dispatch('getItems')
  },

  computed: {
    items() {
      return this.$store.state.itemsTasks
    },
  },
}
</script>
<style scoped>
  .container {
    max-width: 1400px;
    width: 100%;
  }

  .title {
    max-width: 150px;
    transition: .8s;
  }

  .description {
  max-width: 1100px;
  transition: .8s;
}

@media (max-width: 1400px) {
  .description {
  max-width: 900px;
  }
}
@media (max-width: 1200px) {
  .description {
  max-width: 700px;
  }
}
@media (max-width: 1000px) {
  .description {
  max-width: 500px;
  }
}
@media (max-width: 800px) {
  .description {
  max-width: 300px;
  }
}
@media (max-width: 600px) {
  .description {
  display: none;
  }
  .title {
    max-width: 200px;
  }
}



</style>