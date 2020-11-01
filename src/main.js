import { createApp, h} from 'vue'
import App from './App.vue'
import './index.css'

createApp(App)
  .component("comp", {
    render: () => h("div", "i am comp")
  })
  .mount('#app')
