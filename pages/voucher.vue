<template lang="pug">
.fill-height.expenses-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(
      :title="'Voucher'"
      :icon="'more-vertical'"
      :rightIconColor="$vuetify.theme.themes.light.secondary"
      @clicked=""
      @goBack="goBackToPreviousPage"
      :back="true")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    voucher-list
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import VoucherList from '../components/goal/VoucherList.vue'

export default {
  name: 'VoucherPage',
  components: {
    UpperTitle,
    VoucherList
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
