<script setup lang="ts">
import FeaturedProjects from "@/components/FeaturedProjects.vue"
let pathToImage = new URL('/src/assets/panther_home.png', import.meta.url).href
</script>

<template>
  <v-app>
    <v-img :src="pathToImage"></v-img>
    <img src="/src/assets/panther_home.png" style="width: 100%">
    <FeaturedProjects></FeaturedProjects>
  </v-app>
</template>

<style scoped lang="sass"></style>
