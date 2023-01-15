<template lang="pug">
.wishlist-item.px-4
  v-card.rounded-lg(outlined)
    v-list-item.pt-2(three-line)
      v-list-item-content.text-center
        v-row.d-flex.flex-row
          v-list-item-title.secondary--text.font-weight-bold.text-h5.mt-2 Buy an iPhone 14
        v-list-item-subtitle.subtitle-1.darkGrey--text 2022 Jun - 2023 Jun
        v-img(:src="goal" width="50")
        v-progress-linear.rounded-xl(
          :value="progress"
          :color="$vuetify.theme.themes.light.primary"
          height="30"
        )
          template(v-slot:default="{ value }")
            strong.white--text {{ Math.ceil(value) }}%
  v-card.rounded-lg.mt-4(outlined)
    v-list-item.pt-2(three-line)
      v-list-item-content.text-start.pt-0
        v-row
          v-col
            v-list-item-title.mt-3.tertiary--text.font-weight-bold.text-h6 Total savings: RM 2940.00
            v-list-item-subtitle.subtitle-1.secondary--text.mt-1 Your savings goal is RM 4200.00
            v-divider.my-4
            v-list-item-title.mb-2.danger--text.font-weight-bold.text-h5 Remaining: RM 1260.00
  .pb-8
    v-card.rounded-lg.mt-4(outlined)
      v-list-item.pt-2(three-line)
        v-list-item-content.pt-0
          v-row
            v-col
            v-col.text-center
              v-img(:src="reward" width="120")
            v-col
          v-row.mt-0
            v-col.text-center
              p.mb-0.secondary--text.font-weight-bold.text-h5 Get 5000 RHB Points
              p.darkGrey--text.font-weight-medium If you reach your goal before 2023 Jun
    v-card.rounded-lg.mt-4.mb-16(outlined)
      v-list-item.pt-2(three-line)
        v-list-item-content.pt-0
          v-list-item-title.mt-3.mb-2.tertiary--text.font-weight-bold.text-h6 Tips for you to reach goal:
          v-row
            v-col
            v-col.text-center
              v-img(:src="pig" width="120")
            v-col
          v-row.mt-0
            v-col.text-center
              p.mb-0.secondary--text.font-weight-bold.text-h5 Save RM 210.00/month
              p.darkGrey--text.font-weight-medium To buy your iPhone 14 before 2023 Jun
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FIcon from '../fincare-components/FIcon.vue'

export default {
  name: 'WishlistItem',
  components: {
    FIcon
  },
  props: {
  },
  data () {
    return {
      selectedIndex: 1,
      progress: 70,
      goal: require('../../assets/finance/Phone.png'),
      reward: require('../../assets/finance/Reward.png'),
      pig: require('../../assets/finance/Pig.png')
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

<style lang="scss">
foreignObject {
  width: 380px !important;
}

</style>
