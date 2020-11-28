<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <videoPlayer></videoPlayer>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import videoPlayer from './components/Video.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    videoPlayer
  }
}
</script>
