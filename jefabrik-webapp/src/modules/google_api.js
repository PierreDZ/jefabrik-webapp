import Vue from "vue";

async function getAnalyticsData() {
  try {
    const res = await Vue.prototype.$http({
      url: "/googleapi/analytics-data",
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

export default getAnalyticsData;
