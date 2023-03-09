<template>
  <v-app>

    <v-main>
      <v-icon   
        x-large
        color="primary"
      >
        $vuetify.icons.SvgIconDone
      </v-icon>
      <v-btn
        class="mx-2"
        fab
        dark
        large
        color="purple"
      >
        <v-icon dark>
          $SvgIconDone
        </v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
