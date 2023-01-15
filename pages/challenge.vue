<template lang="pug">
.fill-height.challenge-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Challenge'" :icon="'more-vertical'")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    card-challenge
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import CardChallenge from '~/components/goal/CardChallenge.vue'

export default {
  name: 'ChallengePage',
  components: {
    UpperTitle,
    CardChallenge
  },
  layout: 'default',
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
