<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <header class="header">
      <div class="container text-center">
        <h1 class="text-white" style="margin-bottom: 95px">高雄旅遊資訊</h1>
        <div class="row justify-content-center">
          <div class="col-sm-6">
            <select name="" id="" class="form-control input-lg" v-model="selectedZone" @change="changeZone">
              <option value="">--請選擇行政區--</option>
              <option v-for="zone in zones" :value="zone" :key="zone">{{zone}}</option>
            </select>
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
              <button class="btn btn-primary px-4" @click="selectZone('苓雅區')">苓雅區</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <hr class="my-5">
      <section>
        <div class="row">
          <div class="col-sm-6" v-for="item in data" :key="item.Id">
            <div class="card shadow-sm border-0">
              <div class="card-header bg-cover"
                   style="height: 155px;"
                   :style="{backgroundImage: 'url(' + item.Picture1 + ')'}">
              </div>
              <div class="card-body ">
                <ul class="list-unstyled mb-0">
                  <li class="d-flex">
                    <div class="text-center" style="width: 30px">
                      <i class="fas fa-clock text-primary"></i>
                    </div>
                    {{item.Opentime}}</li>
                  <li class="d-flex">
                    <div class="text-center" style="width: 30px">
                      <i class="fas fa-map-marker text-warning"></i>
                    </div>
                    {{item.Add}}</li>
                  <li class="d-flex">
                    <div class="text-center" style="width: 30px">
                      <i class="fas fa-mobile-alt text-info"></i>
                    </div>
                    {{item.Tel}}</li>
                  <li class="d-flex">
                    <div class="text-center" style="width: 30px">
                      <i class="fas fa-ticket-alt text-success"></i>
                    </div>
                    {{item.Ticketinfo}}</li>
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
import Pagination from '../components/Pagination.vue';

export default {
  name: 'Index',
  components: {
    Pagination,
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['getZones', 'getData']),
    goPage(page) {
      this.$store.dispatch('goPage', page);
    },
    changeZone(ele) {
      this.selectZone(ele.target.value);
    },
    selectZone(zone) {
      this.$store.dispatch('selectZone', zone);
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'zones', 'data', 'selectedZone', 'pagination']),
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
    background-image: url(../assets/the-urban-landscape-1698285.png);
    background-size: cover;
    background-position: center center;
  }

  .bg-cover {
    background-size: cover;
    background-position: center center;
  }
</style>
