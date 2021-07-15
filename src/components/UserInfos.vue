<template>
  <div id="user-infos">
    <img src="../assets/logo moby-geek.png" alt="" srcset="">
    <p>{{ app_name }}</p>
    <p>Host : {{ host_name }}</p>
    <button>Maintenance</button>
    <button>Need help ?</button>
  </div>
</template>

<script>
export default {
  name: 'UserInfos',
  data () {
    return {
      app_name: 'Moby-geek',
      host_name: 'AWS'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #user-infos {
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      width: 25%;
    }

    button {
      width: 149px;
      height: 57px;
      font-size: 18px;
      color: #767676;
      background: none;
      border: 2px solid #767676;
      border-radius: 10px;
      cursor: pointer;

      &:nth-child(4) {
        margin-bottom: 40px;

        &:hover {
          background: #FFA36E;
          border: 2px solid #FFA36E;
          color: white;
        }
      }
      &:nth-child(5):hover {
        border: 2px solid #33A9FF;
        color: #33A9FF;
      }
    }
  }
</style>
