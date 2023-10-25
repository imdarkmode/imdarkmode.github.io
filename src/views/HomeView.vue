<script setup lang="ts">
import FeaturedProjects from "@/components/FeaturedProjects.vue"
let pathToImage = new URL('/src/assets/panther_2560x1440.png', import.meta.url).href
</script>

<template>
  <v-app>
    <v-img cover :src="pathToImage"></v-img>
    <FeaturedProjects></FeaturedProjects>
  </v-app>
</template>

<style scoped lang="sass"></style>
