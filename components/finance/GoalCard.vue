<template lang="pug">
.goal-card.px-4
  v-card.rounded-lg(outlined @click="")
    v-list-item.pt-2(three-line)
      v-list-item-content
        v-list-item-title.secondary--text.font-weight-bold.text-h4.mt-2 Your goal
        v-list-item-subtitle.text-h6.primary--text Cut down your expenses
      v-list-item-avatar(size="60" tile)
        v-img(:src="goal")
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
      goal: require('../../assets/finance/Goal.png')
    }
  },
  computed: {
    ...mapGetters({
    })
  },
  methods: {
    ...mapActions({
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
