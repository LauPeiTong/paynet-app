<template lang="pug">
.wishlist-item.px-4
  v-card.rounded-lg(outlined)
    v-list-item.pt-2(three-line)
      v-list-item-content.text-center
        v-row.d-flex.flex-row
          v-list-item-title.secondary--text.font-weight-bold.text-h5.mt-2 {{$formatCurrency(category.amount)}}
        v-list-item-subtitle.subtitle-1.darkGrey--text 2023 Jan
        v-row
          v-col
          v-col.text-center
            v-img(:src="categoryImg" width="200")
          v-col
          v-item-group.pt-2.pb-8.text-left
            template(v-for='item in items')
              v-list-item(three-line)
                v-list-item-content
                  v-list-item-title.mb-1.secondary--text.font-weight-bold.text-h6 {{item.name}}
                  v-list-item-subtitle.mb-1.primary--text.font-weight-bold.subtitle-1 {{ $formatCurrency(category.amount * (item.percentage / 100.0))}}
                  v-list-item-subtitle.white--text.mb-0 cccccc
                  v-progress-linear.rounded-xl(
                    :value="item.percentage"
                    :color="$vuetify.theme.themes.light.primary"
                    height="30"
                  )
                    template(v-slot:default="{ value }")
                      strong.white--text {{ Math.ceil(value) }}%

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FIcon from '../fincare-components/FIcon.vue'

export default {
  name: 'ExpensesDetails',
  components: {
    FIcon
  },
  props: {
    items: {
      type: Array || Object,
      default: null
    }
  },
  data () {
    return {
      selectedIndex: 1
    }
  },
  computed: {
    ...mapGetters({
      widthX: 'screen/getWidthClass',
      category: 'expenses/getCurrentCategory'
    }),
    categoryImg () {
      return require(`../../assets/finance/${this.category.img}.png`)
    }
  },
  methods: {
    ...mapActions({
    })
  }
}
</script>

<style scoped>
foreignObject {
  width: 380px !important;
}

:deep(.v-progress-linearr) {
  width: 300px !important;
}
</style>
