<template>
  <div class="personalization">
    <Header :title="title" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Personalization',
  components: {
    Header
  },
  data () {
    return {
      title: 'Personalization'
    }
  }
}
</script>