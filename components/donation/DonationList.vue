<template lang="pug">
.card-challenge.px-4
  v-item-group.pt-4.pb-8
    template(v-for='item in posts')
      v-row.d-flex.flex-column.px-4.pb-4.justify-center
        v-card.rounded-xl.d-flex.flex-column.justify-start(
          @click="goToDonationDetail(item.id)"
          :min-height="300"
          outlined
        )
          .px-4.pt-4.mb-auto
            v-row
              v-col
                v-img.rounded-xl(v-if="item.img" :src="img(item.img)" :style="getImgWidth")
                p.pt-2.mb-0.font-weight-bold.subtitle-1.secondary--text.text-justify {{ $strLimit(item.donation, 300) }}
                p.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit(item.content, 300) }}
                p.pt-5.pb-2.mb-0.font-weight-regular.subtitle-4.primary--text.text-justify {{ $strLimit("More Details", 300) }}
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
          img: 'forest',
          donation: 'Malaysia\'s Green Heritage',
          content: 'Protect Malaysia\'s natural heritage and promote sustainability by donating to preserve diverse ecosystems, rainforests, coastlines, and wildlife.'

        },
        {
          id: 2,
          title: '(50 points)',
          img: 'river',
          donation: 'Rivers of Life',
          content: 'Donate to clean up rivers, promote sustainable river management, and raise awareness for water conservation'

        },
        {
          id: 3,
          title: '(100 points)',
          img: 'education',
          donation: 'Empowering Environmental Education',
          content: 'Empower the next generation of Malaysians to create a greener future through donations supporting sustainability education and eco-friendly initiatives.'
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
    },
    goToDonationDetail (id) {
      if (id === 1) {
        this.$router.push('/donationdetail1')
      } else if (id === 2) {
        this.$router.push('/donationdetail2')
      } else if (id === 3) {
        this.$router.push('/donationdetail3')
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
