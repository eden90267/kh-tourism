<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <header class="header">
      <div class="container text-center">
        <h1 class="text-white" style="margin-bottom: 95px">高雄旅遊資訊</h1>
        <div class="row justify-content-center">
          <div class="col-sm-6">
            <select name="" id="" class="form-control input-lg"></select>
          </div>
        </div>
      </div>
    </header>
    <section style="margin-top: -15px">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10">
            <div class="bg-white p-3 shadow-sm">
              <h4>熱門行政區</h4>
              <button class="btn btn-primary px-4">苓雅區</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <hr class="my-5">
      <section>
        <div class="row">
          <div class="col-sm-6">
            <div class="card shadow-sm border-0">
              <div class="card-header bg-cover" style="height: 155px; background-image: url(https://images.unsplash.com/photo-1514540344452-642d604143a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73b8449846b0c8f33bb3ba221b459ea0&auto=format&fit=crop&w=634&q=80)">
              </div>
              <div class="card-body ">
                <ul class="list-unstyled mb-0">
                  <li class="d-flex">
                    <div class="text-center" style="width: 30px">
                      <i class="fas fa-clock text-primary"></i>
                    </div>
                    週二至週日10:00-18:00，每週一公休</li>
                  <li class="d-flex">
                    <div class="text-center" style="width: 30px">
                      <i class="fas fa-map-marker text-warning"></i>
                    </div>
                    高雄市三民區建國二路318號</li>
                  <li class="d-flex">
                    <div class="text-center" style="width: 30px">
                      <i class="fas fa-mobile-alt text-info"></i>
                    </div>
                    886-7-2363357</li>
                  <li class="d-flex">
                    <div class="text-center" style="width: 30px">
                      <i class="fas fa-ticket-alt text-success"></i>
                    </div>
                    Free</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="d-flex justify-content-center my-5">
        <Pagination :current-page="pagination.currentPage"
                    :total-pages="pagination.totalPage"
                    :has-pre="pagination.hasPre"
                    :has-next="pagination.hasNext"
                    @gopage="goPage">
        </Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Index',
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['getZones', 'getData']),
    goPage(page) {
      this.$store.dispatch('goPage', page);
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'zones', 'data', 'pagination']),
  },
  created() {
    this.getZones();
    this.getData();
  },
};
</script>

<style scoped>
  .header {
    padding-top: 90px;
    padding-bottom: 120px;
    background-image: url(/images/the-urban-landscape-1698285.png);
    background-size: cover;
    background-position: center center;
  }

  .bg-cover {
    background-size: cover;
    background-position: center center;
  }
</style>
