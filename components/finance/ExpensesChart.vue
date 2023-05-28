<template lang="pug">
.expenses-chart.px-3
  v-card.rounded-lg(outlined)
    v-list-item.pt-2(three-line)
      v-list-item-content.text-center
        v-row.d-flex.flex-row
          v-col.pb-0.text-right(align-self="end")
            f-icon(:icon-name="'arrow-ios-back-outline'" :icon-fill="$vuetify.theme.themes.light.primary" @click="selectPreviousMonth")
          v-col.pb-0
            v-list-item-title.secondary--text.font-weight-bold.text-h5.mt-2 {{ months[selectedIndex] }}
          v-col.pb-0.text-left.align-bottom(align-self="end")
            f-icon(:icon-name="'arrow-ios-forward-outline'" :icon-fill="$vuetify.theme.themes.light.primary" @click="selectNextMonth")
        v-list-item-subtitle.subtitle-1.darkGrey--text Monthly CO2 Emission
        ApexCharts.d-flex.justify-space-around(type="donut" :options="chartOptions" :series="series[this.selectedIndex]" width="320" height="320")
        v-list-item-title.secondary-text.text-h6.ml-2.mt-2.mb-2.text-center Ave monthly carbon footprint
        v-list-item-subtitle.text-h6.ml-3.primary--text.text-center  781 kg CO2
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FIcon from '../fincare-components/FIcon.vue'

export default {
  name: 'ExpensesChart',
  components: {
    FIcon
  },
  props: {
  },
  data () {
    return {
      selectedIndex: 1,
      months: ['2023 Apr', '2023 May', '2023 June'],
      series: [[100, 200, 300], [175.5, 350, 340], [200, 400, 100]],
      chartOptions: {
        chart: {
          type: 'donut'
        },
        legend: {
          show: false
        },
        labels: ['Food', 'Transport', 'Product'],
        colors: ['#237ABC', '#3BB04A', '#F49022'],
        plotOptions: {
          pie: {
            expandOnClick: true,
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true,
                  color: '#333333',
                  fontSize: '20px',
                  fontWeight: '600',
                  formatter: function (value) {
                    const t = value.globals.series.reduce((a, b) => a + b, 0)
                    return t.toString() + ' kg CO2'
                  }
                },
                value: {
                  color: '#0083BB',
                  fontSize: '25px',
                  fontWeight: '600'
                }
              }
            }
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        dataLabels: {
          enabled: false
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      widthX: 'screen/getWidthClass'
    })
  },
  methods: {
    getData () {
      return [[100, 200, 300], [175.5, 350, 340], [200, 400, 100]]
    },
    setData (selectedIndex) {
      this.selectedData = this.selectedIndex
    },
    selectPreviousMonth () {
      // Decrease the selected index and handle wrap-around
      this.selectedIndex = (this.selectedIndex - 1 + this.months.length) % this.months.length
    },
    selectNextMonth () {
      // Increase the selected index and handle wrap-around
      this.selectedIndex = (this.selectedIndex + 1) % this.months.length
    },
    ...mapActions({
    })
  }
}
</script>

<style lang="scss">
foreignObject {
  width: 380px !important;
}

</style>
