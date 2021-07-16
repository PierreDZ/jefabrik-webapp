<template>
  <div class="integration">
    <Navigation />
    <Header :title="title" />
    <div class="integration-content">
      <button v-for="btn in btns" :key="btn.nom">
        {{ btn.nom }}
        <IconifyIcon class="icon" :icon="icons.downloadIcon" />
      </button>
    </div>
    <UserInfos />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import UserInfos from '@/components/UserInfos.vue';
import IconifyIcon from '@iconify/vue';
import downloadIcon from '@iconify/icons-bi/download'

export default {
  name: 'Integration',
  components: {
    Header,
    Navigation,
    UserInfos,
    IconifyIcon
  },
  data () {
    return {
      title: 'Intégration',
      btns: [
        {nom : 'App'},
        {nom : 'Shopify'},
        {nom : 'Prestashop'},
        {nom : 'Wordpress'},
      ],
      icons: {
				downloadIcon
			}
    }
  }
}
</script>

<style lang="scss" scoped>
    .integration {
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

      .integration-content {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        height: 50%;
        grid-column: 2/3;
        grid-row: 2/4;

        button {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 59px;
          width: 170px;
          border-radius: 10px;
          outline: none;
          border: 2px solid #767676;
          color: #767676;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;

          .icon {
              color: #26ce83;
              font-size: 32px;
          }

          &:hover {
            border-color: #26ce83;
            background-color: #26ce83;
            color: white;

            .icon {
              color: white;
            }
          }
        }
      }
  }
</style>
