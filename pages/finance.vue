<template lang="pug">
.fill-height.finance-home-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Finance'" :icon="'more-vertical'")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    goal-card
    finance-manage.px-4
    finance-list.px-4.py-6
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import GoalCard from '../components/finance/GoalCard.vue'
import FinanceManage from '../components/finance/FinanceManage.vue'
import FinanceList from '../components/finance/FinanceList.vue'

export default {
  name: 'FinancePage',
  components: {
    UpperTitle,
    GoalCard,
    FinanceManage,
    FinanceList
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
