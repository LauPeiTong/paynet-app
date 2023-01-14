<template lang="pug">
.learning-course
  continue-course.pt-10.pb-2
  course-category.px-4.pb-4
  current-courses.pb-4
  course-list.px-4.pb-4(:items="recommendedCourse" :title="'Recomended for you'")

</template>

<script>
// import { off } from 'process'
import { mapGetters, mapActions } from 'vuex'
import ContinueCourse from './ContinueCourse.vue'
import CourseCategory from './CourseCategory.vue'
import CurrentCourses from './CurrentCourses.vue'
import CourseList from './CourseList.vue'

export default {
  name: 'LearningCourse',
  components: {
    ContinueCourse,
    CourseCategory,
    CurrentCourses,
    CourseList
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
      widthX: 'screen/getWidthClass',
      recommendedCourse: 'course/getRecommendedCourses'

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
