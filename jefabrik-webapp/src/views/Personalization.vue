<template>
  <div class="personalization">
    <Navigation />
    <Header :title="title" />
    <div class="perso-content">
      <ul class="c-btns">
        <li v-for="btn in btns" :key="btn.id">
          <button @click="logV" :value="btn.id">{{ btn.name }}</button>
        </li>
      </ul>
          <General/>
          <Formes/>
    </div>
    <UserInfos />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import UserInfos from '@/components/UserInfos.vue';
import General from '@/components/Perso/General.vue';
import Formes from '@/components/Perso/Formes.vue';

export default {
  name: 'Personalization',
  components: {
    Header,
    Navigation,
    UserInfos,
    General,
    Formes
  },
  data () {
    return {
      title: 'Personalization',
      btns: [
        {id: 1, name: 'General'},
        {id: 2, name: 'Formes'},
        {id: 3, name: 'Matériaux'},
      ]
    }
  },
  methods: {
    logV () {
      
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
        grid-template-rows: repeat(2, 1fr);

        .c-btns {
          grid-column: 1/2;
          display: flex;
          justify-content: space-around;
          list-style: none;
        }

        #general {
          grid-column: 2/3;
          grid-row: 1/3;
        }
      }
  }
</style>