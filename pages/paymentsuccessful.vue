<template lang="pug">
.fill-height.payment-page.pa-0.mx-auto
  v-row.pa-0.ma-0.justify-center.align-center.fill-height.fill-width
    d-grid.text-center
      v-img.mx-auto(:src="success" width="350")
      p.text-h4.green--text.font-weight-bold.mb-1 Payment Successful
      p.subtitle-1 Your paid RM 66.70 at 3:20 P.M. 28/5/2023
      f-button.mb-3(
        :label="'View Receipt'"
        block
        dark
        :color="$vuetify.theme.themes.light.primary"
        @click=""
      )
      f-button(
        :label="'Back to Home'"
        block
        dark
        :color="'grey lighten-1'"
        @click="goBackToHomePage"
      )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FButton from '../components/fincare-components/FButton.vue'

export default {
  name: 'PaymentSuccessfulPage',
  components: {
    FButton
  },
  layout: 'welcome',
  data () {
    return {
      search: null
    }
  },
  computed: {
    ...mapGetters({
      scrollSize: 'screen/getScrollClass2'
    }),
    success () {
      return require('../assets/img/success.png')
    }
  },
  methods: {
    ...mapActions({
    }),
    goBackToHomePage () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scss scoped>
:deep(.scroll) {
  overflow-x: hidden;
  overflow-y: auto;
  width: 100% !important;
}

.fill-width {
  width: 100% !important;
}
</style>
