<template>
  <v-app>
    <v-main>
      <v-icon
        x-large
        color="primary"
      >$DoneIcon</v-icon>
      <Hello/>
      <Hello2/>
      <Hello3/>
    </v-main>
  </v-app>
</template>

<script>
import {Hello} from 'doneicon'
import {Hello2} from 'doneicon'
import {Hello3} from 'doneicon'
export default {
  components: {Hello, Hello2, Hello3},
  data: () => ({
  })
};
</script>
