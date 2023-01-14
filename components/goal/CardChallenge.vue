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
              v-col
                v-img(v-if="item.img" :src="img(item.img)" :style="getImgWidth")
                p.pt-5.mb-0.font-weight-bold.subtitle-1.secondary--text.text-justify {{ $strLimit(item.challenge, 300) }}
                p.pt-2.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit(item.content, 300) }}
                p.pt-3.mb-0.font-weight-regular.subtitle-4.primary--text.text-justify {{ $strLimit("Accept Now", 300) }}
          v-card-actions.px-4.pt-4
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
          content: 'Reduce your Online Shopping expense by 30%'

        },
        {
          id: 2,
          title: '(50 points)',
          img: 'fastfood',
          challenge: 'Take a Challenge',
          content: 'Reduce your fast food expenses by 30%'

        },
        {
          id: 3,
          title: '(100 points)',
          img: 'game',
          challenge: 'Take a Challenge',
          content: 'Reduce your entertainment expenses by 40%'
        },
        {
          id: 4,
          title: '(10 points)',
          img: 'investment',
          challenge: 'Daily Challenge',
          content: 'Investment Pop Quiz'
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
      } else if (id === 3) {
        this.$router.push('/challengedetail2')
      } else {
        this.$router.push('/quiz')
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
