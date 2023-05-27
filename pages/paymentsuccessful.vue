<template lang="pug">
.fill-height.payment-page.pa-0.mx-auto
  v-row.pa-0.ma-0.justify-center.align-center.fill-height.fill-width
    .d-grid.text-center
      v-img.mx-auto(:src="success" width="350")
      p.text-h4.green--text.font-weight-bold.mb-1 Payment Successful
      p.subtitle-1 Your paid RM 66.70 at 3:20 P.M. 28/5/2023
      v-dialog(v-model="dialog" width="360")
        template(v-slot:activator="{ on, attrs }")
          v-btn.text-none.rounded-lg.mb-3(
            block
            dark
            v-bind="attrs"
            v-on="on"
            :min-height="48"
            :color="$vuetify.theme.themes.light.primary"
          )
            .d-flex.flex-column.px-2.align-center
              span.subtitle-1 View Receipt
        v-card
          v-card-title Receipt
          v-divider
          v-card-text.mt-3.px-1
            p.text-h5.text-center.secondary--text.mb-0.font-weight-bold Ahmad Grocery
            p.subtitle-1.text-center 3:20 P.M. 28/5/2023
            v-list-item.pt-2(three-line)
              v-list-item-content.pt-0
                p.subtitle-2.text-h6 Payment Details
                hr.opacity-50.my-2
                v-item-group.pt-2
                template(v-for='item in payments')
                  v-row.px-2.mb-4.mt-0.justify-center
                    v-row
                      v-col.pr-0.text-center(:cols="3")
                        v-card.mx-3.mt-4.py-2.category-card.rounded-lg(
                          elevation="0"
                          :color="item.color"
                        )
                          eva-icon.mt-1(:name="item.icon" fill="white" width="24" height="24")
                      v-col.pt-2.pb-0.d-flex.flex-column.px-0(:cols="5")
                        p.black--text.font-weight-medium.mb-0.pt-4.mb-1 {{ item.name.toUpperCase() }}
                        p.secondary--text.mb-1 {{ item.quantity }} x {{ $formatCurrency(item.unitPrice) }}
                        .d-flex.align-center.mb-2
                          p.mb-0.mr-1 {{ item.carbon }}g
                          v-chip.mr-auto(v-if="item.point > 0"  color="primary" outlined pill small) {{ item.point }} Teco Points
                      v-col.pl-0.py-2.text-right(:cols="4")
                        p.green--text.font-weight-medium.pt-4.pr-2 {{$formatCurrency(item.price)}}
                  hr.opacity-50.my-2
                p.text-right.text-h5.green--text Total: RM 66.70
                p.text-right.primary--text +68 Teco Points

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
      search: null,
      dialog: false,
      payments: [
        { id: 1, name: 'Water Bottle', price: 2350, unitPrice: 1175, icon: 'star', color: '#237ABC', quantity: 2, point: 20, carbon: 45 },
        { id: 2, name: 'Potato Chip', price: 480, unitPrice: 480, icon: 'cube', color: 'grey lighten-1', quantity: 1, point: 0, carbon: 81 },
        { id: 3, name: 'LED light bulbs', price: 3840, unitPrice: 960, icon: 'star', color: '#237ABC', quantity: 4, point: 48, carbon: 102 }
      ]
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

:deep(.v-btn__content) {
  opacity: 1 !important;
  letter-spacing: -0.011em;
}
</style>
