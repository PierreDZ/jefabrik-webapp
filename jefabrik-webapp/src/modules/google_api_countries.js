import Vue from 'vue';

async function getAnalyticsDataCountries() {
    try {
      const res = await Vue.prototype.$http({
        url: "/googleapi/analytics-data-countries",
        method: "get",
      });
      return res;
    } catch (e) {
      console.log("error ! ", e);
      return {
        error: e,
      };
    }
  }

  export default getAnalyticsDataCountries