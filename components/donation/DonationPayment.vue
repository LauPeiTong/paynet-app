<template lang="pug">
v-row(justify="space-around")
    v-col(cols="auto")
      v-dialog(transition="dialog-bottom-transition", max-width="600" )
        template(v-slot:activator="{ on, attrs }")
          v-btn.rounded-x2(color="primary", v-bind="attrs", v-on="on" min-width="340")
            | Make Donation
        template(v-slot:default="dialog")
          v-card.rounded-xl
            v-toolbar(color="primary", dark)
              | Choose an amount to donate:
            v-card-text
              // div.text-h2.pa-12 Hello world!
              v-col
                v-row
                  v-col
                    .d-flex.justify-center.pt-5
                      div.button.justify-center
                        input(type="radio", id="a25", name="check-substitution-2")
                        label.btn.btn-default(for="a25") RM10

                      div.button
                        input(type="radio", id="a50", name="check-substitution-2")
                        label.btn.btn-default(for="a50") RM20

                      div.button
                        input(type="radio", id="a75", name="check-substitution-2")
                        label.btn.btn-default(for="a75") RM30
                v-col
                  .d-flex.justify-center.pt-5
                    p or
                .d-flex.justify-center.pt-5
                  p RM
                  input.rounded-x2(type="number", v-model="numberInput", style="background-color: rgb(240, 240, 240);")
            v-card-actions(class="justify-center")
              v-btn(color="primary", @click="Accepted()")
                | Proceed To Pay
</template>
<script>
export default {
  data () {
    return {
      numberInput: '',
      selectedButton: ''
    }
  },
  methods: {
    searchBy (newValue) {
      this.search = newValue
    },
    goBackToPreviousPage () {
      this.$router.go(-1)
    },
    Accepted () {
      this.$router.push('/donation')
    }
  }
}
</script>

<style scoped>
.button {
  float: left;
  margin: 0 5px 0 0;
  width: 60px;
  height: 40px;
  position: relative;
}

.button label,
.button input {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.button input[type="radio"] {
  opacity: 0.011;
  z-index: 100;
}

.button input[type="radio"]:checked + label {
  background: #6aabdd;
  border-radius: 4px;
}

.button label {
  cursor: pointer;
  z-index: 90;
  line-height: 1.8em;
}

</style>
