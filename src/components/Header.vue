<template>
  <div id="header">
    <h1>{{title}}</h1>
    <div class="header-infos">
      <p class="status">Configurator Status</p>
      <p>Version 1.1.0</p>
      <button>Update Version</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #header {
    width: 100%;
    max-width: 932px;

    h1 {
      text-align: left;
      margin: 0 0 20px 0;
    }

    .header-infos {
      color: rgba(179, 193, 208, 1);
      display: flex;
      width: 100%;
      justify-content: space-between;

      .status {
        position: relative;
      }

      .status::after {
        position: absolute;
        right: -25px;
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: rgba(38, 206, 131, 1);
      }

      button {
        padding: 0 40px;
        border: none;
        font-size: 18px;
        font-weight: 500;
        color: white;
        background-color: rgba(38, 206, 131, 1);
        border-radius: 10px;
        cursor: pointer;

        &:hover {
        background-color: rgba(38, 206, 131, 0.8);
        }
      }
    }
  }
</style>
