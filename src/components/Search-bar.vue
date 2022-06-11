<template>
  <div class="wrapper">
    <div class="search__container">
      <div class="search-flex">
        <input
          :value="modelValue"
          class="search__input"
          @input="$emit('update:modelValue', $event.target.value)"
          type="text"
          placeholder="Search"
        />
        <button @click="searchHandler">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },

  props: ["modelValue"],

  methods: {
    async searchHandler() {
      const data = await this.$store.dispatch("getAllPokemons");
      data.includes(this.modelValue)
        ? this.$router.push({ path: `/details/${this.modelValue}` })
        : this.$notify({
            title: "Error",
            type: "error",
            text: "Pokemon not found",
          });
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 350px;
  font-family: "Raleway", sans-serif;
}
.search-flex {
  display: flex;
}
button {
  margin-left: 5px;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  color: color(#575756 a(0.8));
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
button:hover {
  background: #ff8b88;
}
.search__container {
  padding-top: 10px;
  padding-bottom: 10px;
}
.search__input {
  width: 100%;
  padding: 12px 24px;
  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;
  color: #575756;
  border-radius: 10px;
}
.search__input::placeholder {
  color: color(#575756 a(0.8));
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
.search__input:focus {
  padding: 12px 0;
  outline: 0;
  border: 1px solid transparent;
  border-bottom: 1px solid #575756;
  border-radius: 0;
  background-position: 100% center;
}
</style>

