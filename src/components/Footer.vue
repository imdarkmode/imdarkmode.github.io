<script setup lang="ts">
let pathToGithub = new URL('/src/assets/GitHub.png', import.meta.url).href
let pathToYoutube = new URL('/src/assets/youtube.png', import.meta.url).href
</script>


<template>
  <v-footer style="max-height: 100px">
    <v-container class="footer-container">
      <h2 class="footer-text">Thanks for visiting!</h2>
      <div class="footer-link-container">
        <a class="footer-link" href="https://github.com/thedarkmode?tab=repositories">
          <v-img width="30px" height="30px" :src="pathToGithub"></v-img>
        </a>
        <a class="footer-link" href="https://www.youtube.com/channel/UC-qdwsjhmZ6eS8rlk2lg1Jw">
          <v-img width="30px" height="30px" :src="pathToYoutube"></v-img>
        </a>
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
  justify-content: center
  align-items: center
  padding: 10px
  flex-direction: row

.footer-link
  padding-left: 15px
  padding-right: 15px

.footer-text
  color: black

</style>
