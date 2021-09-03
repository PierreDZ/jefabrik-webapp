import Vue from "vue";

async function getAnalyticsData(id) {
  try {
    const res = await Vue.prototype.$http({
      url: "googleapi/analytics-data/" + id,
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

async function getAnalyticsDataCountries(id) {
  try {
    const res = await Vue.prototype.$http({
      url: "googleapi/analytics-data-countries/" + id,
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

async function getAnalyticsDataSessions(id) {
  try {
    const res = await Vue.prototype.$http({
      url: "googleapi/analytics-data-sessions/" + id,
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

async function getAnalyticsDataConversions(id) {
  try {
    const res = await Vue.prototype.$http({
      url: "googleapi/analytics-data-conversions" + id,
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

export { getAnalyticsData, getAnalyticsDataCountries, getAnalyticsDataSessions, getAnalyticsDataConversions };
