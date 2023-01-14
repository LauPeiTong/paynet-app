<template lang="pug">
.finance-mange
  v-row.pa-0.ma-0
    v-col.pa-0.ma-0
      p.text-h6.font-weight-bold.pt-6.mb-0.secondary--text Manage your money

  v-row.mt-0
    v-col.pr-1(:cols="6")
      f-card.d-flex.flex-column(
        @click="goToExpensesPage"
        :height="150"
        :label="'Expenses'"
        :label2="'Track your expenses history'"
        :color="$vuetify.theme.themes.light.tertiary"
      )
        template(v-slot:action)
          v-row.mt-4
            v-col.py-0
              v-chip(
                outlined
                color="white"
              )
                span 5 New
            v-col.py-0.justify-end.text-right
              eva-icon(name="credit-card" fill="white" height="28" width="28")
    v-col.pl-1(:cols="6")
      f-card.d-flex.flex-column(
        @click="goToWishlistPage"
        :height="150"
        :label="'Wishlist'"
        :label2="'Reach your financial goal'"
        :color="$vuetify.theme.themes.light.primary"
      )
        template(v-slot:action)
          v-row.mt-4
            v-col.py-0
              v-chip(
                outlined
                color="white"
              )
                span 70 %
            v-col.py-0.justify-end.text-right
              eva-icon(name="award" fill="white" height="28" width="28")

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import FCard from '../fincare-components/FCard.vue'

export default {
  name: 'FinanceManage',
  components: {
    FCard
  },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      scrollSize: 'screen/getScrollXClass'
    })
  },
  methods: {
    ...mapActions({
    }),
    goToExpensesPage () {
      this.$router.push('/expenses')
    },
    goToWishlistPage () {
      this.$router.push('/wishlist')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
