<template>
  <div class="login">
    <section class="background-img">
      <h1>Jefabrik Analytics</h1>
    </section>
    <section class="log">
      <div class="inner-log">
        <p>Let's get started</p>
        <div v-if="!$auth.loading">
          <!-- show login when not authenticated -->
          <button class="btn" @click="login">
            Connect to the App
          </button>
          <!-- <button class="btn" v-if="$auth.isAuthenticated" @click="logout">
            Log out
          </button> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      // this.$auth.loginWithRedirect({
      //   redirect_uri: window.location.origin + "/Dashboard"
      // });
      window.location.href = '/Dashboard';
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);

  .background-img {
    display: flex;
    justify-content: center;
    background-color: rgba(38, 206, 131, 1);

    h1 {
      margin-top: 110px;
      color: white;
      font-size: 53px;
    }
  }

  .log {
    width: 80%;
    height: 80%;
    justify-self: center;
    align-self: center;
    text-align: left;

    .inner-log {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        margin: 50px 0;
        color: black;
        font-size: 36px;
        font-weight: bold;
      }

      .btn {
        cursor: pointer;
        height: 64px;
        width: 100%;
        border-radius: 10px;
        border: 1px solid #26ce83;
        background-color: transparent;
        color: #26ce83;
        font-size: 18px;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: #26ce83;
          color: white;
        }
      }
    }
  }
}
</style>
