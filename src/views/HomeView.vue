<script setup lang="ts">
import FeaturedProjects from "@/components/FeaturedProjects.vue"
let pathToImage = new URL('/src/assets/panther_home.png', import.meta.url).href
</script>

<template>
  <v-app>
    <v-img :src="pathToImage"></v-img>
    <FeaturedProjects></FeaturedProjects>
  </v-app>
</template>

<style scoped lang="sass"></style>
