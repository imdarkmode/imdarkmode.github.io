<script setup lang="ts">
import FeaturedProject from "@/components/FeaturedProject.vue"
import { projects } from "@/data"
import type { IProject } from "@/interfaces"
import { ref } from "vue"

let window = ref(0)


</script>

<template>
  <v-container class="featured-container">
    <h2 style="justify-self: center; align-self: center;"> Featured Projects</h2>
    <v-row>
      <v-col v-for="project in projects.slice(0, 2)">
        <v-sheet border rounded :elevation="8">
          <v-card class="d-flex justify-center align-center">
            <FeaturedProject class="featured-window" :header="project.header" :description="project.description"
              :youtubeUrl="project.youtubeUrl" :githubUrl="project.githubUrl" :websiteUrl="project.websiteUrl">
            </FeaturedProject>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">

.featured-container
  padding-bottom: 25px

</style>@/data/data@/data