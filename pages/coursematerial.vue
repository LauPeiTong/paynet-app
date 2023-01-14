<template lang="pug">
.fill-height.goal-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Lesson 3'" :icon="'more-vertical'" @goBack="goBackToPreviousPage" :back="true")
  .scroll.scrollbar-hide.ma-0.justify-top.align-center(:style="scrollSize")
    CourseMaterial
    bottom-button(:label="'Start the quiz'" @click="getQuiz()")
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import CourseMaterial from '~/components/course/CourseMaterial.vue'
import FButton from '~/components/fincare-components/FButton.vue'
import BottomButton from '~/components/BottomButton.vue'

export default {
  name: 'ChallengePage',
  components: {
    UpperTitle,
    CourseMaterial,
    FButton,
    BottomButton
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
    },
    getQuiz () {
      this.$router.push('/quiz')
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
