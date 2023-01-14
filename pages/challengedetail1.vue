<template lang="pug">
.fill-height.goal-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Fast Food Challenge'" :icon="'more-vertical'" @goBack="goBackToPreviousPage" :back="true")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    ChallengeDetail1()
    f-button(:label = "'Accept Challenge'")
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import ChallengeDetail1 from '~/components/goal/ChallengeDetail1.vue'
import FButton from '~/components/fincare-components/FButton.vue'

export default {
  name: 'ChallengePage1',
  components: {
    UpperTitle,
    ChallengeDetail1,
    FButton
  },
  layout: 'welcome',
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
