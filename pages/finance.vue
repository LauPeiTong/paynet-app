<template lang="pug">
.fill-height.finance-home-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'TEcoPAY'" :icon="'more-vertical'")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    goal-card
    eco-points
    expenses-chart
    expenses-category
    v-row.pa-0.ma-0.upper-row

</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import GoalCard from '../components/finance/GoalCard.vue'
import ExpensesChart from '../components/finance/ExpensesChart.vue'
import EcoPoints from '~/components/finance/EcoPoints.vue'
import ExpensesCategory from '~/components/finance/ExpensesCategory.vue'

export default {
  name: 'FinancePage',
  components: {
    UpperTitle,
    EcoPoints,
    GoalCard,
    ExpensesCategory,
    ExpensesChart
  },
  layout: 'default',
  data () {
    return {
      search: null
    }
  },
  computed: {
    ...mapGetters({
      scrollSize: 'screen/getScrollClass'
    })
  },
  methods: {
    searchBy (newValue) {
      this.search = newValue
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
