<template>
  <div class="container">
    <div
      class="progress-wrapper"
      v-for="(item, index) in details.stats"
      :key="index"
    >
      <div class="tittle">
        {{ item.stat.name.toUpperCase() }} : {{ item.base_stat }}
      </div>
      <progress :value="item.base_stat" max="100"></progress>
    </div>
  </div>
</template>
<script>
export default {
  name: "Stats-component",
  props: {
    details: Object,
  },
};
</script>

<style scoped>
.container {
  min-width: 350px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.progress-wrapper {
  padding: 5px;
  margin-bottom: 10px;
  width: 90%;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  background-color: #f2f2f2;
}
.tittle {
  font-family: "Roboto", arial, sans-serif;
  font-weight: bold;
  color: #212121;
  font-size: 62.5%;
}
progress {
  height: 30px;
  width: 100%;
}
</style>
