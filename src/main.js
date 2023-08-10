import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import store from './store' 
import lang from './assets/js/lang.js'

import './assets/main.css'

import './assets/css/demo.css'

import elementIcon from "./plugins/icons";

//使用浏览器的localStorage和URL参数的组合
function getLangFromLocalStorage() {
    return localStorage.getItem('locale') || 'en' // 如果localStorage中没有保存语言设置，则默认为英语
  }
  
  function getLangFromUrl() {
    const params = new URLSearchParams(window.location.search)
    return params.get('lang') || getLangFromLocalStorage() // 如果URL参数中没有指定语言，则从localStorage中读取语言设置
  }
  
  const i18n = createI18n({
    locale: getLangFromUrl(), // 从URL参数或localStorage中读取语言设置
    messages: lang
  })

//使用localStorage
// const i18n = createI18n({  // 修改创建实例的方式
//     locale: localStorage.getItem('locale') || 'en',// 从localStorage中读取语言设置
//     messages: lang
// })



const app = createApp(App)
app.use(elementIcon)
app.use(router)
app.use(i18n)  // 使用 i18n 插件
app.use(store)
app.mount('#app')