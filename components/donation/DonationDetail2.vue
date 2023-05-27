<template lang="pug">
  .forum-post.px-4.pb-5
    v-item-group.pt-3.pb-0
      template(v-for='item in posts')
        v-row.d-flex.flex-column.px-4.pb-4.justify-center.mb-4
          v-card.rounded-xl.d-flex.flex-column.justify-start(
            @click=""
            :min-height="300"
            outlined
          )
            .px-4.pt-0.mb-auto
              v-row
                v-col.pt-4(:cols="2")
                v-col.pl-0(:cols="8")
                v-col.pr-0.pt-4.text-right(:cols="2")
              v-row
                v-col
                  v-img.rounded-xl(v-if="item.img" :src="img(item.img)" :style="getImgWidth")
                  p.pt-5.mb-0.font-weight-bold.subtitle-1.secondary--text.text-justify {{ $strLimit(item.donation, 300) }}
                  v-row
                    v-col
                      .d-flex
                        eva-icon(:name="'globe-2'"  :fill="$vuetify.theme.themes.light.green")
                        p.pt-1.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ 'Location' }}
                      p.pt-0.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit(item.location, 300) }}
                    v-col
                      .d-flex
                        eva-icon(:name="'checkmark-circle'"  :fill="$vuetify.theme.themes.light.green")
                        p.pt-1.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ 'Verified by' }}
                      p.pt-0.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit(item.verified, 300) }}
                  //p.pt-2.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit(item.content, 300) }}
                  p.pt-5.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit(item.information, 500) }}
            v-card-actions.px-4.pt-0
    v-card.v-card.rounded-xl.d-flex.flex-column.justify-start(
            @click=""
            :min-height="100"
            outlined
          )
            .px-4.pt-0.pb-1.mb-auto
              v-row
                v-col
                  p.pt-2.mb-0.font-weight-bold.subtitle-3.secondary--text.text-justify {{ $strLimit("Benefits", 300) }}
                  p.pt-2.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit("-Restoration and protection of precious waterways and their ecosystems.", 300) }}
                  p.pt-2.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit("-Ensuring clean water sources and thriving habitats for communities and wildlife.", 300) }}
  </template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DonationDetail2',
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
          title: '(80 points)',
          img: 'river',
          location: 'Selangor',
          verified: 'Malaysian Nature Society',
          donation: 'Rivers of Life',
          information: 'Contribute to the "Rivers of Life" project and help us restore and protect Malaysia\'s precious waterways. Your donations will support efforts to clean up rivers, promote sustainable river management practices, and raise awareness about the importance of water conservation. Together, we can ensure that Malaysia\'s rivers thrive as vital ecosystems and sources of clean water for communities.'

        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      widthX: 'screen/getWidthClass'
    }),
    getImgWidth () {
      return { width: `${window.innerWidth - 80}px`, height: `${window.innerHeight - 500}px` }
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
