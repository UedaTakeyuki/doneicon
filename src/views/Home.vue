<template>
  <div>
    <h1>This is an home page</h1>
    <Hello/>
    <Hello2/>
  </div>
</template>

<script>
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'
export default {
  components: {Hello, Hello2}
}
</script>