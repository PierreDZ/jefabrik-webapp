import Vue from "vue";

async function getAnalyticsData() {
  try {
    const res = await Vue.prototype.$http({
      url: "googleapi/analytics-data",
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

async function getAnalyticsDataCountries() {
  try {
    const res = await Vue.prototype.$http({
      url: "googleapi/analytics-data-countries",
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

async function getAnalyticsDataSessions() {
  try {
    const res = await Vue.prototype.$http({
      url: "googleapi/analytics-data-sessions",
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

async function getAnalyticsDataConversions() {
  try {
    const res = await Vue.prototype.$http({
      url: "googleapi/analytics-data-conversions",
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
