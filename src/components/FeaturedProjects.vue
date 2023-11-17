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
    <v-row v-for="project in projects.slice(0, numberToShow)">
      <v-sheet border rounded :elevation="8" style="width: 100%; margin-bottom: 25px">
        <v-card class="d-flex justify-center align-center">
          <Project :header="project.header" :description="project.description" :youtubeUrl="project.youtubeUrl"
            :githubUrl="project.githubUrl" :websiteUrl="project.websiteUrl" :createdWith="project.createdWith"></Project>
        </v-card>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">
@import @/assets/variables.sass

.title
  margin-top: 25px
  margin-bottom: 15px

.featured-container
  margin-top: 30px
  padding-bottom: 25px
  padding-left: 15%
  padding-right: 15%

</style>@/data/data@/data