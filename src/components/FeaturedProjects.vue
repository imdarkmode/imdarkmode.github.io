<script setup lang="ts">
import FeaturedProject from "@/components/FeaturedProject.vue"
import type { IFeaturedProject } from "@/interfaces"
import { ref } from "vue"

let window = ref(0)
let featuredProjects: IFeaturedProject[] = [
  {
    header: "Inspect Game",
    description: "A game where you use browser web tools.",
    youtubeUrl: "https://www.youtube.com/embed/ZXlAVOFNTw4",
    githubUrl: "https://github.com/thedarkmode/InspectGame",
    websiteUrl: "https://thedarkmode.github.io/InspectGame/"
  },
  // {
  //   header: "Inspect Game 2",
  //   description: "A game where you use browser web tools.",
  //   youtubeUrl: "https://www.youtube.com/embed/ZXlAVOFNTw4",
  //   githubUrl: "https://github.com/thedarkmode/InspectGame",
  //   websiteUrl: "https://thedarkmode.github.io/InspectGame/"
  // },
  // {
  //   header: "Inspect Game 3",
  //   description: "A game where you use browser web tools.",
  //   youtubeUrl: "https://www.youtube.com/embed/ZXlAVOFNTw4",
  //   githubUrl: "https://github.com/thedarkmode/InspectGame",
  //   websiteUrl: "https://thedarkmode.github.io/InspectGame/"
  // },
]

</script>

<template>
  <v-container class="featured-container">
    <h2 style="justify-self: center; align-self: center;"> Featured Projects</h2>
    <v-row>
      <v-col v-for="project in featuredProjects">
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

</style>