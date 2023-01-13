<template lang="pug">
.fill-height.goal-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Video Game Challenge'" :icon="'more-vertical'" @goBack="goBackToPreviousPage" :back="true")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    ChallengeDetail2()
    f-button(:label = "'Accept Challenge'" :width = "30")
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import ChallengeDetail2 from '~/components/goal/ChallengeDetail2.vue'
import FButton from '~/components/fincare-components/FButton.vue'

export default {
  name: 'ChallengePage',
  components: {
    UpperTitle,
    ChallengeDetail2,
    FButton
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
