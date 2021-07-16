<template>
  <div class="dashboard">
    <Navigation />
    <Header :title="title" />
    <UserInfos />
      <div class="configurator-container">
        <iframe 
        id="v3d_iframe" 
        class="v3d-iframe" 
        src="https://www.moby-geek.com/wp-content/uploads/verge3d/moby-geek_configurator_webpage/index.html?configurationId=700&amp;userId=1200&amp;wcProductCategorySlug=configurateur-bureau&amp;redirectUrl=https://www.moby-geek.com/configurateur/" 
        width="100%" 
        height="100%" 
        data-hj-allow-iframe
        >
				</iframe>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import UserInfos from '@/components/UserInfos.vue';

export default {
  name: 'Dashboard',
  components: {
    Header,
    Navigation,
    UserInfos
  },
  data () {
    return {
      title: 'Dashboard'
    }
  }
}
</script>

<style lang="scss" scoped>

.dashboard {
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
  
  .configurator-container {
    height: 50%;
    grid-column: 2/3;
    grid-row: 2/4;

    img {
      width: 100%;
      margin-top: 30px;
    }
  }

}


</style>