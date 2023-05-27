<template lang="pug">
.fill-height.payment-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(
      :title="'Ahmad Grocery'"
      :icon="'credit-card-outline'"
      :rightIconColor="$vuetify.theme.themes.light.primary"
      @clicked=""
      @goBack="goBackToPreviousPage"
      :back="true")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    payment-details.pb-16
  v-row.center.justify-center.align-center.pa-0.ma-0(v-if="paymentStatus")
    v-progress-circular(
      :size="70"
      :width="7"
      indeterminate
    )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import PaymentDetails from '../components/finance/PaymentDetails.vue'

export default {
  name: 'PaymentPage',
  components: {
    UpperTitle,
    PaymentDetails
  },
  layout: 'payment',
  data () {
    return {
      search: null,
      howProgress: true
    }
  },
  computed: {
    ...mapGetters({
      scrollSize: 'screen/getScrollClass2',
      category: 'expenses/getCurrentCategory',
      food: 'expenses/getFood',
      housing: 'expenses/getHousing',
      entertainment: 'expenses/getEntertainment',
      other: 'expenses/getOther',
      paymentStatus: 'payment/getPaymentStatus'
    }),
    getItems () {
      if (this.category.id === 0) {
        return this.food
      } else if (this.category.id === 1) {
        return this.housing
      } else if (this.category.id === 2) {
        return this.entertainment
      } else {
        return this.other
      }
    }
  },
  watch: {
    paymentStatus (newValue) {
      setTimeout(() => {
        this.paymentApproved(false)
        this.$router.push('/paymentsuccessful')
      }, 2000)
    }
  },
  methods: {
    ...mapActions({
      paymentApproved: 'payment/changePaymentStatus'
    }),
    searchBy (newValue) {
      this.search = newValue
    },
    goBackToPreviousPage () {
      this.$router.go(-1)
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

.center {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
