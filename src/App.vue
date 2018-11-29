<template>
  <div id="app">
    <Index/>
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
