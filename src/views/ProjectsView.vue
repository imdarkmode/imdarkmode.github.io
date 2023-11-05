<script setup lang="ts">
import Project from "@/components/Project.vue"
import Headnav from '@/components/Headnav.vue'
import Footer from '@/components/Footer.vue'
import { projects } from "@/data"
</script>

<template>
  <v-app>
    <Headnav></Headnav>
    <v-container class="projects-container">
      <v-row v-for="project in projects">
        <v-sheet border rounded :elevation="8" style="width: 100%">
          <v-card class="d-flex justify-center align-center">
            <Project :header="project.header" :description="project.description" :youtubeUrl="project.youtubeUrl"
              :githubUrl="project.githubUrl" :websiteUrl="project.websiteUrl"></Project>
          </v-card>
        </v-sheet>
      </v-row>
    </v-container>
    <Footer></Footer>
  </v-app>
</template>

<style scoped lang="sass">

.projects-container
  margin-bottom: 25px
  margin-top: 50px

</style>
