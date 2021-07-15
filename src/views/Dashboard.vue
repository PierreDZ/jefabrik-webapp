<template>
  <div class="dashboard">
    <Header :title="title"/>
    <div class="img-container">
      <img src="../assets/configurateur-img.png" alt="configurateur">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Dashboard',
  components: {
    Header
  },
  data () {
    return {
      title: 'Dashboard'
    }
  }
}
</script>

<style lang="scss">

img {
  width: 100%;
  margin-top: 30px;
}

</style>