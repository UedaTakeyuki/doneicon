<template>
  <v-app>
    <v-main>
      <v-icon
        x-large
        color="primary"
      >$DoneIcon</v-icon>
      <Hello/>
      <Hello2/>
    </v-main>
  </v-app>
</template>

<script>
import {Hello} from 'doneicon'
import {Hello2} from 'doneicon'
export default {
  components: {Hello, Hello2},
  data: () => ({
  })
};
</script>
