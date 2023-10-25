<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
const items = ref([
  {
    title: 'Projects',
    value: 'projects',
  },
  {
    title: 'Store',
    value: 'store',
  },
  {
    title: 'About',
    value: 'about',
  },
  {
    title: 'Contact',
    value: 'contact',
  },
])
</script>

<template>
  <v-app>
    <v-container>
      <v-app-bar color="primary" :elevation="8">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Dark Mode</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>
    </v-container>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
  </v-app>
</template>
