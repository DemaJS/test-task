<template>
  <preloader-component v-if="loading"></preloader-component>
  <div v-else class="search__title">
    <span
      >{{ pokemonsDetail.name?.toUpperCase() }} &#8470;:{{
        pokemonsDetail.id
      }}</span
    >
  </div>
  <div class="main">
    <div class="description">
      <div class="img-block">
        <img :src="pokemonsDetail?.sprites?.front_default" />
        <img :src="pokemonsDetail?.sprites?.back_default" />
      </div>
      <div class="description-text">
        <div>
          <ul>
            <li>Weight: {{ pokemonsDetail.weight }}</li>
            <li>Height: {{ pokemonsDetail.height }}</li>
          </ul>
        </div>
        <div class="types">
          <ul>
            Types:
            <li v-for="(item, index) in pokemonsDetail.types" :key="index">
              {{ item.type.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Stats :details="pokemonsDetail" />
  </div>
  <div style="text-align: center">
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import Stats from "../components/Stats-component.vue";
import { mapGetters } from "vuex";

export default {
  name: "Pokemon-details",
  data() {
    return {
      loading: false,
      test: true,
    };
  },
  mounted() {
    this.loadInfo();
  },
  computed: {
    ...mapGetters(["pokemonsDetail"]),
  },
  methods: {
    async loadInfo() {
      this.loading = true;
      const id = this.$route.params.id;
      await this.$store.dispatch("getPokemonDetail", id);
      this.loading = false;
    },
  },
  components: {
    Stats,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.description-text {
  padding: 10px;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
}

.img-block {
  padding: 10px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-around;
}
.img-block img {
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: #f2f2f2;
  margin-right: 10px;
}
.search__title {
  position: relative;
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  color: #ff8b88;
}
ul {
  list-style: none;
}

.types li {
  border-radius: 5px;
  min-width: 80px;
  text-align: center;
  margin-left: 5px;
  padding: 3px;
  display: inline-block;
}
.types li:nth-child(1) {
  background-color: #9bcc50;
}
.types li:nth-child(2) {
  background-color: #51c4e7;
}
</style>
