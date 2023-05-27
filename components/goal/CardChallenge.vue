<template lang="pug">
.card-challenge.px-4
  v-card.rounded-lg(outlined)
    v-list-item.pt-2(three-line)
      v-list-item-avatar(size="60" tile)
        v-img(:src="challenge")
      v-list-item-content
        v-list-item-title.secondary--text.font-weight-medium.text-h6.mt-2 Total Eco Points:
        v-list-item-subtitle.font-weight-bold.text-h4.primary--text 1456
    v-divider.mx-4
    v-list-item
      v-list-item-title.darkGrey--text.font-weight-medium.text-h6 Your level: 14
      eva-icon.mt-2(name="flag-outline" :fill="$vuetify.theme.themes.light.darkGrey")
    v-divider.mx-4
    v-list-item
      v-list-item-title.font-weight-medium.text-h6
        |
        a.success--text(@click="goToVoucherPage()") Redeem your vouchers
      eva-icon.mt-2(name="gift-outline" :fill="$vuetify.theme.themes.light.success")
  v-row.pa-0.ma-0
    v-col.pa-0.ma-0
      p.text-h6.font-weight-bold.pt-6.mb-0.secondary--text Challenges
  v-item-group.pt-4.pb-8
    template(v-for='item in posts')
      v-row.d-flex.flex-column.px-4.pb-4.justify-center
        v-card.rounded-xl.d-flex.flex-column.justify-start(
          @click="goToChallengeDetail(item.id)"
          :min-height="300"
          outlined
        )
          .px-4.pt-4.mb-auto
            v-row
              v-col
                v-img.rounded-xl(v-if="item.img" :src="img(item.img)" :style="getImgWidth")
                p.pt-2.mb-0.font-weight-bold.subtitle-1.secondary--text.text-justify {{ $strLimit(item.challenge, 300) }}
                p.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit(item.content, 300) }}
                p.pt-5.pb-2.mb-0.font-weight-regular.subtitle-4.primary--text.text-justify {{ $strLimit("Accept Now", 300) }}
  .pb-16
  .pb-4
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
      challenge: require('../../assets/img/challenge.png'),
      posts: [
        {
          id: 1,
          title: '(80 points)',
          img: 'ironcup',
          challenge: 'Take a Challenge',
          content: 'Use iron cup to buy drinks'

        },
        {
          id: 2,
          title: '(50 points)',
          img: 'recyclebag',
          challenge: 'Take a Challenge',
          content: 'Use recycle bag while takeaway'

        },
        {
          id: 3,
          title: '(60 points)',
          img: 'plasticcup',
          challenge: 'Take a Challenge',
          content: 'Do not use plastic cup while having hot drinks'
        },
        {
          id: 4,
          title: '(30 points)',
          img: 'receipt',
          challenge: 'Daily Challenge',
          content: 'Do not request for receipt and plastic bag after purchased'
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
    },
    goToVoucherPage () {
      this.$router.push('/voucher')
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
