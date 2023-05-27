<template lang="pug">
v-app
  v-main
    v-container.fill-height.pa-0(fluid)
      v-row.ma-0.fill-height
        Nuxt
        bottom-button(:label="'Make Payment'" @click="paymentApproved(true)")
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
      paymentApproved: 'payment/changePaymentStatus'

    })
  }
}
</script>
