<template lang="pug">
  .fill-height.goal-page.pa-0.ma-0
    v-row.pa-0.ma-0.upper-row

      upper-title.ma-0( :icon="'more-vertical'" @goBack="goBackToPreviousPage" :back="true")
    .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
      DonationDetail1()
      donation-payment
      v-row.px-6.pt-2
        f-button(:label = "'Make Donation'" @click="Accepted()")

        //- DonationPayment()

  </template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import FButton from '~/components/fincare-components/FButton.vue'
import DonationDetail1 from '~/components/donation/DonationDetail1.vue'
import DonationPayment from '~/components/donation/DonationPayment.vue'

export default {
  name: 'DonationPage',
  components: {
    UpperTitle,
    FButton,
    DonationDetail1,
    DonationPayment
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
    })
  },
  methods: {
    searchBy (newValue) {
      this.search = newValue
    },
    goBackToPreviousPage () {
      this.$router.go(-1)
    },
    Accepted () {
      this.$router.push('/donation')
    }
  }
}
</script>

<style scoped>
:deep(.scroll) {
  overflow-x: hidden;
  overflow-y: auto;
  width: 100% !important;
}

</style>
