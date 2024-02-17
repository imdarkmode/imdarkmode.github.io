<script setup lang="ts">
import Project from "@/components/Project.vue"
import { projects } from "@/data"
import type { IProject } from "@/interfaces"
import { ref, defineProps } from "vue"

let window = ref(0)

const props = defineProps({
  numberToShow: {
    type: Number,
    required: true
  }
})

</script>

<template>
  <v-container class="featured-container">
    <v-divider></v-divider>
    <v-row v-for="project in projects.slice(0, numberToShow)">
      <Project class="project" :header="project.header" :description="project.description"
        :youtubeUrl="project.youtubeUrl" :githubUrl="project.githubUrl" :websiteUrl="project.websiteUrl"
        :createdWith="project.createdWith"></Project>
      <v-divider></v-divider>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">
@import @/assets/variables.sass

.title
  margin-top: 25px
  margin-bottom: 15px

.featured-container
  padding-left: 15%
  padding-right: 15%

.project
  margin-top: 15px
  margin-bottom: 15px
  padding: 20px

</style>@/data/data@/data