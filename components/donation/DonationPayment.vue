<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >From the bottom</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Choose an amount to donate:</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
              <input type="number" v-model="numberInput">
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                color="primary"
                @click="dialog.value = false"
              >Proceed To Pay</v-btn>

            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      numberInput: ''
    }
  }
}
</script>
