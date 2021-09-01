import Vue from 'vue'
import App from './App.vue'
// import VueI18n from 'vue-i18n'

// import { GridLayout, GridItem } from 'vue-grid-layout'

// Vue.component('grid-layout', GridLayout)
// Vue.component('grid-item', GridItem)
// Vue.use(VueGridLayout.GridLayout)
// Vue.use(VueGridLayout.GridItem)

// Vue.use(VueI18n)

// export const defaultLang = 'en-US'

// const messages = {
//   'en-US': {
//     Input: 'Input Class'
//   },
//   'zh-CN': {
//     Input: '输入框'
//   }
// }

// const i18n = new VueI18n({
//   silentTranslationWarn: true,
//   locale: defaultLang,
//   fallbackLocale: defaultLang,
//   messages
// })

import {
  ConfigProvider,
  Layout,
  Input,
  InputNumber,
  AutoComplete,
  Button,
  Switch,
  Radio,
  Checkbox,
  Select,
  Slider,
  Cascader,
  Card,
  Collapse,
  Comment,
  Form,
  FormModel,
  Row,
  Col,
  Modal,
  Pagination,
  Table,
  Tabs,
  Icon,
  Badge,
  Popover,
  Dropdown,
  Empty,
  List,
  Avatar,
  Breadcrumb,
  Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  Alert,
  Tag,
  Divider,
  DatePicker,
  TimePicker,
  Upload,
  Progress,
  Skeleton,
  Popconfirm,
  PageHeader,
  Result,
  Statistic,
  Descriptions,
  Space,
  message,
  notification
} from 'ant-design-vue'

Vue.use(ConfigProvider)
Vue.use(Layout)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(AutoComplete)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Slider)
Vue.use(Cascader)
Vue.use(Card)
Vue.use(Collapse)
Vue.use(Comment)
Vue.use(Form)
Vue.use(FormModel)
Vue.use(Row)
Vue.use(Col)
Vue.use(Modal)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Badge)
Vue.use(Popover)
Vue.use(Dropdown)
Vue.use(Empty)
Vue.use(List)
Vue.use(Avatar)
Vue.use(Breadcrumb)
Vue.use(Steps)
Vue.use(Spin)
Vue.use(Menu)
Vue.use(Drawer)
Vue.use(Tooltip)
Vue.use(Alert)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Skeleton)
Vue.use(Popconfirm)
Vue.use(PageHeader)
Vue.use(Result)
Vue.use(Statistic)
Vue.use(Descriptions)
Vue.use(Space)

new Vue({
  // i18n,
  render: h => h(App)
}).$mount('#app')
