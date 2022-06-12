<template>
  <div class="pagination">
    <a v-if="portionNumber > 1" @click="previousPage">&laquo;</a>
    <a
      :class="item === index && active"
      v-for="item in pageCount"
      :key="item"
      @click="onPage(item)"
      >{{ item }}</a
    >
    <a v-if="portionNumber < 4" @click="nextPage">&raquo;</a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      index: 1,
      active: "active",
      portionNumber: 1,
      portionSize: 3,
    };
  },
  computed: {
    ...mapGetters(["count"]),
    pageCount() {
      let pagesArray = [];
      for (let i = 1; i < this.pages; i++) {
        pagesArray.push(i);
      }
      return pagesArray.filter(
        (el) => el >= this.leftPortion && el <= this.rigthPortion
      );
    },
    pages() {
      return Math.ceil(this.count / 100);
    },
    leftPortion() {
      return (this.portionNumber - 1) * this.portionSize + 1;
    },
    rigthPortion() {
      return this.portionNumber * this.portionSize;
    },
  },
  methods: {
    async onPage(page) {
      await this.$store.dispatch("paginationMethod", page !== 1 && page * 100);
      this.index = page;
    },
    previousPage() {
      this.portionNumber = this.portionNumber - 1;
    },
    nextPage() {
      this.portionNumber = this.portionNumber + 1;
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
  border-radius: 50%;
}
</style>
