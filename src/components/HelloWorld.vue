<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>{{counter}}</p>
  <p>{{doubleCounter}}</p>
  <p>{{msg2}}</p>
  <p ref="desc"></p>
  <ModalButton></ModalButton>
  <Emits @click="onClick"></Emits>

  <!-- 实例方法组件 -->
  <comp></comp>

  <!-- v-model的使用 -->
  <VmodelTest v-model="counter"></VmodelTest>
  <!-- 等效于 -->
  <!-- <VmodelTest :counter="counter" @update:counter="counter=$event"></VmodelTest> -->
</template>

<script>
import {computed, reactive, onMounted, onUnmounted, ref, toRefs, watch} from 'vue'
import ModalButton from './ModalButton.vue'
import Emits from './Emits.vue'
import VmodelTest from './VmodelTest.vue'

export default {
  name: 'HelloWorld',
  components: {
    ModalButton,
    Emits,
    VmodelTest
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      counter: 1
    }
  },
  setup() {
    // counter相关
    // const data = useCounter();
    // 使用toRefs之后可以这样用
    const {counter, doubleCounter} = useCounter()
    const msg2 = ref('some message')

    // 使用元素的引用
    const desc = ref(null)

    // watch
    watch(counter, (val, oldVal) => {
      const p = desc.value
      p.textContent = `counter change from ${oldVal} to ${val}`
    })
    return {counter, doubleCounter, msg2, desc}
  },
  methods: {
    onClick() {
      console.log('clecked!');
    }
  },
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
