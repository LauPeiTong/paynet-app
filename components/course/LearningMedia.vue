<template lang="pug">
.learning-media.px-4
    v-row.align-center.py-2
      eva-icon.pt-2.px-2(name="options-2-outline" :fill="this.$vuetify.theme.themes.light.brown")
      p.subtitle-1.font-weight-medium.pt-4.brown--text(v-if="title === 'Post'") Latest Post
      p.subtitle-1.font-weight-medium.pt-4.brown--text(v-else) Popular Post
      eva-icon.pt-2.px-2(name="arrow-ios-downward-outline" :fill="this.$vuetify.theme.themes.light.brown")
    v-item-group.pt-4.pb-8
      template(v-for='item in posts')
        v-row.d-flex.flex-column.px-4.pb-4.justify-center.mb-4
          v-card.rounded-xl.d-flex.flex-column.justify-center(
            @click=""
            :min-height="600"
            outlined
          )
            .px-4.pt-4.mb-auto
              v-row
                v-col.pt-4(:cols="2")
                  v-avatar(size="36")
                    img(:src="avatar(item.id)")
                v-col.pl-0(:cols="8")
                  p.mb-negative.font-weight-regular.subtitle-1.secondary--text {{ item.group }}
                  p.mb-0.font-weight-regular.subtitle-2.secondary--text {{ item.user }} . {{ item.time }}
                v-col.pr-0.pt-4.text-right(:cols="2")
                  eva-icon(name="more-vertical-outline" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')
              p.mb-0.pt-2.caption.font-weight-medium.text-h6.secondary--text {{ item.title }}

            video(:src="videoSrc(item.vid)"  controls ref="video" width="350")
            v-card-actions.px-4.pt-4
              v-row
                v-col.d-flex.flex-row
                  eva-icon(name="arrow-up" :fill="$vuetify.theme.themes.light.primary"  width='24' height='24')
                  p.mr-auto.primary--text 414
                  eva-icon(name="arrow-down" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')
                v-col.d-flex.flex-row
                  //- eva-icon.pr-2(name="message-circle-outline" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')
                  //- p Comment
                v-col.d-flex.flex-row
                  eva-icon.pr-2(name="navigation-2-outline" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')
                  p Share

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LearningMedia',
  components: {
  },
  props: {
    title: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      posts: [
        {
          id: 1,
          title: 'Rich dad\'s Author Advise',
          user: 'Robert',
          time: '5 mins',
          group: 'Money Protector',
          vid: 1
        },
        {
          id: 2,
          title: 'Financial Tips',
          user: 'Money Savior',
          time: '9 mins',
          group: 'Save Money Group',
          vid: 2
        },
        {
          id: 3,
          title: 'Think Before You Invest',
          time: '15 mins',
          group: 'Wealth Manager',
          vid: 3
        }

      ]
    }
  },
  computed: {
    ...mapGetters({
      widthX: 'screen/getWidthClass'
    }),
    getImgWidth () {
      return { width: `${window.innerWidth - 80}px` }
    }
  },
  methods: {
    ...mapActions({
    }),
    avatar (id) {
      return require(`../../assets/avatar/avatar${id}.jpg`)
    },
    img (name) {
      return require(`../../assets/img/${name}.jpg`)
    },
    videoSrc (vid) {
      return require(`../../assets/video/video${vid}.mp4`)
    }
  }
}
</script>

<style lang="scss" scoped>
.min-350-width {
  min-width: 353px !important;
}

.mb-negative {
  margin-bottom: -7px;
}

</style>
