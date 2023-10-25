<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  url: String,
  header: String,
  text: String
})

</script>

<template>
  <v-container class="container">
    <iframe width="300" :src="url"></iframe>
    <div class="text-container">
      <h2>{{ header }}</h2>
      <p>{{ text }}</p>
    </div>

  </v-container>
</template>

<style scoped lang="sass">

.container
  margin-left: 60px
  margin-right: 60px
  display: flex
  
.text-container
  display: flex
  flex-direction: column
  justify-content: center
  margin-left: 20px
  margin-right: 20px
  

</style>
