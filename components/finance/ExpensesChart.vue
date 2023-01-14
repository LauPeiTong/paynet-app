<template lang="pug">
.expenses-chart.px-4
  v-card.rounded-lg(outlined)
    v-list-item.pt-2(three-line)
      v-list-item-content.text-center
        v-row.d-flex.flex-row
          v-col.pb-0.text-right(align-self="end")
            f-icon(:icon-name="'arrow-ios-back-outline'" :icon-fill="$vuetify.theme.themes.light.primary" @click="")
          v-col.pb-0
            v-list-item-title.secondary--text.font-weight-bold.text-h5.mt-2 {{ months[selectedIndex] }}
          v-col.pb-0.text-left.align-bottom(align-self="end")
            f-icon(:icon-name="'arrow-ios-forward-outline'" :icon-fill="$vuetify.theme.themes.light.primary" @click="")
        v-list-item-subtitle.sutitle-1.darkGrey--text Monthly Expenses
        ApexCharts.d-flex.justify-space-around(type="donut" :options="chartOptions" :series="series" width="320" height="320")
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
      months: ['2022 Dec', '2023 Jan', '2023 Feb', '2023 Mar'],
      series: [175.5, 350, 34, 57],
      chartOptions: {
        chart: {
          type: 'donut'
        },
        legend: {
          show: false
        },
        labels: ['Food & Transportation', 'Housing & Utilities', 'Entertainment', 'Other Expenses'],
        colors: ['#0083BB', '#035172', '#C82F2F', '#848484'],
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
                    return new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'MYR',
                      currencyDisplay: 'narrowSymbol'
                    }).format(t)
                  }
                },
                value: {
                  color: '#0083BB',
                  fontSize: '28px',
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
