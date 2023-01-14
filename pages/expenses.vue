<template lang="pug">
.fill-height.expenses-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(
      :title="'Expenses'"
      :icon="'credit-card-outline'"
      :rightIconColor="$vuetify.theme.themes.light.primary"
      @clicked=""
      @goBack="goBackToPreviousPage"
      :back="true")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    expenses-chart
    expenses-category
    expenses-history
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import ExpensesChart from '../components/finance/ExpensesChart.vue'
import ExpensesCategory from '../components/finance/ExpensesCategory.vue'
import ExpensesHistory from '../components/finance/ExpensesHistory.vue'

export default {
  name: 'ExpensesPage',
  components: {
    UpperTitle,
    ExpensesChart,
    ExpensesCategory,
    ExpensesHistory
  },
  layout: 'welcome',
  data () {
    return {
      search: null
    }
  },
  computed: {
    ...mapGetters({
      scrollSize: 'screen/getScrollClass2'
    })
  },
  methods: {
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

</style>
