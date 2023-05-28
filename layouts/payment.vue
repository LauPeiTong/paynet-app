<template lang="pug">
v-app
  v-main
    v-container.fill-height.pa-0(fluid)
      v-row.ma-0.fill-height
        Nuxt
        bottom-button(:label="'Pay and Donate (RM 67.00)'" @click="paymentApproved(true)" @click2="paymentApproved2(true)" :secondBtn="true" :label2="'Pay (RM 66.70)'")
</template>

<script>
import { mapActions } from 'vuex'
import BottomButton from '../components/BottomButton.vue'

export default {
  name: 'Payment',
  components: {
    BottomButton
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      paymentApproved: 'payment/changePaymentStatus',
      paymentApproved2: 'payment/changePaymentStatus2'
    })
  }
}
</script>
