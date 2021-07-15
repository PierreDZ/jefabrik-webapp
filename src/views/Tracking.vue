<template>
  <div class="tracking-infos">
    <Header :title="title" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Tracking',
  components: {
    Header
  },
  data () {
    return {
      title: 'Tracking Infos'
    }
  }
}
</script>

