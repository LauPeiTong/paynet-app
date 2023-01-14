<template lang="pug">
//- hard code of course description
.course-desciption.pt-2
  .course-overview(v-if="!isEnrolled")
    f-card.d-flex.flex-column(
      :style="widthX"
      :label="'Why you should take this course?'"
      :disabled="true"
    )
      template(v-slot:content)
        p.pt-2.text-justify Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ipsum phasellus diam eu mi, elementum. Pellentesque dapibus nisi auctor vitae ut congue facilisis metus. Praesent libero facilisi eleifend justo, tortor suscipit. Fringilla pharetra nibh tortor nunc nisl dictum suscipit convallis donec. Penatibus ut lacus nullam orci ut sit.

  .course-learning-outcome(v-if="!isEnrolled")
    f-card.mt-4.d-flex.flex-column(
      :style="widthX"
      :label="'What will you learn?'"
      :disabled="true"
    )
      template(v-slot:content)
        p.pt-2.text-justify Throughout the series of 8 lessons, you will learn about cool things like:
        ul.pt-2
          li.pb-2 Learn what to do before you have an interview scheduled
          li.pb-2 Learn how to answer the 15 most important interview questions
          li.pb-2 Learn how to follow-up after an interview
          li.pb-2 Dress to impress

  .course-lessons(v-if="isEnrolled")
    f-card.d-flex.flex-column(
      :style="widthX"
      :label="'Lessons'"
      :disabled="true"
    )
      template(v-slot:content)
        v-timeline.py-0.mt-2(
          align-top
          :dense="$vuetify.breakpoint.smAndDown"
        )
          v-timeline-item(
            v-for="item in lessons"
            :key="item.id"
            :color="lessonColor(item.id)"
            fill-dot
          )
            v-card(:color="lessonColor(item.id)" dark)
              v-card-title.pb-0.text-h6 Lesson {{ item.id }}
              v-card-text.pb-0
                p {{ item.name }}
              v-card-actions.mx-2.pb-3
                v-btn.rounded-xl.mx-0.lesson-button(
                  width="120"
                  :outlined="item.status !== 'Completed'"
                  :color="item.status === 'Completed' ? lessonColor(item.id) : 'white'"
                  :disabled="!item.status"
                  @click="goToCourseMaterialPage ()"
                ) {{ item.status ? item.status : 'Start'}}

  .course-additional(v-if="isEnrolled")
    f-card.mt-4.d-flex.flex-column(
      :style="widthX"
      :label="'Additional Resources'"
      :disabled="true"
    )
      template(v-slot:content)
        p.pt-2.text-justify Here are a few extra resources to help you learn more effectively:
        ul.pt-2
          li.pb-2
            |
            a(href="https://www.rhbgroup.com/overview/insurance/index.html") Insurance Plan RHB
          li.pb-2
            |
            a(href="https://www.rhbgroup.com/personal/account-finder/index.html?p=term-deposit&t=conventional") Fixed Deposit RHB

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FCard from '../fincare-components/FCard.vue'

export default {
  name: 'CourseDescription',
  components: {
    FCard
  },
  props: {
    job: {
      type: Object,
      default: null
    },
    company: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      lessons: [
        {
          id: 1,
          name: 'Understanding income and expenses',
          status: 'Completed'
        },
        {
          id: 2,
          name: 'Saving money',
          status: 'Completed'
        },
        {
          id: 3,
          name: 'Setting financial goals',
          status: 'Start'
        },
        {
          id: 4,
          name: 'Tracking progress',
          status: null
        },
        {
          id: 5,
          name: 'Prioritizing expenses',
          status: null
        },
        {
          id: 6,
          name: 'Making smart financial decisions',
          status: null
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      isEnrolled: 'course/isEnrolled',
      widthX: 'screen/getWidthClass'
    })
  },
  methods: {
    ...mapActions({
    }),
    lessonColor (id) {
      if (id % 3 === 1) {
        return '#404348'
      } else if (id % 3 === 2) {
        return '#918679'
      } else {
        return '#312553'
      }
    },
    goToCourseMaterialPage () {
      this.$router.push('/coursematerial')
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.bottom-border) {
  border-width: 0 0 1px 0;
  border-color: rgba(193, 193, 193, 0.25);
  border-style: solid;
  position: relative;
}

.lesson-button {
  box-shadow: none;
}
</style>
