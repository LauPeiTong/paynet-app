<template lang="pug">
.eco-pt.px-4
  v-card.rounded-lg(outlined @click="")
    v-list-item.pt-2(three-line)
      v-list-item-content
        v-list-item-title.secondary-text.text-h6.ml-2.mt-2.mb-2.text-center Ave monthly carbon footprint
        v-list-item-subtitle.text-h6.ml-3.primary--text.text-center  781 kg CO2
      v-list-item-avatar(size="20" tile)
        v-img(:src="goal")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'StatisticCard',
  components: {
  },
  props: {
  },
  computed: {
    ...mapGetters({
    })
  },
  methods: {
    ...mapActions({
    })
  }
}
</script>

<style lang="scss" scoped></style>
