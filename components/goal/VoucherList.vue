<template lang="pug">
.voucher-list.py-6.px-2
  v-item-group.pt-2.pb-8
    template(v-for='item in vouchers')
      v-row.d-flex.flex-column.px-4.pb-4.justify-center
        v-card.rounded-lg(
            @click=""
            outlined
          )
            v-row
              v-col.pr-0(:cols="4")
                v-img.rounded-lg.ma-2(:src="require(`../../assets/shops/${item.img.toLowerCase()}.jpg`)" width="90" height="90")
              v-col.py-2.d-flex.flex-column.px-0(:cols="6")
                p.secondary--text.font-weight-medium.mb-0.pt-4 {{item.name}}
                p.caption.darkGrey--text.font-weight-light.mb-0 {{item.company}}
                p.primary--text.font-weight-medium.pt-4.pr-2 {{item.points}} points
              v-col(:cols="2")
                p.white--text.font-weight-medium.pt-4.pr-2 {{item.points}} points
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FCard from '../fincare-components/FCard.vue'

export default {
  name: 'VoucherList',
  components: {
    FCard
  },
  props: {
  },
  data () {
    return {
      vouchers: [
        { id: 0, name: 'RM10 in-store voucher', company: '99 Speedmart', points: 2500, img: '99speedmart' },
        { id: 1, name: 'RM10 in-store voucher', company: 'Aeon', points: 5000, img: 'aeon' },
        { id: 2, name: 'RM5 off BananaBro', company: 'BananaBro', points: 2000, img: 'bananabro' },
        { id: 3, name: 'RM10 off Family Mart', company: 'Family Mart', points: 4000, img: 'familymart' },
        { id: 4, name: 'RM10 in-store voucher', company: 'MyNews', points: 5000, img: 'mynews' },
        { id: 5, name: 'RM10 in-store voucher', company: 'Secret Recipe', points: 5000, img: 'secretrecipe' },
        { id: 6, name: 'RM10 in-store voucher', company: 'Sushi King', points: 5000, img: 'sushiking' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      widthX: 'screen/getWidthClass'
    })
  },
  methods: {
    ...mapActions({
    })
  }
}
</script>

<style lang="scss" scoped>
.min-350-width {
  min-width: 353px !important;
}

.v-chip.v-chip--outlined.v-chip.v-chip {
  background-color: white !important;
  border-width: 2px;
  font-weight: 400;
  font-size: 13px;
  height: 20px;
  max-width: 120px;
}
</style>
