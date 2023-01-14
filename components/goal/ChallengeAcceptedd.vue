<template lang="pug">
.forum-post.px-4
  v-row.align-center.py-2.pt-3.mb-2.justify-center
    v-card.rounded-lg.d-flex.flex-column.justify-center(
      @click=""
      :min-height="100"
      :min-width="250"
      outlined
    )
      .px-4.pt-3.mb-auto
        v-row
          eva-icon.py-5(name="gift-outline" :fill="$vuetify.theme.themes.light.tertiary"  width='50' height='50')
          v-col
            p.pt-0.mb-0.font-weight-regular.subtitle-1.secondary--text.text-justify {{ $strLimit("Total RHB Points: ", 300) }}
            p.pt-0.mb-0.font-weight-bold.text-h4.primary--text.text-justify {{ $strLimit("10000", 300) }}
  v-item-group.pt-5.pb-8
    template(v-for='item in posts')
      v-row.d-flex.flex-column.px-4.pb-4.justify-center.mb-4
        v-card.rounded-xl.d-flex.flex-column.justify-start(
          @click="goToChallengeDetail(item.id)"
          :min-height="300"
          outlined
        )
          .px-4.pt-4.mb-auto
            v-row
              v-col.pt-4(:cols="2")
                //- v-avatar(size="36")
                //-   img(:src="avatar(item.id)")
              v-col.pl-0(:cols="8")
                //- p.mb-negative.font-weight-regular.subtitle-1.secondary--text {{ item.group }}
                //- p.mb-0.font-weight-regular.subtitle-2.secondary--text {{ item.user }} . {{ item.time }}
              v-col.pr-0.pt-4.text-right(:cols="2")
                //- eva-icon(name="more-vertical-outline" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')

            v-row
              v-col
                v-img(v-if="item.img" :src="img(item.img)" :style="getImgWidth")
                p.pt-5.mb-0.font-weight-bold.subtitle-1.secondary--text.text-justify {{ $strLimit(item.challenge, 300) }}
                p.pt-2.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit(item.content, 300) }}
                p.pt-3.mb-0.font-weight-regular.subtitle-4.primary--text.text-justify {{ $strLimit(item.label, 300) }}
          v-card-actions.px-4.pt-4
            v-row
              //- v-col.d-flex.flex-row
              //-   eva-icon(name="arrow-up" :fill="$vuetify.theme.themes.light.primary"  width='24' height='24')
              //-   p.mr-auto.primary--text 414
              //-   eva-icon(name="arrow-down" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')
              //- v-col.d-flex.flex-row
              //-   eva-icon.pr-2(name="message-circle-outline" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')
              //-   p Comment
              //- v-col.d-flex.flex-row
              //-   eva-icon.pr-2(name="navigation-2-outline" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')
              //-   p Share

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
          title: '(80 points)',
          img: 'shopping',
          challenge: 'Take a Challenge',
          content: 'Reduce your Online Shopping expense by 30%',
          label: 'Accepted'

        },
        {
          id: 2,
          title: '(50 points)',
          img: 'fastfood',
          challenge: 'Take a Challenge',
          content: 'Reduce your fast food expenses by 30%',
          label: 'Accept Now'

        },
        {
          id: 3,
          title: '(100 points)',
          img: 'game',
          challenge: 'Take a Challenge',
          content: 'Reduce your entertainment expenses by 40%',
          label: 'Accept Now'
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
