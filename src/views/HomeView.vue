<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)

const handleResize = () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
  console.log("height: ", windowHeight.value)
  console.log("width:", windowWidth.value)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

</script>

<template>
  <main>
    <div class="full-center-container">
      <div style="width: 100%; height: 100%;">
        <img src="/src/assets/pictures/panther_home.png" class="home-image">
      </div>
    </div>
  </main>
</template>

<style scoped lang="sass"></style>
