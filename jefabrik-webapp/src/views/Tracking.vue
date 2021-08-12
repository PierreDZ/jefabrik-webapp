<template>
  <div class="tracking-infos">
    <Navigation />
    <Header :title="title" />
    <div class="tracking-content">
      <div class="container">
        <LineChart
          v-if="loaded"
          :labels="labels"
          :dataLabel="dataLabel"
          :dataDatas="dataDatas"
        />
      </div>
      <LineChart2 
        v-if="loaded"
          :labelsCtry="labelsCtry"
          :dataLabelCtry="dataLabelCtry"
          :dataDatasCtry="dataDatasCtry"
      />
    </div>
    <UserInfos />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import UserInfos from "@/components/UserInfos.vue";
import LineChart from "@/components/ActiveUsersChart.vue";
import LineChart2 from "@/components/PlanetChart2.vue";
import getAnalyticsData from "../modules/google_api"
import getAnalyticsDataCountries from '../modules/google_api_countries'

export default {
  name: 'Tracking',
  components: {
    Header,
    Navigation,
    UserInfos,
    LineChart,
    LineChart2,
  },
  data () {
    return {
      title: 'Tracking Infos',
      loaded: false,
      labels: [],
      labelsCtry: [],
      dataLabel: '',
      dataLabelCtry: '',
      countryLabel: '',
      dataDatas: [],
      dataDatasCtry: [],
      userlist: null,
      userlistCtry: null,
    }
  },
  async mounted () {
    this.loaded = false;
    try {

      await getAnalyticsData().then(res => {
        // console.log('response in my webpage',res.data);
        this.userlist = res.data.rows;
        this.dataLabel = res.data.metricHeaders[0].name;
        this.userlist.forEach(elem => {
          this.labels.push(this.formatDate(elem.dimensionValues[0].value));
          this.dataDatas.push(elem.metricValues[0].value);
        });
        this.loaded = true;
      })
    } catch (e) {
      console.error(e)
    }
    try {
        await getAnalyticsDataCountries().then(res => {
          // console.log('response in my webpage', res.data);
          this.userlistCtry = res.data.rows;
          this.countryLabel = res.data.dimensionHeaders[0].name
          this.dataLabelCtry = res.data.metricHeaders[0].name
          this.userlistCtry.forEach(elem => {
            this.labelsCtry.push(elem.dimensionValues[0].value)
            this.dataDatasCtry.push(elem.metricValues[0].value);
        })
        this.loaded = true;
      })
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
      formatDate (dateString) {
          let day = dateString.substr(6, 2);
          let month = dateString.substr(4, 2);
          return day + '-' + month
      }
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

