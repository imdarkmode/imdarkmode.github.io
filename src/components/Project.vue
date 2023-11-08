<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  youtubeUrl: {
    type: String,
    required: false
  },
  githubUrl: {
    type: String,
    required: false
  },
  websiteUrl: {
    type: String,
    required: false
  },
  header: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})

function navigateTo(url: string) {
  window.location.href = url
}

</script>

<template>
  <v-container class="project-container">
    <v-row>
      <v-col style="min-width: 300px; max-width: 450px;">
        <iframe class="youtube" :src="youtubeUrl"></iframe>
      </v-col>
      <v-col>
        <v-container>
          <v-row>
            <h2 class="header">{{ header }}</h2>
            <v-divider></v-divider>
            <p class="description">{{ description }}</p>
          </v-row>
          <v-row>
            <v-btn v-if="githubUrl" class="link-btn" color="primary"
              @click="navigateTo(githubUrl)"><v-icon>mdi-github</v-icon>Github</v-btn>
            <v-btn v-if="websiteUrl" class="link-btn" color="primary"
              @click="navigateTo(websiteUrl)"><v-icon>mdi-web</v-icon>Website</v-btn>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">
@import @/assets/variables.sass

.youtube
  width: 100%

.description
  font-size: 13px
  margin-top: 5px

.header
  color: white
  font-size: 19px

.link-btn
  margin: 5px

</style>

