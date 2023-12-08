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
  createdWith: {
    type: Array<{ name: string, icon: string }>,
    required: true
  }
})

function navigateTo(url: string) {
  window.location.href = url
}

</script>

<template>
  <v-container class="project-container">
    <v-row>
      <v-col style="min-width: 300px; max-width: 390px;">
        <iframe class="youtube" :src="youtubeUrl"></iframe>
      </v-col>
      <v-col>
        <v-row>
          <div class="header-bg">
            <h2 class="header">{{ header }}</h2>
          </div>
          <p class="description">{{ description }}</p>
        </v-row>
        <v-row>
          <div class="btn-bg">
            <v-btn v-if="githubUrl" class="link-btn" color="primary"
              @click="navigateTo(githubUrl)"><v-icon>mdi-github</v-icon>Github</v-btn>
            <v-btn v-if="websiteUrl" class="link-btn" color="primary"
              @click="navigateTo(websiteUrl)"><v-icon>mdi-web</v-icon>Website</v-btn>
          </div>
        </v-row>
        <v-row class="created-with-container">
          <div v-for="c in createdWith" style="padding-left: 5px; padding-right: 5px">
            <v-icon v-if="c.icon != ''">{{ c.icon }}</v-icon>
            <span>{{ c.name }}</span>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">
@import @/assets/variables.sass

.header-bg
  width: 100%
  background-color: $surface-color3
  border-radius: 15px
  padding: 5px
  display: flex
  justify-content: center

.btn-bg
  width: 100%
  display: flex
  justify-content: center

.youtube
  width: 100%
  height: 100%
  min-height: 200px
  max-width: 390px

.description
  font-size: 18px
  margin-top: 5px

.header
  color: white
  font-size: 30px

.link-btn
  margin: 5px

.created-with-container
  justify-content: center
  flex-direction: row
  font-size: 14px
  opacity: 0.6
  

</style>

