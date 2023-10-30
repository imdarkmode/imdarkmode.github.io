<script setup lang="ts">
let pathToGithub = new URL('/src/assets/GitHub.png', import.meta.url).href
let pathToYoutube = new URL('/src/assets/youtube.png', import.meta.url).href
</script>


<template>
  <v-footer style="max-height: 100px" class="bg-image">
    <v-container class="footer-container">
      <h2 class="footer-text">Thanks for Visiting!</h2>
      <v-divider :thickness="2" class="border-opacity-50" width="10%" color="white"></v-divider>
      <div class="footer-link-container">
        <v-icon class="footer-link" @click="">mdi-github</v-icon>
        <v-icon class="footer-link" @click="">mdi-web</v-icon>
        <v-icon class="footer-link" @click="">mdi-youtube</v-icon>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped lang="sass">

.footer-container
  display: flex
  justify-content: center
  align-items: center
  padding: 10px
  flex-direction: column

.footer-link-container
  display: flex
  color: white
  justify-content: center
  align-items: center
  padding: 10px
  flex-direction: row

.footer-link
  padding-left: 15px
  padding-right: 15px

.footer-text
  color: white

.bg-image
  background-image: url("/src/assets/dark_forest_2560x1440.png")

</style>
