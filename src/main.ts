import { createApp } from 'vue'
import App from './App.vue'

const a = 1

function foo(name: number) {
  const last = name
  return last
}
console.log(foo(a))

createApp(App).mount('#app')
