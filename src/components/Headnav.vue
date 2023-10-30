<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const drawer = ref(false)
const items = ref([
  {
    title: 'Home',
    value: '/',
  },
  {
    title: 'Projects',
    value: '/projects',
  },
  {
    title: 'About',
    value: '/about',
  }
])


</script>

<template>
  <v-container>
    <v-app-bar image="src/assets/dark_forest_toolbar.png" :elevation="8">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title style="cursor: pointer" @click="$router.push('/')">Dark Mode</v-app-bar-title>
      <!-- <v-spacer></v-spacer>
      <v-btn variant="text" icon="mdi-magnify"></v-btn>
      <v-btn variant="text" icon="mdi-filter"></v-btn>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
    </v-app-bar>

    <v-navigation-drawer class="drawer-bg" v-model="drawer" location="left" temporary>
      <v-list>
        <v-list-item v-for="item in items" @click="$router.push(item.value)">
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<style scoped lang="sass">

.drawer-bg
  background-color: #121212
  opacity: 0.7
  z-index: 1000

</style>

