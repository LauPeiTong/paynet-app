<template lang="pug">
v-app
  v-main
    v-container.fill-height.pa-0(fluid)
      v-row.ma-0.fill-height
        Nuxt
        bottom-button(:label="'Add new wishlist'")
</template>

<script>
import BottomButton from '../components/BottomButton.vue'

export default {
  name: 'WishList',
  components: {
    BottomButton
  },
  data () {
    return {
    }
  }
}
</script>
