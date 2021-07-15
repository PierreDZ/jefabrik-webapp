<template>
  <div id="app">
    <Navigation />
    <router-view />
    <UserInfos />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import UserInfos from '@/components/UserInfos.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    UserInfos
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100vw;
  margin: 50px 0 0 0;
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 6fr 2fr;

  #nav {
    grid-column: 1/2;
  }

  .dashboard,
  .integration,
  .personalization,
  .tracking-infos {
    grid-column: 2/3;
  }

  #user-infos {
    grid-column: 3/4;
  }
}
</style>
