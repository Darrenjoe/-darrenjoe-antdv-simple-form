import Vue from 'vue'
import App from './App.vue'

import {
  Input,
  InputNumber,
  AutoComplete,
  Button,
  Radio,
  Checkbox,
  Select,
  TreeSelect,
  Form,
  Row,
  Col,
  Icon,
  DatePicker,
  TimePicker
} from 'ant-design-vue'

Vue.use(Input)
Vue.use(InputNumber)
Vue.use(AutoComplete)
Vue.use(Button)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(TreeSelect)
Vue.use(Form)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(DatePicker)
Vue.use(TimePicker)

new Vue({
  render: h => h(App)
}).$mount('#app')
