<template>
  <div id="header">
    <div class="header-title">
      <h1>{{ title }}</h1>
      <button v-if="isLoggedIn">Logout</button>
    </div>
    <div class="header-infos">
      <p class="status">Configurator Status</p>
      <p>Version 1.1.0</p>
      <button>Update Version</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["title"],
  data () {
    return {
      isLoggedIn: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
  width: 100%;
  height: inherit;
  max-width: 932px;

  .header-title {
    display: flex;
    justify-content: space-between;

    h1 {
      text-align: left;
      margin: 0 0 20px 0;
    }

    button {
      width: 20%;
      height: 100%;
      padding: 10px 20px;
      margin-right: 5%;
      border: 1px solid #FFA36E;
      font-size: 18px;
      font-weight: 500;
      color: #FFA36E;
      background-color: white;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #FFA36E;
        color: white;
      }
    }
  }

  .header-infos {
    color: rgba(179, 193, 208, 1);
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .status {
      position: relative;
    }

    .status::after {
      position: absolute;
      right: -25px;
      content: "";
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: rgba(38, 206, 131, 1);
    }

    button {
      height: 50px;
      width: 240px;
      border: none;
      font-size: 18px;
      font-weight: 500;
      color: white;
      background-color: rgba(38, 206, 131, 1);
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: rgba(38, 206, 131, 0.8);
      }
    }
  }
}
</style>
