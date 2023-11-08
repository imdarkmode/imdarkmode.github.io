<script setup lang="ts">
import Project from "@/components/Project.vue"
import Headnav from '@/components/Headnav.vue'
import Footer from '@/components/Footer.vue'
import { projects } from "@/data"
import FeaturedProjects from "@/components/FeaturedProjects.vue";
</script>

<template>
  <v-app>
    <Headnav></Headnav>
    <FeaturedProjects style="margin-top: 50px" :numberToShow="projects.length"></FeaturedProjects>
    <Footer></Footer>
  </v-app>
</template>

<style scoped lang="sass">
.projects-container
  margin-top: 50px
  padding-bottom: 25px
  padding-left: 10%
  padding-right: 10%

</style>
