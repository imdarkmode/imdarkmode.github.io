<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String,
    required: false
  },
  youtubeUrl: {
    type: String,
    required: false
  },
  githubUrl: {
    type: String,
    required: false
  },
  websiteUrl: {
    type: String,
    required: false
  },
  header: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})

</script>

<template>
  <v-container class="container">
    <v-container class="text-container">
      <h2 class="header">{{ header }}</h2>
      <p class="description">{{ description }}</p>
    </v-container>
    <v-container class="icon-container">
      <a target="_blank" v-if="githubUrl" :href="githubUrl"><v-icon>mdi-github</v-icon></a>
      <a target="_blank" v-if="websiteUrl" :href="websiteUrl"><v-icon>mdi-web</v-icon></a>
      <a target="_blank" v-if="youtubeUrl" :href="youtubeUrl"><v-icon>mdi-youtube</v-icon></a>
    </v-container>
  </v-container>
</template>

<style scoped lang="sass">
.youtube
  width: 100%
  flex: 1

.container
  display: flex
  flex-direction: row
  
.image-container
  display: flex
  flex-direction: column
  justify-content: center
  margin-left: 10px
  margin-right: 10px
  flex: 1

.text-container
  display: flex
  flex-direction: column
  justify-content: center
  margin-left: 10px
  margin-right: 10px
  flex: 3

.icon-container
  display: flex
  flex-direction: column
  justify-content: center
  margin-left: 10px
  margin-right: 10px
  flex: 0

.description
  font-size: 13px

.header
  font-size: 19px

</style>
