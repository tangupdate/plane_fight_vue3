// import { createApp } from 'vue'
import { createApp } from './runtime_canvas'
import App from './App.vue'
import { getRootComponent } from './game'
// import './style.css'




createApp(App).mount(getRootComponent())


// createApp(App).mount('#app')
