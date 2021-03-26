<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div>{{name}}</div>
</template>

<script>
import {effect, reactive, toRefs} from 'vue';

export default {
  name: 'App',

  setup() {
    const state = reactive({name: 'Tom', count: 0});
    effect(() => {
      console.log('effect');
    });
    return toRefs(state);
  }

}
</script>
