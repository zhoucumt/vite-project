<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>{{counter}}</p>
  <p>{{doubleCounter}}</p>
  <p>{{msg2}}</p>
</template>

<script>
import {computed, reactive, onMounted, onUnmounted, ref, toRefs} from 'vue'

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
    // const data = useCounter();
    // 使用toRefs之后可以这样用
    const {counter, doubleCounter} = useCounter();
    const msg2 = ref('some message');
    return {counter, doubleCounter, msg2}
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

  return toRefs(data);
}
</script>
