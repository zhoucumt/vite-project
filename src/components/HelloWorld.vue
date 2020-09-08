<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>{{data.counter}}</p>
  <p>{{data.doubleCounter}}</p>
  <p>{{msg2}}</p>
</template>

<script>
import {computed, reactive, onMounted, onUnmounted, ref} from 'vue'

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
    // counter相关
    const data = useCounter();
    const msg2 = ref('some message');
    return {data, msg2}
  }
}

function useCounter() {
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

  return data
}
</script>
