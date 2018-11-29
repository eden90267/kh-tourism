<template>
  <div id="app">
    <Index/>
    <footer class="text-center bg-info text-white py-4">
      <div>高雄旅遊網</div>
      <div>資料來源：高雄市政府</div>
    </footer>
  </div>
</template>

<script>
import Index from './views/Index.vue';

export default {
  name: 'app',
  components: {
    Index,
  },
};
</script>

<style lang="scss">
  @import '~bootstrap/scss/bootstrap';
</style>
