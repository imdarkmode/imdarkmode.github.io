<script setup lang="ts">
import Project from "@/components/Project.vue"
import { ref } from "vue"

let window = ref(0)
let length = ref(1)
</script>

<template>
  <v-container
    style="display: flex; justify-content: center; flex-direction: column; padding-left: 10%; padding-right: 10%; margin-bottom: 50px">
    <h2 style="padding: 15px"> Featured Projects</h2>
    <v-sheet border rounded :elevation="8">
      <v-window v-model="window" show-arrows>
        <v-window-item v-for="n in length" :key="n">
          <v-card class="d-flex justify-center align-center">
            <Project url="https://www.youtube.com/embed/ZXlAVOFNTw4" header="Video"
              text="This is example video text. There will be something else here later."></Project>
          </v-card>
        </v-window-item>
      </v-window>
    </v-sheet>
  </v-container>
</template>

<style scoped lang="sass"></style>