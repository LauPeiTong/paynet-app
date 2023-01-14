<template lang="pug">
.fill-height.forum-page.pa-0.ma-0.full-width
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Learning'" :icon="'more-vertical'")
  .scroll.ma-0.justify-top.align-center(:style="scrollSize")
    learning-tabs(@click="getTab")
    learning-course(v-if="tab === 'Course'" :title="tab")
    learning-media(v-if="tab === 'Media'" :title="tab")
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import FSearchBar from '../components/fincare-components/FSearchBar.vue'
import LearningTabs from '../components/course/LearningTabs.vue'
import LearningCourse from '../components/course/LearningCourse.vue'
import LearningMedia from '../components/course/LearningMedia.vue'

export default {
  name: 'ForumPage',
  components: {
    UpperTitle,
    FSearchBar,
    LearningTabs,
    LearningMedia,
    LearningCourse
  },
  layout: 'default',
  data () {
    return {
      search: null,
      tab: 'Course'
    }
  },
  computed: {
    ...mapGetters({
      scrollSize: 'screen/getScrollClass'
    })
  },
  methods: {
    getTab (name) {
      console.log(name)
      this.tab = name
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
