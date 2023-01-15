<template lang="pug">
.fill-height.goal-page.pa-0.ma-0
      v-row.pa-0.ma-0.upper-row
        upper-title.ma-0(:title="'Shopping Online Challenge'" :icon="'more-vertical'" @goBack="goBackToPreviousPage" :back="true")
      .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
        ChallengeDetail()
        f-button(:label = "'Accept Challenge'" @click="Accepted()")
        //- v-row.justify-center.pt-2
        //-   v-btn.primary.align-center.justify-space-around( :style="{ width: '200px'}"
        //-   )
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import CourseDetail from '~/components/forum/CourseDetail.vue'
import FButton from '~/components/fincare-components/FButton.vue'

export default {
  name: 'ChallengePage',
  components: {
    UpperTitle,
    CourseDetail,
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
