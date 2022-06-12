<template>
  <preloader-component v-if="loading"></preloader-component>
  <div v-else class="wrapper">
    <div class="search__title">
      <span>This is pokemons page</span>
    </div>
    <SearchBar v-model="search" />
    <Pagination />
    <div class="cards">
      <PokemonCard
        v-for="item in filteredList"
        :key="item.name"
        :name="item.name"
        :id="item.url"
      />
    </div>
    <button class="up-btn" @click="scrollToTop">&#8593;</button>
  </div>
</template>

<script>
import PokemonCard from "../components/Pokemon-card.vue";
import SearchBar from "../components/Search-bar.vue";
import Pagination from "../components/Pagination-component.vue";
import { mapGetters } from "vuex";

export default {
  name: "Main-page",
  data() {
    return {
      loading: false,
      search: "",
    };
  },
  mounted() {
    this.loadInfo();
  },
  computed: {
    ...mapGetters(["pokemonsList"]),
    filteredList() {
      return this.pokemonsList.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    async loadInfo() {
      this.loading = true;
      await this.$store.dispatch("getPokemonsList");
      this.loading = false;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  components: {
    PokemonCard,
    SearchBar,
    Pagination,
  },
};
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  max-width: 800px;
  padding: 10px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-gap: 20px;
  margin-top: 10px;
}
.search__title {
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  color: #ff8b88;
}
.up-btn {
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  background: transparent;
  font-size: 25px;
}
.up-btn:hover {
  background-color: #ddd;
  border-radius: 50%;
}
</style>
