// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import { Button, Input, Icon, Tooltip, Card, Avatar } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Antd)
// Vue.use(Button)
// Vue.use(Input)
// Vue.use(Icon)
// Vue.use(Tooltip)
// Vue.use(Card)
// Vue.use(Avatar)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
