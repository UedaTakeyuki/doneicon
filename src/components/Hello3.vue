<template>
  <div>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
    >
      <SvgIconDone
        style="width: 75%; height: 75%;"
      />
<!--      <v-icon dark>
        mdi-minus
      </v-icon>-->
    </v-btn>
  </div>
</template>

<script>
import SvgIconDone from './SvgIconDone'
export default {
  components: {SvgIconDone},
/*  data: () => ({
    SvgIconDone:SvgIconDone
  })*/
}
</script>