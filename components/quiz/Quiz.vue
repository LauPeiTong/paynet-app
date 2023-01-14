<template lang="pug">
.forum-post.px-4
  v-row.align-center.py-2.pt-3.mb-2.justify-center
    v-row.justify-center.mb-0
      eva-icon.py-5(name="checkmark-circle-2" :fill="$vuetify.theme.themes.light.tertiary"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
      eva-icon.py-5(name="checkmark-circle-2-outline" :fill="$vuetify.theme.themes.light.darkGrey"  width='20' height='20')
    v-card.rounded-lg.d-flex.flex-column.justify-center(
      @click=""
      :min-height="90"
      :min-width="200"
      outlined
    )
      .px-4.pt-3.mb-auto
        v-row
          v-col
            p.pt-0.mb-0.font-weight-bold.text-h4.primary--text.text-center {{ $strLimit("00", 300) }}
            p.pt-0.mb-0.font-weight-bold.text-contrast.primary--text.text-center {{ $strLimit("hour", 300) }}
          v-col
            p.pt-0.mb-0.font-weight-bold.text-h4.primary--text.text-center {{ $strLimit(":", 300) }}
          v-col
            p.pt-0.mb-0.font-weight-bold.text-h4.primary--text.text-center {{ $strLimit("14", 300) }}
            p.pt-0.mb-0.font-weight-bold.text-contrast.primary--text.text-center {{ $strLimit("min", 300) }}
          v-col
            p.pt-0.mb-0.font-weight-bold.text-h4.primary--text.text-center {{ $strLimit(":", 300) }}
          v-col
            p.pt-0.mb-0.font-weight-bold.text-h4.primary--text.text-center {{ $strLimit("05", 300) }}
            p.pt-0.mb-0.font-weight-bold.text-contrast.primary--text.text-center {{ $strLimit("sec", 300) }}
  v-row.d-flex.flex-column.px-4.pb-4.justify-center.mb-0
    v-card.rounded-xl.d-flex.flex-column.tertiary.justify-start(
          @click=""
          :min-height="100"
          outlined
        )
          .px-4.pt-4.mb-auto
             v-row
              v-col
                 p.pt-0.mb-0.font-weight-bold.subtitle-1.white--text.text-justify {{ $strLimit("Question 1", 300) }}
                 p.pt-2.mb-0.font-weight-bold.subtitle-1.white--text.text-justify {{ $strLimit(" What does it mean to be diversified ?", 300) }}
  v-item-group.pt-5.pb-2
    template(v-for='item in posts')
      v-row.d-flex.flex-column.px-4.pb-4.justify-center.mb-2
        v-card.rounded-xl.d-flex.flex-column.justify-start(
              @click=""
              :min-height="70"
              outlined
            )
              .px-4.pt-4.mb-auto
                v-row
                  eva-icon.py-2(name="radio-button-off-outline" :fill="$vuetify.theme.themes.light.primary"  width='40' height='40')
                  v-col
                    p.pt-0.mb-0.font-weight-regular.text-caption.secondary--text.text-justify {{ $strLimit(item.answer, 300) }}
    v-row
      v-col.text-left
        eva-icon.py-5(name="arrow-circle-left" :fill="$vuetify.theme.themes.light.darkGrey"  width='50' height='50')
      v-col.text-right
        eva-icon.py-5(name="arrow-circle-right" :fill="$vuetify.theme.themes.light.tertiary"  width='50' height='50')
</template>

<script>
// import { off } from 'process'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CardChallenge',
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
          answer: 'Having as much money in bonds as you do in stocks.'
        },
        {
          id: 2,
          answer: 'Owning investments that react differently to market or economic events.'
        },
        {
          id: 3,
          answer: 'Owning at least 20 stocks in whatever industry you think will perform best.'
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
    goToChallengeDetail (id) {
      if (id === 1) {
        this.$router.push('/challengedetail')
      } else if (id === 2) {
        this.$router.push('/challengedetail1')
      } else {
        this.$router.push('/challengedetail2')
      }
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
