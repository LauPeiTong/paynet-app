<template lang="pug">
  .pay-page.fill-height
    upper-title.pay-title.ma-0(:titleClass="'white-text'" :title="'QR Code'" :icon="'more-vertical'" @goBack="goBackToPreviousPage" :back="true")
    v-row.focus.pa-0.ma-0.d-flex.justify-center.align-center
      v-row.focus-area.justify-center
        qrcode-stream(:camera="camera" @decode="onDecode" @init="onInit")
          .validation-success(v-if="validationSuccess")
            span Processing

          .validation-failure(v-if="validationFailure")
            span Payment Failed

          .validation-pending(v-if="validationPending")
            span Scanning...
        p.mt-3.white--text Place the QR in the Scan Area

    qrcode-stream(:camera="camera")
    v-row.px-0.ma-0.py-16.d-flex.justify-center.align-center.camera-button
      v-card.rounded-xl.primary.pa-4
        f-icon(
          :icon-name="'camera'"
          :icon-fill="'white'"
          :width="36"
          :height="36"
          @click=""
        )

</template>

<script>
import FIcon from '../components/fincare-components/FIcon.vue'

export default {
  name: 'PayPage',
  components: { FIcon },
  layout: 'welcome',
  data () {
    return {
      isValid: undefined,
      camera: 'auto',
      result: null
    }
  },

  computed: {
    validationPending () {
      return this.isValid === undefined && this.camera === 'off'
    },

    validationSuccess () {
      if (this.isValid === true) {
        this.goToPaymentPage()
      }
      return this.isValid === true
    },

    validationFailure () {
      return this.isValid === false
    }
  },

  methods: {
    onInit (promise) {
      promise
        .catch(console.error)
        .then(this.resetValidationState)
    },
    resetValidationState () {
      this.isValid = undefined
    },
    async onDecode (content) {
      this.result = content
      this.turnCameraOff()

      // pretend it's taking really long
      await this.timeout(3000)
      this.isValid = content.startsWith('http')

      // some more delay, so users have time to read the message
      await this.timeout(2000)

      this.turnCameraOn()
    },
    turnCameraOn () {
      this.camera = 'auto'
    },
    turnCameraOff () {
      this.camera = 'off'
    },
    timeout (ms) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms)
      })
    },
    goBackToPreviousPage () {
      this.$router.go(-1)
    },
    goToPaymentPage () {
      this.$router.push('/payment')
    }
  }
}
</script>

<style lang="scss" scoped>
.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, .8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
}

.pay-title {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.focus{
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 50;
}

.focus-area {
  height: 250px;
  max-width: 250px;
  border: 6px solid #fff;
  border-radius: 30px;
}

.camera-button {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  width: 100%;
}

:deep(.qrcode-stream-camera), :deep(.qrcode-stream-overlay), :deep(.qrcode-stream-wrapper) {
  border-radius: 24px !important;
}

</style>
