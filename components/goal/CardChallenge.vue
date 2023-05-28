<template lang="pug">
.card-challenge.px-4
  v-card.rounded-xl.lightBlue(outlined)
    v-img.mx-auto.mt-2(:src="tree" max-width="280")
    p.text-h4.font-weight-bold.primary--text.text-center LEVEL 14
  .d-flex.align-center.justify-center.mt-4
    p.font-weight-medium.text-h6.mb-0.mr-2 Completed Challenges: 6 / 56
    eva-icon(name="checkmark-circle" :fill="$vuetify.theme.themes.light.green")
  v-progress-linear.rounded-xl(
    :value="67.5"
    :color="$vuetify.theme.themes.light.green"
    height="30"
  )
    template(v-slot:default="{ value }")
      strong.white--text {{ Math.ceil(value) }}% to Level 15
  //- v-card.rounded-lg.mt-4(outlined)
  //-   v-list-item.pt-2(three-line)
  //-     v-list-item-avatar(size="60" tile)
  //-       v-img(:src="coins")
  //-     v-list-item-content
  //-       v-list-item-title.secondary--text.font-weight-medium.text-h6.mt-2 Total Eco Points:
  //-       v-list-item-subtitle.font-weight-bold.text-h4.primary--text 1456
  //-   v-divider.mx-4
  //-   v-list-item
  //-     v-list-item-title.font-weight-medium.text-h6
  //-       |
  //-       a.orange--text(@click="goToVoucherPage()") Redeem your vouchers
  //-     eva-icon.mt-2(name="gift-outline" :fill="$vuetify.theme.themes.light.orange")
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
                p.pt-5.pb-2.mb-0.font-weight-regular.subtitle-4.primary--text.text-justify {{ $strLimit(item.label, 300) }}
                p.pt-6.pb-2.mb-0.font-weight-regular.subtitle-4.primary--text.text-justify {{ $strLimit(item.accept, 300) }}
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
      coins: require('../../assets/img/coins.png'),
      tree: require('../../assets/img/tree.png'),
      posts: [
        {
          id: 1,
          title: '(50 points)',
          img: 'donation',
          challenge: 'Dontion Challenge',
          content: 'Make a donation of RM 50 to Environmental NGO',
          accept: 'Completed'
        },
        {
          id: 2,
          title: '(30 points)',
          img: 'carbon',
          challenge: 'Carbon Footprint Challenge',
          content: 'Reduce monthly Carbon Footprint by 20%',
          accept: 'In Progress'
        },
        {
          id: 3,
          title: '(30 points)',
          img: 'receipt',
          challenge: 'No Plastic Bag Challenge',
          content: 'Do not request for plastic bag when purchasing goods for one month',
          accept: 'In Progress'
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
        this.$router.push('/challengedetail3')
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
