// https://official-joke-api.appspot.com/jokes/ten

import * as types from './mutation-types'

export const initJokes = ({ commit }) => {
    fetch("https://official-joke-api.appspot.com/jokes/ten", {
        method: 'GET'
    })
    .then(response => response.json())
    .then(json => commit(types.INIT_JOKES, json))
}