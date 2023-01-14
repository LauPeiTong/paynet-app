<template lang="pug">
.finance-list
  p.text-h6.font-weight-bold.pt-4(v-if="title") {{ title }}
  v-item-group.pt-2.pb-8
    template(v-for='item in items')
      v-row.d-flex.flex-column.px-4.pb-4.justify-center
        f-card.d-flex.flex-column(
          @click="goToFinantialDetailsPage(item)"
          :height="150"
          :style="widthX"
          :label="item.name"
          :label4="item.description"
          :h5Title="true"
          :labelColorClass="item.color + '--text'"
        )
            template(v-slot:action)
              v-row.mt-0
                v-col.py-0.pl-2
                  v-img.mb-2.ml-1(:src="listImg(item.img)" width="150")
                v-col.py-0.justify-end.text-right.pt-3
                  v-row.justify-end.pt-3
                    p.pt-6.pr-2.subtitle-1.font-weight-medium(:class="item.color + '--text'") View it
                    eva-icon.mt-5.mr-3(name="arrow-circle-right" :fill="buttonColor(item.color)" height="32" width="32")

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FCard from '../fincare-components/FCard.vue'

export default {
  name: 'FinanceList',
  components: {
    FCard
  },
  props: {
    title: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      items: [
        { name: 'Financial Tips', description: 'Tips on managing your money.', color: 'primary', img: 'Tips' },
        { name: 'Financial Review', description: 'Yearly reviews of your cash inflows and outflows.', color: 'danger', img: 'Review' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      widthX: 'screen/getWidthClass',
      companies: 'job/getCompanies'
    })
  },
  methods: {
    ...mapActions({
    }),
    listImg (img) {
      if (img) {
        return require(`../../assets/finance/${img}.png`)
      }
    },
    buttonColor (color) {
      if (color === 'primary') {
        return '#0083BB'
      } else if (color === 'tertiary') {
        return '#035172'
      } else {
        return '#C82F2F'
      }
    },
    goToFinantialDetailsPage (item) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
