<script setup lang="ts">
import FeaturedProjects from "@/components/FeaturedProjects.vue"
import FeaturedTools from "@/components/FeaturedTools.vue"
let pathToIcon = new URL('/src/assets/me_levi_icon.webp', import.meta.url).href

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
          <v-btn class="link-btn" @click="navigateTo('https://www.tiktok.com/@imdarkmode')"><v-icon>
              <svg style="padding-right: 2px" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                <path
                  d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>
            </v-icon>Tik
            Tok</v-btn>
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
  <v-container class="d-flex justify-center align-center">
    <div class="about-bg">
      <h2 class="about-title">What is <b class="primary-color">Dark Mode</b>?</h2>
      <div class="about-text">
        <p>Hi, my name is Andrew, I'm a web developer and the creator of Dark Mode!
        </p>
        <p>I created Dark Mode to experiment with, and push the boundaries of the web</p>
        <p>Through these projects I hope to teach myself and others about web development!</p>
      </div>
    </div>
  </v-container>
  <FeaturedTools></FeaturedTools>
  <v-container class="d-flex justify-center align-center">
    <h2 class="about-title">Featured Projects</h2>
  </v-container>
  <FeaturedProjects :numberToShow="3"></FeaturedProjects>
  <v-btn class="projects-btn" color="primary" style="margin-bottom: 50px"
    @click="$router.push('/projects')"><v-icon>mdi-wrench</v-icon>All
    Projects</v-btn>
  <Footer></Footer>
</template>

<style scoped lang="sass">
@import "@/assets/variables.sass"
.about-title
  font-size: 40px

.about-text
  font-size: 20px

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
  background-image: url("/src/assets/dark_forest_2560x1440.webp")

.link-btn
  margin: 5px
  
.projects-btn
  width: 150px
  margin: 5px
  align-self: center

.test-row
  height: 100vh

.about-bg
  justify-content: center
  align-items: center
  text-align: center
  margin-top: 40px  
  padding: 20px

</style>
