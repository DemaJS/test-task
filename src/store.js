import { createStore } from "vuex";
import axios from "axios";
import { notify } from "@kyvg/vue3-notification";

const $axios = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
const errorHandler = (error) => {
  notify({
    title: "Error",
    type: "error",
    text: error.message,
  });
};

export const store = createStore({
  state() {
    return {
      count: null,
      error: "",
      pokemonsList: {
        data: [],
      },
      pokemonDetail: {
        data: {},
      },
    };
  },

  getters: {
    pokemonsList(state) {
      return state.pokemonsList.data;
    },
    pokemonsDetail(state) {
      return state.pokemonDetail.data;
    },
    count(state) {
      return state.count;
    },
    error(state) {
      return state.error;
    },
  },
  mutations: {
    setPokemonsList(state, data) {
      state.pokemonsList.data = data;
    },
    setCount(state, data) {
      state.count = data;
    },
    setPokemonDetail(state, data) {
      state.pokemonDetail.data = data;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async getAllPokemons() {
      try {
        const data = await $axios.get("pokemon?limit=10000");
        return data.data.results.map((el) => el.name);
      } catch (error) {
        errorHandler(error);
      }
    },
    async getPokemonsList(context) {
      try {
        const data = await $axios.get("pokemon?limit=100");
        context.commit("setPokemonsList", data.data.results);
        context.commit("setCount", data.data.count);
      } catch (error) {
        errorHandler(error);
      }
    },
    async paginationMethod(context, offset) {
      try {
        const data = await $axios.get(`pokemon?limit=100&offset=${offset}`);
        context.commit("setPokemonsList", data.data.results);
      } catch (error) {
        errorHandler(error);
      }
    },
    async getPokemonDetail(context, id) {
      try {
        const data = await $axios.get(`pokemon/${id}`);
        context.commit("setPokemonDetail", data.data);
      } catch (error) {
        errorHandler(error);
      }
    },
  },
});
