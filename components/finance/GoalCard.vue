<template lang="pug">
.goal-card.px-3
  v-card.rounded-lg.mt-4(outlined)
    v-card.mx-4.mt-4.lightBlue.rounded-lg(outlined)
      v-list-item.pt-2(three-line)
        v-list-item-avatar(size="60" tile)
          v-img(:src="coins")
        v-list-item-content
          v-list-item-title.secondary--text.font-weight-medium.text-h6.mt-2 Total Teco Points:
          v-list-item-subtitle.font-weight-bold.text-h4.primary--text {{ points }}
    v-list-item.mx-2
      v-list-item-title.font-weight-medium.text-h6
        |
        a.orange--text(@click="goToVoucherPage()") Redeem your vouchers
      eva-icon.mt-2(name="gift-outline" :fill="$vuetify.theme.themes.light.orange")
  //- v-card.rounded-lg(outlined @click="")
  //-   v-list-item.pt-2(three-line)
  //-     v-list-item-content
  //-       v-list-item-title.secondary--text.font-weight-bold.text-h5.mt-2.mb-2 Total EcoPoints
  //-       v-progress-linear.rounded-xl.mb-2(
  //-         :value="70"
  //-         :color="$vuetify.theme.themes.light.primary"
  //-         height="30"
  //-       )
  //-         template(v-slot:default="{ value }")
  //-           strong.white--text 700 / 1000
  //-       //- v-list-item-subtitle.text-h6.primary--text 50/150   {{ value.toFixed(2) }} / {{ max }}   "value"
  //-     v-list-item-avatar(size="60" tile)
  //-       v-img(:src="goal")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'StatisticCard',
  components: {
  },
  props: {
  },
  data () {
    return {
      goal: require('../../assets/finance/Goal.png'),
      coins: require('../../assets/img/coins.png')
    }
  },
  computed: {
    ...mapGetters({
      points: 'payment/getPoints'
    })
  },
  methods: {
    ...mapActions({
    }),
    goToVoucherPage () {
      this.$router.push('/voucher')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
