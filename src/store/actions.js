import * as types from "./mutation-types";

export const initJokes = ({ commit }) => {
  fetch(
    "https://v2.jokeapi.dev/joke/Programming,Dark,Pun?type=single&amount=10",
    {
      method: "GET"
    }
  )
    .then(response => response.json())
    .then(json => {
      const jokes = json.jokes.map(joke => {
        return {
          punchline: joke.joke,
          type: joke.category
        };
      });
      commit(types.INIT_JOKES, jokes);
    });
};

export const addJoke = ({ commit }) => {
  fetch("https://v2.jokeapi.dev/joke/Programming,Dark,Pun?type=single", {
    method: "GET"
  })
    .then(response => response.json())
    .then(json => {
      const joke = { punchline: json.joke, type: json.category };
      commit(types.ADD_JOKE, joke);
    });
};

export const removeJoke = ({ commit }, index) => {
  commit(types.REMOVE_JOKE, index);
};
