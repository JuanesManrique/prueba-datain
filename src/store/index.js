import { createStore } from "vuex";
import axios from 'axios'

export default createStore({
  state: {
    itemsTasks: [],
  },
  actions: {
    getItems ({commit}) {
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          console.log(response.data)
          const items = response.data
          commit('getTasks', items)
        })
        .catch(error => 
          console.log(error)
        )
    }
  },

  mutations: {
    getTasks(state, items) {
      state.itemsTasks = items
    },
  },
});
