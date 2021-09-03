import Vue from 'vue';

async function getClients() {
    try {
      const res = await Vue.prototype.$http({
        url: "clients",
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

  // async function getClientById(id) {
  //   try {
  //     const res = await Vue.prototype.$http({
  //       url: "clients/" + id,
  //       method: "get",
  //     });
  //     return res;
  //   } catch (e) {
  //     console.log("error ! ", e);
  //     return {
  //       error: e,
  //     };
  //   }
  // }

  async function getClientByAuth_id(id) {
    try {
      const res = await Vue.prototype.$http({
        url: "clients/" + id,
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

  export { getClients, getClientByAuth_id }