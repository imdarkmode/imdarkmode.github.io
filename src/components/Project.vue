<script setup lang="ts">
import { defineProps } from 'vue'

// TODO: finish this component

defineProps({
  url: String,
  header: String,
  text: String
})

</script>

<template>
  <v-container class="container">
    <iframe class="youtube" :src="url"></iframe>
    <div class="text-container">
      <h2>{{ header }}</h2>
      <p>{{ text }}</p>
    </div>

  </v-container>
</template>

<style scoped lang="sass">
.youtube
  width: 100%
  flex: 1

.container
  display: flex
  flex-direction: row
  
.text-container
  display: flex
  flex-direction: column
  justify-content: center
  margin-left: 20px
  margin-right: 20px
  flex: 3

</style>
