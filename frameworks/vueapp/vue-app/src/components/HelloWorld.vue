<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>😎</h1>
  <p>
    Hello, welcome class Hudson Silva!
  </p>
  <button type="button" @click="count++">Likes {{ count }}</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
