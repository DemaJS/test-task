<template>
  <div class="pagination">
    <a href="#">&laquo;</a>
    <a
      :class="item === index && active"
      v-for="item in pageCount"
      :key="item"
      @click="onPage(item)"
      >{{ item }}</a
    >
    <a href="#">&raquo;</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      index: 1,
      active: "active",
    };
  },
  computed: {
    ...mapGetters(["count"]),
    pageCount() {
      let pages = Math.floor(this.count / 100);
      let pagesArray = [];
      for (let i = 1; i < pages; i++) {
        pagesArray.push(i);
      }
      return pages;
    },
  },
  methods: {
    async onPage(page) {
      await this.$store.dispatch("paginationMethod", page * 100);
      this.index = page;
    },
  },
};
</script>

<style scoped>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
}

.pagination a.active {
  background-color: #4caf50;
  color: white;
  border-radius: 50%;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
</style>
