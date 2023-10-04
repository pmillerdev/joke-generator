<template>
  <div id="app">
    <h3>Joke Generator</h3>
    <button class="btn btn-primary" @click="initJokes">
      Add Ten Random Jokes
    </button>
    <button class="btn btn-success" @click="addJoke">Add a Joke</button>
    <button class="btn btn-danger" @click="resetJokes">Reset Jokes</button>
    <div>
      <span>Filter by:</span>
      <span v-for="(type, index) in types" :key="index">
        <input type="checkbox" :value="type" v-model="checkedTypes" checked />
        <label>{{ type }}</label
        >&nbsp;
      </span>
    </div>
    <br />
    <div class="container-fluid">
      <div class="row">
        <Joke
          v-for="(joke, index) in $store.state.jokes"
          v-show="checkedTypes.includes(joke.type)"
          :joke="joke"
          :index="index"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Joke from "./Joke.vue";
import { resetJokes } from "../store/actions";

export default {
  data() {
    return {
      types: ["Programming", "Dark", "Pun"],
      checkedTypes: ["Programming", "Dark", "Pun"]
    };
  },
  methods: mapActions(["initJokes", "addJoke", "resetJokes"]),
  components: {
    Joke
  }
};
</script>
