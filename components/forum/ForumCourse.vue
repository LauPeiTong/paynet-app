<template lang="pug">
.forum-course.px-4
      v-row.align-center.py-2.pt-3.mb-2.justify-center

      v-item-group.pt-5.pb-8
        template(v-for='item in posts')
          v-row.d-flex.flex-column.px-4.pb-4.justify-center.mb-4
            v-card.rounded-xl.d-flex.flex-column.justify-start(
              @click="goToCourseDetail(item.id)"
              :min-height="100"

            )
              .px-4.pt-4.mb-auto
                //- v-row
                //-   v-col.pt-4(:cols="2")
                //-     //- v-avatar(size="36")
                //-     //-   img(:src="avatar(item.id)")
                //-   v-col.pl-0(:cols="8")
                //-     //- p.mb-negative.font-weight-regular.subtitle-1.secondary--text {{ item.group }}
                //-     //- p.mb-0.font-weight-regular.subtitle-2.secondary--text {{ item.user }} . {{ item.time }}
                //-   v-col.pr-0.pt-4.text-right(:cols="2")
                //-     //- eva-icon(name="more-vertical-outline" :fill="$vuetify.theme.themes.light.brown"  width='24' height='24')

                v-row
                  v-col
                    v-img(v-if="item.img" :src="img(item.img)" :style="getImgWidth")
                    p.pt-5.mb-0.font-weight-bold.subtitle-1.secondary--text.text-justify {{ $strLimit(item.course, 300) }}
                    p.pt-2.mb-0.font-weight-regular.subtitle-2.secondary--text.text-justify {{ $strLimit(item.content, 300) }}
                    p.pt-3.mb-0.font-weight-regular.subtitle-4.primary--text.text-justify {{ $strLimit("Take the Course", 300) }}
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
  name: 'ForumCourse',
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
          img: 1,
          course: 'Budgeting & Expenses',
          content: 'Learn to budget your expenses effectively'

        },
        {
          id: 2,
          title: '(50 points)',
          img: 2,
          course: 'Introduction to Investment',
          content: 'Bring your inner invester to life and learn to invest smart.'

        },
        {
          id: 3,
          title: '(100 points)',
          img: 3,
          course: 'Income Tracking',
          content: 'Learn to track your income.'
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
      return require(`../../assets/img/course${name}.jpg`)
    },
    goToCourseDetail (id) {
      if (id === 1) {
        this.$router.push('/courseDetailPage')
      // } else if (id === 2) {
      //   this.$router.push('/CourseDetail')
      // } else {
      //   this.$router.push('/coursedetail2')
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
