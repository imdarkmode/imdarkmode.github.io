<script setup lang="ts">
import FeaturedProjects from "@/components/FeaturedProjects.vue"
let pathToImage = new URL('/src/assets/panther_2560x1440.png', import.meta.url).href
import Headnav from '../components/Headnav.vue'
</script>

<template>
  <v-app>
    <Headnav></Headnav>
    <v-img cover :src="pathToImage"></v-img>
    <FeaturedProjects></FeaturedProjects>
  </v-app>
</template>

<style scoped lang="sass"></style>
