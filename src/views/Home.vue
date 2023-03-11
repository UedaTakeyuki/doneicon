<template>
  <div>
    <h1>This is an home page</h1>
    <Hello/>
    <Hello2/>
    <Hello3/>
  </div>
</template>

<script>
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'
import Hello3 from '@/components/Hello3'
export default {
  components: {Hello, Hello2, Hello3}
}
</script>