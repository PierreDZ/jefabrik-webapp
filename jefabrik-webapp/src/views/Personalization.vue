<template>
  <div class="personalization">
    <Navigation />
    <Header :title="title" />
    <UserInfos />
    <div class="perso-content">
      <General />
      <Iframe/>
      <p>Last update the {{ updateDate.getDate() }}/{{ updateDate.getMonth() }}/{{ updateDate.getFullYear() }} at {{ updateDate.getHours() }}h{{ getMinutes + updateDate.getMinutes() }} </p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import UserInfos from '@/components/UserInfos.vue';
import Iframe from '@/components/Personalization/Iframe.vue';
import General from '@/components/Personalization/mobygeek.vue';

export default {
  name: 'Personalization',
  components: {
    Header,
    Navigation,
    UserInfos,
    Iframe,
    General
  },
  data () {
    return {
      title: 'Personalization',
      updateDate: new Date
    }
  },
  computed: {
    getMinutes: function () {
      return this.updateDate.getMinutes() < 10 ? '0' : '';
    }
  }
}
</script>

<style lang="scss" scoped>

    .personalization {
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

      .perso-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 5fr 1fr;
        gap: 1.5rem;

        .c-btns {
          grid-column: 1/2;
          grid-row: 1/2;

        }

        #iframe {
          grid-column: 2/3;
          grid-row: 1/2;
        }

        #general-perso {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          grid-column: 1/2;
          grid-row: 1/2;
        }

        p {
          grid-column: 1/3;
          grid-row: 2/3;
          align-self: center;
          justify-self: right;
        }
      }
  }
</style>