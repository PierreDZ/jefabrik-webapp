<template>
  <div class="tracking-infos">
    <Navigation />
    <Header :title="title" />
    <div class="tracking-content">
      <PlanetChart />
      <PlanetChart2 />
      <PlanetChart3 />
      <div class="info">{{ info }}</div>
      <div class="error">{{ error }}</div>
    </div>
    <UserInfos />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import UserInfos from '@/components/UserInfos.vue';
import PlanetChart from "@/components/PlanetChart.vue";
import PlanetChart2 from "@/components/PlanetChart2.vue";
import PlanetChart3 from "@/components/PlanetChart3.vue";

export default {
  name: 'Tracking',
  components: {
    Header,
    Navigation,
    UserInfos,
    PlanetChart,
    PlanetChart2,
    PlanetChart3
  },
  data () {
    return {
      title: 'Tracking Infos',
      info: null,
      error: null
    }
  },
  mounted () {
    this.$gapi.request({
      path: 'https://analyticsdata.googleapis.com/v1beta/',
      method: 'GET'
    })
  }
}
</script>

<style scoped lang="scss">
  
  .tracking-infos {
    height: 100%;
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 6fr 2fr;
    grid-template-rows: 1fr 4fr;

    #nav {
      grid-column: 1/2;
      grid-row: 1/4;
    }

    #header {
      grid-column: 2/3;
      grid-row: 1/2;  
    }

    #user-infos {
      grid-column: 3/4;
      grid-row: 1/4;
    }

    .tracking-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
      } 
    }
  }
</style>

