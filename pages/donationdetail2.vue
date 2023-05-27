<template lang="pug">
  .fill-height.goal-page.pa-0.ma-0
    v-row.pa-0.ma-0.upper-row
      upper-title.ma-0( :icon="'more-vertical'" @goBack="goBackToPreviousPage" :back="true")
    .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
      DonationDetail2()
      v-row.px-6.pt-2.bottom-nav
        f-button(:label = "'Make Donation'" @click="Accepted()" class="fixed-button" )
  </template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import FButton from '~/components/fincare-components/FButton.vue'
import DonationDetail2 from '~/components/donation/DonationDetail2.vue'

export default {
  name: 'DonationPage',
  components: {
    UpperTitle,
    FButton,
    DonationDetail2
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
    },
    Accepted () {
      this.$router.push('/donation')
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
.bottom-nav {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 100;
}
