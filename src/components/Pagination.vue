<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled': !hasPre}">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="prev">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{'active': currentPage === page}">
        <a class="page-link" href="#" @click.prevent="goPage(page)">{{page}}</a>
      </li>
      <li class="page-item" :class="{'disabled': !hasNext}">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 0,
    },
    hasPre: {
      type: Boolean,
      default: false,
    },
    hasNext: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    prev() {
      this.goPage(this.currentPage - 1);
    },
    goPage(page) {
      this.$emit('gopage', page);
    },
    next() {
      this.goPage(this.currentPage + 1);
    },
  },
};
</script>

<style scoped>

</style>
