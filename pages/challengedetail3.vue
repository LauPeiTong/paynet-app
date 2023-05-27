<template lang="pug">
.fill-height.goal-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Recycle Bag Challenge'" :icon="'more-vertical'" @goBack="goBackToPreviousPage" :back="true")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    ChallengeDetail3()
    v-row.px-6.pt-2
      f-button(:label = "'Accept Challenge'" @click="Accepted()")
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import ChallengeDetail3 from '~/components/goal/ChallengeDetail3.vue'
import FButton from '~/components/fincare-components/FButton.vue'

export default {
  name: 'ChallengePage3',
  components: {
    UpperTitle,
    ChallengeDetail3,
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
      this.$router.push('/challengeaccepted')
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
