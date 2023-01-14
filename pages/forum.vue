<template lang="pug">
.fill-height.forum-page.pa-0.ma-0.full-width
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Forum'" :icon="'more-vertical'")
    f-search-bar.ma-0(@change="searchBy")
  .scroll.ma-0.justify-top.align-center(:style="scrollSize")
    story-list.pt-4
    forum-tabs(@click="getTab")
    forum-post(v-if="tab === 'Post' || tab === 'Popular'" :title="tab")
    forum-live(v-if="tab === 'Live'" :title="tab")
    forum-course(v-if="tab === 'Course'" :title="tab")
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import FSearchBar from '../components/fincare-components/FSearchBar.vue'
import StoryList from '../components/forum/StoryList.vue'
import ForumTabs from '../components/forum/ForumTabs.vue'
import ForumPost from '../components/forum/ForumPost.vue'
import ForumLive from '../components/forum/ForumLive.vue'
import ForumCourse from '../components/forum/ForumCourse.vue'

export default {
  name: 'ForumPage',
  components: {
    UpperTitle,
    FSearchBar,
    StoryList,
    ForumTabs,
    ForumPost,
    ForumLive,
    ForumCourse
  },
  layout: 'default',
  data () {
    return {
      search: null,
      tab: 'Post'
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
