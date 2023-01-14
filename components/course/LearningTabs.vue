<template lang="pug">
.learning-tabs
  v-tabs.scroll-x(
    background-color="white"
    :color="$vuetify.theme.themes.light.primary"
    :style="scrollSize"
    grow
  )
    v-tab(v-for="item in tabs" :key="item.name" @click="emitClick(item.name)") {{item.name}}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VueHorizontalList from 'vue-horizontal-list'

export default {
  name: 'LearningTabs',
  components: {
    VueHorizontalList
  },
  props: {
  },
  data () {
    return {
      tabs: [
        { id: 0, name: 'Course' },
        { id: 1, name: 'Media' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      scrollSize: 'screen/getScrollXClass'
    })
  },
  methods: {
    ...mapActions({
    }),
    emitClick (name) {
      this.$emit('click', name)
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.scroll-x) {
  overflow-x: auto !important;
  overflow-y: hidden;
}

:deep(.v-slide-group__prev) {
  min-width: 0px !important;
  flex: 0px;
}

.v-tab {
  text-transform: none !important;
}
</style>
