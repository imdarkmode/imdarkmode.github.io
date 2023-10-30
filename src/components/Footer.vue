<script setup lang="ts">
let pathToGithub = new URL('/src/assets/GitHub.png', import.meta.url).href
let pathToYoutube = new URL('/src/assets/youtube.png', import.meta.url).href

function navigateTo(url: string) {
  window.location.href = url
}
</script>


<template>
  <v-footer style="max-height: 100px" class="bg-image">
    <v-container class="footer-container">
      <h2 class="footer-text">Thanks for Visiting!</h2>
      <v-divider :thickness="2" class="border-opacity-50" width="10%" color="white"></v-divider>
      <div class="footer-link-container">
        <v-icon class="footer-link"
          @click="navigateTo('https://github.com/thedarkmode?tab=repositories')">mdi-github</v-icon>
        <v-icon class="footer-link"
          @click="navigateTo('https://www.youtube.com/channel/UC-qdwsjhmZ6eS8rlk2lg1Jw')">mdi-youtube</v-icon>
        <svg @click="navigateTo('https://discord.gg/GmPZ3e7tZH')" xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" viewBox="0 0 24 24" class="discord-link">
          <path fill="currentColor"
            d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
        </svg>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped lang="sass">

.discord-link
  margin-left: 5px
  cursor: pointer

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
  background-image: url("src/assets/dark_forest_2560x1440.png")

</style>
