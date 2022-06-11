<template>
  <div class="card" @click="openDetails">
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${splitter}.png`"
      alt="Avatar"
      style="width: 80%"
    />
    <div class="container">
      <p>{{ name.toUpperCase() }}</p>
      <p>Number: {{ splitter }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
  },
  computed: {
    splitter() {
      const id = this.id.split(/(\d+)/);
      return id[3];
    },
  },
  methods: {
    openDetails() {
      this.$router.push({ path: `/details/${this.splitter}` });
    },
  },
};
</script>

<style scoped>
.card {
  display: grid;
  grid-template-rows: max-content 90px 1fr;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

img {
  border-radius: 5px 5px 0 0;
}
</style>
