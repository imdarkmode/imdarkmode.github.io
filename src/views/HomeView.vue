<script setup lang="ts">
import FeaturedProjects from "@/components/FeaturedProjects.vue"
let pathToPanther = new URL('/src/assets/panther_2560x1440.png', import.meta.url).href
let pathToGithub = new URL('/src/assets/GitHub.png', import.meta.url).href
let pathToYoutube = new URL('/src/assets/youtube.png', import.meta.url).href

import Headnav from '../components/Headnav.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <v-app>
    <Headnav></Headnav>
    <v-img cover :src="pathToPanther"></v-img>
    <FeaturedProjects></FeaturedProjects>
    <Footer></Footer>
  </v-app>
</template>

<style scoped lang="sass">
</style>
