<template lang="pug">
.fill-height.goal-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Challenge'" :icon="'more-vertical'")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    ChallengeAcceptedVue
    v-row.px-6.pt-2
      f-button(:label = "'Accept Challenge'")
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import ChallengeAcceptedVue from '~/components/goal/ChallengeAcceptedd.vue'

export default {
  name: 'GoalPage',
  components: {
    UpperTitle,
    ChallengeAcceptedVue
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
