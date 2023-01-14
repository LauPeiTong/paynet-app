<template lang="pug">
.forum-post.px-4
  v-row.align-center.py-2
    eva-icon.pt-2.px-2(name="options-2-outline" :fill="this.$vuetify.theme.themes.light.brown")
    p.subtitle-1.font-weight-medium.pt-4.brown--text(v-if="title === 'Post'") Latest Post
    p.subtitle-1.font-weight-medium.pt-4.brown--text(v-else) Popular Post
    eva-icon.pt-2.px-2(name="arrow-ios-downward-outline" :fill="this.$vuetify.theme.themes.light.brown")
  v-item-group.pt-4.pb-8
    template(v-for='item in posts')
      v-row.d-flex.flex-column.px-4.pb-4.justify-center.mb-4
        v-card.rounded-xl.d-flex.flex-column.justify-start(
          @click=""
          :min-height="300"
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
            v-row
              v-col
                p.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit(item.content, 300) }}
                v-img(v-if="item.img" :src="img(item.img)" :style="getImgWidth")
          v-card-actions.px-4.pt-4
            v-row
              v-col.d-flex.flex-row
                eva-icon(name="arrow-up" :fill="$vuetify.theme.themes.light.primary"  width='24' height='24')
                p.mr-auto.primary--text 414
                eva-icon(name="arrow-down" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')
              v-col.d-flex.flex-row
                eva-icon.pr-2(name="message-circle-outline" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')
                p Comment
              v-col.d-flex.flex-row
                eva-icon.pr-2(name="navigation-2-outline" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')
                p Share

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ForumPost',
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
          title: 'Financial Future',
          content: 'Take control of your financial future by setting financial goals, creating a budget, saving a portion of your income, and investing in a diverse portfolio of assets. By planning and being consistent, you can secure a financially stable future.',
          user: 'Emma',
          time: '5 mins',
          group: 'Money Protector'
        },
        {
          id: 2,
          title: 'Webinar: Moving The Financial Needle',
          img: 'webinar',
          user: 'Money Savior',
          time: '9 mins',
          group: 'Save Money Group'
        },
        {
          id: 3,
          title: 'What is Financial Literacy?',
          content: 'Financial literacy is the knowledge and skills needed to make informed and effective decisions regarding the use and management of money, including budgeting, saving, investing, and credit management. It is important because it empowers individuals to take control of their financial lives, make informed decisions about their money, and achieve their financial goals. Understanding and practicing the key concepts of financial literacy can lead to financial stability and security.',
          user: 'Anna',
          time: '15 mins',
          group: 'Wealth Manager'
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
