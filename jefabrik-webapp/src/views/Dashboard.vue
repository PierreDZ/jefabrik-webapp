<template>
  <div class="dashboard">
    <Navigation />
    <Header :title="title" />
    <UserInfos />
      <div class="configurator-container">
        <Iframe :urlConfig="urlConfig" />
        <p>Last connexion on {{ connectionDate.getDate() }}/{{ connectionDate.getMonth() }}/{{ connectionDate.getFullYear() }} at {{ connectionDate.getHours() }}h{{ getMinutes + connectionDate.getMinutes() }}</p>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import UserInfos from '@/components/UserInfos.vue';
import Iframe from '@/components/Iframe.vue'
import { getClientByAuth_id } from '../modules/clients'
import { getConfigById } from '../modules/configurateurs'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Navigation,
    UserInfos,
    Iframe
  },
  data () {
    return {
      title: 'Dashboard',
      connectionDate: new Date,
      config_id: "",
      urlConfig: ""
    }
  },
  async mounted() {
    await getClientByAuth_id(this.$auth.user.sub).then(res => {
      this.config_id = res.data[0].configurateurs[0];
    });

    await getConfigById(this.config_id).then(res => {
      this.urlConfig = res.data.urlVerge3D
    });
  },
  computed: {
    getMinutes: function () {
      return this.connectionDate.getMinutes() < 10 ? '0' : '';
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

    p {
      text-align: right;
      margin-top: 20px;
    }
  }

}


</style>