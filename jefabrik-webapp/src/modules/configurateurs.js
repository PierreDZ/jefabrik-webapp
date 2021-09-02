import Vue from 'vue';

async function getConfigById(id) {
    try {
      const res = await Vue.prototype.$http({
        url: "configurateurs/" + id,
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

  async function updateConfigById(id, data) {
    try {
      const res = await Vue.prototype.$http({
        url: "configurateurs/" + id,
        method: "patch",
        data: data
      });
      return res;
    } catch (e) {
      console.log("error ! ", e);
      return {
        error: e,
      };
    }
  }

  export { getConfigById, updateConfigById };