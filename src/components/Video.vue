<template>
  <div>
    <video controls width="640" height="380" src=""></video>
  </div>
</template>

<script>
import videoSrc from '../assets/test.mp4';

export default {
  name: 'Video',
  setup () {
    const state = reactive({
      data: [
        {name: '大专', count: 200, color: 'brown'},
        {name: '本科', count: 300, color: 'yellow'},
        {name: '硕士', count: 100, color: 'pink'},
        {name: '博士', count: 50, color: 'skyblue'}
      ],
      src: videoSrc
    })

    function handleClick() {
      state.data.push({name: '其他', count: 30, color: 'orange'},)
    }

    return {
      state,
      handleClick
    }
  },
}
</script>
