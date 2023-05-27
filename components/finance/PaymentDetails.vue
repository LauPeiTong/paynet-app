<template lang="pug">
.payment-item.px-4
  v-card.rounded-lg(outlined)
    v-list-item.pt-2(three-line)
      v-list-item-content.text-center
        v-list-item-subtitle.subtitle-1.darkGrey--text Tero Point That You Will Gain
        v-row.d-flex.flex-row
          v-list-item-title.primary--text.font-weight-bold.text-h4.mt-2 68 Points
        v-row
          v-col
          v-col.text-center
            v-img(:src="categoryImg" width="200")
          v-col
        p.font-weight-bold.text-h5 Total Payment: RM 66.70

  v-card.rounded-lg.mt-3.mb-8(outlined)
    v-list-item.pt-2(three-line)
      v-list-item-content.pt-0
        p.subtitle-2.text-h6 Payment Details
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
          hr.opacity-50.my-2(v-if="item.id !== payments.length")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FIcon from '../fincare-components/FIcon.vue'

export default {
  name: 'PaymentDetails',
  components: {
    FIcon
  },
  data () {
    return {
      selectedIndex: 1,
      payments: [
        { id: 1, name: 'Water Bottle', price: 2350, unitPrice: 1175, icon: 'star', color: '#237ABC', quantity: 2, point: 20, carbon: 45 },
        { id: 2, name: 'Potato Chip', price: 480, unitPrice: 480, icon: 'cube', color: 'grey lighten-1', quantity: 1, point: 0, carbon: 81 },
        { id: 3, name: 'LED light bulbs', price: 3840, unitPrice: 960, icon: 'star', color: '#237ABC', quantity: 4, point: 48, carbon: 102 }
      ]
    }
  },
  computed: {
    ...mapGetters({
      widthX: 'screen/getWidthClass',
      category: 'expenses/getCurrentCategory'
    }),
    categoryImg () {
      return require('../../assets/finance/TecoPoints.png')
    }
  },
  methods: {
    ...mapActions({
    })
  }
}
</script>

<style scoped>
foreignObject {
  width: 380px !important;
}

.opacity-50 {
  opacity: 0.5;
}
</style>
