<template>
  <v-container>
    <v-row justify="center" class="icon-container">
      <v-sheet class="d-flex justify-center align-center icon-bg" v-for="icon in pathToIcons" border rounded
        :elevation="8">
        <v-img class="icon" :src="icon"></v-img>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
let pathToIcons = [
  new URL('/src/components/icons/vue_logo.webp', import.meta.url).href,
  new URL('/src/components/icons/react_logo.webp', import.meta.url).href,
  new URL('/src/components/icons/angular_logo.webp', import.meta.url).href,
  new URL('/src/components/icons/wordpress_logo.webp', import.meta.url).href,
  new URL('/src/components/icons/typescript_logo.webp', import.meta.url).href,
  new URL('/src/components/icons/python_logo.webp', import.meta.url).href
]
</script>

<style scoped lang="sass">
@import "@/assets/variables.sass"

.icon-bg
  background-color: $background-color
  padding: 15px
  margin: 15px

.centered-icons
  display: flex
  justify-content: center
  margin-top: 60px
  margin-bottom: 60px

.icon-container
  margin: 10px
  flex-wrap: wrap

.icon
  width: 150px
  
@media(max-width: 1600px)
  .icon
    width: 50px
</style>
