import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入全局样式
import './assets/css/style.css'
//导入iconfonts
import './assets/fonts/iconfont.css'
//导入elementUI
import '../src/plugins/element'
//导入网络请求函数
// import './network/request'
//导入树形组件
import tableTree from 'vue-table-with-tree-grid'
//注册为全局组件
Vue.component('table-tree', tableTree)

//导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'

// require styles(把富文本编辑器样式放到index.html中,这里就不用了)
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)


//导入时间格式化函数
import timer from './utils/timeFormat.js'
//filter(过滤的对象, 过滤器函数)
Vue.filter('timerFormat', timer)

// Vue.prototype.$http = request;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
