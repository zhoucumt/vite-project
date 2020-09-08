<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>{{data.counter}}</p>
  <p>{{data.doubleCounter}}</p>
</template>

<script>
import {computed, reactive, onMounted, onUnmounted} from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  setup() {
    const data = reactive({
      counter: 1,
      doubleCounter: computed(() => data.counter * 2)
    })

    // 生命周期
    let timer
    onMounted(() => {
      timer = setInterval(() => {
        data.counter++
      }, 1000)
    })

    // 卸载
    onUnmounted(() => {
      clearInterval(timer)
    })
    return {data}
  }
}
</script>
