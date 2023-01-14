<template lang="pug">
.category-list
  v-row.pa-0.ma-0.px-4
    v-col.pa-0.ma-0
      p.text-h6.font-weight-medium.pt-4.mb-0 Expenses category
    v-col.pa-0.ma-0.d-flex

  v-row.pl-4.mx-0.scroll-x.text-center(:style="scrollSize")
    vue-horizontal-list(
      :items="categories"
      :options="options"
    )
      template(v-slot:default="{item}")
        v-card(outlined).align-center.rounded-xl
            v-card.mx-auto.pa-3.category-card(
              @click=""
              elevation="0"
              :color="item.color"
            )
              eva-icon.mt-2(:name="item.icon" fill="white" width="32" height="32")
              p.mt-3.mb-3.category-text.white--text.font-weight-normal.subtitle-1(v-if="item.name.length <= 13") {{item.name}}
              p.mt-0.mb-2.category-text.white--text.font-weight-normal.subtitle-1(v-else) {{item.name}}
            p.my-4.category-text.font-weight-medium.text-h6(:class="item.colorName + '--text'") {{ $formatCurrency(item.amount) }}

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VueHorizontalList from 'vue-horizontal-list'
import FCard from '../fincare-components/FCard.vue'
import FIcon from '../fincare-components/FIcon.vue'

export default {
  name: 'ExpensesCategory',
  components: {
    FCard,
    FIcon,
    VueHorizontalList
  },
  props: {
  },
  data () {
    return {
      options: {
        responsive: [
          { end: 500, size: 2.6 },
          { end: 1000, size: 7.5 }
        ],
        list: {
          // Because: #app {padding: 80px 24px;}
          padding: 8
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      scrollSize: 'screen/getScrollXClass',
      categories: 'expenses/getCategories'
    })
  },
  methods: {
    ...mapActions({
    })
  }
}
</script>

<style lang="scss" scoped>
:deep(.scroll-x) {
  overflow-x: auto !important;
  overflow-y: hidden;
}

:deep(.vhl-item) {
  padding-top: 4px !important;
}

.category-card {
  border-radius: 25px;
}

.category-text {
  line-height: 18px;
}
</style>
