<template>
  <div id="user-infos">
    <div class="notification-img">
      <img :src="$auth.user.picture" alt="" srcset="">
      <span class="badge"></span>
    </div>
    <p>{{ $auth.user.name }}</p>
    <p>Host : {{ host_name }}</p>
    <button>Maintenance</button>
    <button>Need help ?</button>
    <button @click="logout">Log out</button>
  </div>
</template>

<script>
export default {
  name: 'UserInfos',
  data () {
    return {
      host_name: 'AWS',
      problem: false
    }
  },
  methods: {
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
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
      border-radius: 50%;
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
      padding: 10px 10px;
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
      &:nth-child(5) {
        margin-bottom: 40px;

        &:hover {
          border: 2px solid #33A9FF;
          color: #33A9FF;
        }
      }
      &:nth-child(6) {
        background-color: #d62828;
        color: white;
        border: 2px solid #d62828;
        &:hover {
          color: #d62828;
          background-color: white;
        }
      }
    }
  }
</style>
