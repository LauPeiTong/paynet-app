<template lang="pug">
.fill-height.expenses-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(
      :title="category.name"
      :icon="'credit-card-outline'"
      :rightIconColor="$vuetify.theme.themes.light.primary"
      @clicked=""
      @goBack="goBackToPreviousPage"
      :back="true")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    expenses-details(:items="getItems")
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import ExpensesDetails from '../components/finance/ExpensesDetails.vue'

export default {
  name: 'ExpensesPage',
  components: {
    UpperTitle,
    ExpensesDetails
  },
  layout: 'welcome',
  data () {
    return {
      search: null
    }
  },
  computed: {
    ...mapGetters({
      scrollSize: 'screen/getScrollClass2',
      category: 'expenses/getCurrentCategory',
      food: 'expenses/getFood',
      housing: 'expenses/getHousing',
      entertainment: 'expenses/getEntertainment',
      other: 'expenses/getOther'
    }),
    getItems () {
      if (this.category.id === 0) {
        return this.food
      } else if (this.category.id === 1) {
        return this.housing
      } else if (this.category.id === 2) {
        return this.entertainment
      } else {
        return this.other
      }
    }
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
