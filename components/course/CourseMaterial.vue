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
                v-img(v-if="item.img" :src="img(item.img)" :style="getImgWidth")
                p.pt-5.mb-0.font-weight-bold.subtitle-1.secondary--text.text-justify {{ $strLimit(item.challenge, 300) }}
                p.pt-2.mb-0.font-weight-regular.subtitle-3.secondary--text.text-justify {{ $strLimit(item.content, 300) }}
                p.pt-5.mb-0.font-weight-regular.subtitle-3.secondary--text.text-justify {{ item.information1 }}
                p.pt-5.mb-0.font-weight-regular.subtitle-3.secondary--text.text-justify {{ item.information2 }}
                p.pt-5.mb-0.font-weight-regular.subtitle-3.secondary--text.text-justify {{ item.information3 }}
                p.pt-5.mb-0.font-weight-regular.subtitle-3.secondary--text.text-justify {{ item.information4 }}
          v-card-actions.px-4.pt-0
  //- v-card.v-card.rounded-xl.d-flex.flex-column.justify-start(
  //-         @click=""
  //-         :min-height="100"
  //-         outlined
  //-       )
  //-         .px-4.pt-0.pb-1.mb-auto
  //-           v-row
  //-             v-col
  //-               p.pt-2.mb-0.font-weight-bold.subtitle-2.secondary--text.text-justify {{ $strLimit("Terms and condition: ", 300) }}
  //-               p.pt-2.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit("1. Fincare reserves right to change/cancel terms and conditions of this challenge at any time.", 300) }}
  //-               p.pt-2.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit("2. You may enter multiple challenges at a time.", 300) }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CourseMaterial',
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
          img: 'coursepic',
          challenge: 'Setting financial goals',
          content: 'Setting financial goals is an important step in the financial planning process. Here are a few steps that can be followed when setting financial goals:',
          information1: '1.Identify what you want to achieve: Start by thinking about what you want to achieve financially. This could include buying a house, paying off debt, saving for retirement, or starting a business.',
          information2: '2.Set short-term and long-term goals: Set both short-term and long-term goals. Short-term goals should be achievable within a year, while long-term goals may take several years to achieve.',
          information3: '3.Prioritize your goals: Prioritize your goals based on their importance to you. This will help you to focus on the most important goals first.',
          information4: '4.Stay motivated: Stay motivated by reminding yourself of the reasons why you set these goals, and celebrate small wins along the way.'
        }
        // {
        //   id: 2,
        //   title: '(50 points)',
        //   img: 'fastfood',
        //   challenge: 'Take a Challenge',
        //   content: 'Reduce your fast food expenses by 30%'

        // },
        // {
        //   id: 3,
        //   title: '(100 points)',
        //   img: 'game',
        //   challenge: 'Take a Challenge',
        //   content: 'Reduce your entertainment expenses by 40%'
        // }

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
