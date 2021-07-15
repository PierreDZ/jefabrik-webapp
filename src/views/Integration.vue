<template>
  <div class="integration">
    <Header :title="title" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Integration',
  components: {
    Header
  },
  data () {
    return {
      title: 'Intégration'
    }
  }
}
</script>
