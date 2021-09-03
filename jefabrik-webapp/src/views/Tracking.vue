<template>
  <div class="tracking-infos">
    <Navigation />
    <Header :title="title" />
    <div class="tracking-content">
      <LineChart
        v-if="loadedAll"
        :labels="labels"
        :dataLabel="dataLabel"
        :dataDatas="dataDatas"
      />
      <LineChart2
        v-if="loadedAll"
        :labelsCtry="labelsCtry"
        :dataLabelCtry="dataLabelCtry"
        :dataDatasCtry="dataDatasCtry"
      />
      <LineChart3
        v-if="loadedAll"
        :labelsSessions="labelsSessions"
        :dataLabelsSessions="dataLabelsSessions"
        :dataDatasSessions="dataDatasSessions"
      />
      <div class="error" v-if="error">
        <p>
          Si les graphiques ne se chargent pas, veulliez contacter jefabrik à
          l'adresse suivante :
          <a href="mailto:Contact@moby-geek.com">contact@jefabrik.com</a>
        </p>
      </div>
    </div>
    <UserInfos />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import UserInfos from "@/components/UserInfos.vue";
import LineChart from "@/components/ActiveUsersChart.vue";
import LineChart2 from "@/components/ActiveUsersCountriesChart.vue";
import LineChart3 from "@/components/ActiveUsersSessionsChart.vue";
import {
  getAnalyticsData,
  getAnalyticsDataCountries,
  getAnalyticsDataSessions,
} from "../modules/google_api";

export default {
  name: "Tracking",
  components: {
    Header,
    Navigation,
    UserInfos,
    LineChart,
    LineChart2,
    LineChart3,
  },
  data() {
    return {
      title: "Tracking Infos",
      loadedAll: false,
      error: false,
      labels: [],
      labelsCtry: [],
      labelsSessions: [],
      dataLabel: "",
      dataLabelCtry: "",
      dataLabelsSessions: "",
      countryLabel: "",
      dataDatas: [],
      dataDatasCtry: [],
      dataDatasSessions: [],
      userList: null,
      userListCtry: null,
      userListSessions: null,
    };
  },
  async mounted() {
    try {
      await getAnalyticsData().then((res) => {
        // console.log('response in my webpage',res.data);
        this.userList = res.data.rows;
        this.dataLabel = res.data.metricHeaders[0].name;
        this.userList.forEach((elem) => {
          this.labels.push(elem.dimensionValues[0].value);
          this.dataDatas.push(elem.metricValues[0].value);
        });
        console.log(this.labels);
        console.log(this.dataDatas);
        this.labels.forEach((elem, i) => {
          this.labels[i] = this.formatDate(elem);
        });
      });

      await getAnalyticsDataCountries().then((res) => {
        // console.log('response in my webpage', res.data);
        this.userListCtry = res.data.rows;
        this.countryLabel = res.data.dimensionHeaders[0].name;
        this.dataLabelCtry = res.data.metricHeaders[0].name;
        this.userListCtry.forEach((elem) => {
          this.labelsCtry.push(elem.dimensionValues[0].value);
          this.dataDatasCtry.push(elem.metricValues[0].value);
        });
      });

      await getAnalyticsDataSessions().then((res) => {
        // console.log(res.data);
        this.userListSessions = res.data.rows;
        this.dataLabelsSessions = res.data.metricHeaders[0].name;
        this.userListSessions.forEach((elem) => {
          this.labelsSessions.push(elem.dimensionValues[0].value);
          this.dataDatasSessions.push(elem.metricValues[0].value);
        });
        this.labelsSessions.forEach((elem, i) => {
           this.labelsSessions[i] = this.formatDate(elem);
        });
      });

    } catch (e) {

      console.error(e);
      this.error = true;
    }
    this.loadedAll = true;
  },
  methods: {
    formatDate(dateString) {
      let day = dateString.substr(6, 2);
      let month = dateString.substr(4, 2);
      return day + "-" + month;
    },
  },
};
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
    grid-template-rows: auto;
    gap: 1.5rem;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }

    .error {
      grid-row: 1/2;
      grid-column: 1/3;
      align-self: center;
    }
  }
}
</style>
