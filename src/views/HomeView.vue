<script setup lang="ts">
import FeaturedProjects from "@/components/FeaturedProjects.vue"
let pathToIcon = new URL('/src/assets/me_levi_icon.png', import.meta.url).href

import Headnav from '@/components/Headnav.vue'
import Footer from '@/components/Footer.vue'

function navigateTo(url: string) {
  window.location.href = url
}
</script>

<template>
  <Headnav></Headnav>
  <v-container class="fill-height bg-image" fluid>
    <v-spacer></v-spacer>
    <v-row class="align-center justify-center test-row">
      <v-col style="flex-grow: 0">
        <v-img class="img" height="300" width="300" :src="pathToIcon"></v-img>
      </v-col>
      <v-col class="title-col">
        <v-row justify="center">
          <h1 class="title">DARK MODE</h1>
          <h2 class="subtitle">There's <b class="primary-color">Beauty</b> in the <b class="primary-color">Dark</b>.
          </h2>
        </v-row>
        <v-row justify="center">
          <v-btn class="link-btn" color="primary"
            @click="navigateTo('https://www.youtube.com/channel/UC-qdwsjhmZ6eS8rlk2lg1Jw')"><v-icon>mdi-youtube</v-icon>Youtube</v-btn>
          <v-btn class="link-btn"
            @click="navigateTo('https://github.com/thedarkmode?tab=repositories')"><v-icon>mdi-github</v-icon>Github</v-btn>
          <v-btn class="link-btn" @click="navigateTo('https://discord.gg/GmPZ3e7tZH')"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
            </svg>Discord</v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
  </v-container>
  <FeaturedProjects :numberToShow="3"></FeaturedProjects>
  <Footer></Footer>
</template>

<style scoped lang="sass">
@import "@/assets/variables.sass"

.title
  font-size: 80px
  text-align: center

.primary-color
  color: $primary-color

.subtitle
  font-size: 30px
  opacity: 0.7
  text-align: center
  margin-top: 0px
  position: relative
  top: -20px

.title-col
  flex-grow: 1
  max-width: 500px

.bg-image
  background-image: url("/src/assets/dark_forest_2560x1440.png")

.link-btn
  margin: 5px

.test-row
  height: 100vh
</style>
