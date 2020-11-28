<template>
  <canvas class="canvas" ref="player"
    :width="width"
    :height="height">
    您的浏览器不支持canvas标签。
  </canvas>
</template>

<script>
import {onMounted, } from 'vue'

export default {
  name: 'Barrage',

  setup() {

  }
}
</script>

<style scoped>
  .canvas {
    position: absolute;
  }
</style>
