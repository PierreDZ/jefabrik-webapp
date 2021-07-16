<template>
  <div class="tracking-infos">
    <Navigation />
    <Header :title="title" />
    <UserInfos />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import UserInfos from '@/components/UserInfos.vue';

export default {
  name: 'Tracking',
  components: {
    Header,
    Navigation,
    UserInfos
  },
  data () {
    return {
      title: 'Tracking Infos'
    }
  }
}
</script>

<style scoped lang="scss">
  
  .tracking-infos {
    height: 100%;
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 6fr 2fr;
    grid-template-rows: 1fr 3fr;

    #nav {
      grid-column: 1/2;
      grid-row: 1/4;
    }

    #header {
      grid-column: 2/3;
      grid-row: 1/2;  
    }

    #user-infos {
      grid-column: 3/4;
      grid-row: 1/4;
    }
  }
</style>

