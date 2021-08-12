<template>
  <div id="user-infos">
    <div class="notification-img">
      <img src="../assets/logo moby-geek.png" alt="" srcset="">
      <span class="badge"></span>
    </div>
    <p>{{ user_name }}</p>
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
      user_name: 'Moby-geek',
      host_name: 'AWS',
      problem: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #user-infos {
    height: 377px;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      margin-bottom: 20px;
    }

    span {
      position: absolute;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background-color: #26ce83;
    }

    p {
      margin-bottom: 20px;
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
      transition: all 0.3s ease-in-out;

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
