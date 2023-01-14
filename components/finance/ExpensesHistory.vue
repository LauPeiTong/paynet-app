<template lang="pug">
.expenses-history.pt-4
  v-row.pa-0.ma-0.px-4
    v-col.pa-0.ma-0
      v-item-group.pt-2.pb-8
        template(v-for='item in expenses')
          v-row.px-2.mb-4.mt-0.justify-center
            v-row
              v-col.pr-0.text-center(:cols="3")
                v-card.mx-4.mt-4.py-2.category-card(
                  elevation="0"
                  :color="itemCategory(item.category).color"
                )
                  eva-icon.mt-2(:name="itemCategory(item.category).icon" fill="white" width="24" height="24")
              v-col.pt-2.pb-0.d-flex.flex-column.px-0(:cols="5")
                p.black--text.font-weight-medium.mb-0.pt-4 {{ item.name.toUpperCase() }}
                p.secondary--text.font-weight-medium {{ itemCategory(item.category).name }}
              v-col.pl-0.py-2.text-right(:cols="4")
                p.danger--text.font-weight-medium.pt-4.pr-2 {{$formatCurrency(item.amount * -1)}}
          v-divider

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FCard from '../fincare-components/FCard.vue'
import FIcon from '../fincare-components/FIcon.vue'

export default {
  name: 'ExpensesHistory',
  components: {
    FCard,
    FIcon
  },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      expenses: 'expenses/getExpensesList',
      categories: 'expenses/getCategories'
    })
  },
  methods: {
    ...mapActions({
    }),
    itemCategory (id) {
      return this.categories.find((c) => {
        return c.id === id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.category-card {
  border-radius: 50px;
}
</style>
