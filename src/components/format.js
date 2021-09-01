export const formJSON = [
  {
    name: '', // key：需要提交的参数
    label: '', // 要显示的对应字段
    type: 'default', // 扩展组件接口，默认defalut, ( custome的时候为自定义)
    component: '', // 值类型为text, select, radio, checkbox, datesingle, daterange, autocomplete, textarea,
    defaultValue: '', // 默认值
    props: {}, // 用于接收原生表单属性
    config: {}, // 一些组件用到的配置
    events: {}, // 一些事件绑定方法
    customRender: [
      // 多组件渲染的时候用到，配置跟外层类似，详见参数名
      {
        name: '',
        component: '',
        props: {},
        config: {},
        events: {}
      }
    ],
    isShow: Boolean || Function // 是否显示
  }
]
