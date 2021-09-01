# @darrenjoe/antdv-simple-form

根据不同的配置完成表单的渲染和操作。可自定义拖拽

[Github 源码地址](https://github.com/Darrenjoe/-darrenjoe-antdv-simple-form/tree/main)

## 何时使用

当表单元素很多，内容不那么复杂的时候使用

引用方式：

```javascript
import DJoeSimpleForm from '@darrenjoe/antdv-simple-form'

export default {
  components: {
    DJoeSimpleForm
  }
}
```

## 代码演示

```html
<DJoeSimpleForm
  :myForm.sync="formData"
  :formRenderList="formRenderList"
  :formRules="formRules"
  :autoCompleteSource="autoCompleteSource"
  @on-auto-select="handleAutoSelect"
  @on-auto-search="handleAutoSearch"
  @on-button-click="handleAutoCompleteClick"
  @on-change="handleFormItemChange"
  @on-blur="handleFormItemBlur"
  @on-focus="handleFormItemFocus"
>
</DJoeSimpleForm>
```

## API

| 参数               | 说明                                   | 类型   | 默认值                                                                                                                                                                                                      |
| ------------------ | -------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| myForm             | 表单对象                               | Object | {key: value}                                                                                                                                                                                                |
| formRenderList     | 列表的渲染配置                         | Array  | -                                                                                                                                                                                                           |
| formRules          | 列表的规则                             | Object | -                                                                                                                                                                                                           |
| formLayout         | 列表的自适应删栏                       | Object | { xs: 24, sm: 24, md: 12, lg: 12, xl: 12, xxl: 8, labelCol: { span: 8 }, wrapperCol: {span: 16 }                                                                                                            |
| autoCompleteSource | 自动完成列表的渲染配置                 | Object | 以 name 为单个 list 的键值，值为 Array(请用\$set 方法插值，否则监听不到)                                                                                                                                    |
| gridLayout         | 拖拽布局配置该项存在时 formLayout 失效 | Array  | 参考 vue-grid-layout 的 item 配置                                                                                                                                                                           |
| gridConfigs        | 拖拽布局 props                         | Object | 参考 vue-grid-layout 配置 - { 'col-num': 12, 'row-height': 30, 'is-draggable': true, 'is-resizable': false, 'is-mirrored': false, 'vertical-compact': false, margin: [10, 10], 'use-css-transforms': true } |

> gridLayout, gridConfigs 使用时请自行安装 vue-grid-layout

---

### formRenderList

| 参数         | 说明                                                       | 类型                                      | 默认值             |
| ------------ | ---------------------------------------------------------- | ----------------------------------------- | ------------------ |
| name         | key：需要提交的参数                                        | String                                    | -                  |
| label        | 要显示的 label                                             | String                                    | -                  |
| type         | default 默认、custom 自定义                                | String                                    | default            |
| component    | 组件类型                                                   | String                                    | input              |
| defaultValue | 默认值                                                     | String                                    | -                  |
| props        | 用于接组件属性                                             | Object                                    | -                  |
| config       | 用于接收一些单独配置项，比如特别的值处理(大部分基于 antdV) | Object                                    | -                  |
| events       | 组件绑定的事件                                             | String(见事件表)/Function(e, configs, vm) | -                  |
| customRender | 当 component=='baseInputGroup'                             | Array                                     | 见 customRender 表 |
| isShow       | 是否显示                                                   | Boolean/ Function                         | true               |

---

### formRenderList - component

> 组件以 Config 结尾表示遵循原生有部分修改、组件以 Base 开头表示本表单组件自定义组件

| 参数                                                                                                                | 说明                                   | 类型   | 默认值 |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------ | ------ |
| AInput、ASelect、ARadio、ARadioGroup、ACheckbox、ACheckboxGroup、AInputNumber、ADatePicker、ARangePicker、ACascader | AntdV 组件，详细配置请参考 AntdV 官网  | String | AInput |
| ACheckboxConfig                                                                                                     | 可配置选项栅格的 checkBox              | String | -      |
| AButtonConfig                                                                                                       | 按钮                                   | String | -      |
| AAutocompleteConfig                                                                                                 | 自动完成组件                           | String | -      |
| BaseInputGroup                                                                                                      | 组合输入框（配置见 BaseInputGroup 表） | String | -      |

---

### formRenderList - props

1. 具体参照 antdV 的组件 props 和一些原生属性
2. options、dataSource 可以传入 String 或者 Object, String 的值会绑定到 autoCompleteSource 中
3. 自动完成组件的 optionLabelProp 请传入'value'

---

### formRenderList - Config

> 下面两项是基础配置，具体见自定义组件输入

| 参数      | 说明                          | 类型   | 默认值 |
| --------- | ----------------------------- | ------ | ------ |
| layout    | 该组件的自定义栅格            | Object | -      |
| decorator | 该组件 key 的表单初始化配置项 | Object | -      |

---

### formRenderList - events

> 对子项的数据监听事件绑定，可传入 String(为本表单组件内置方法，见下内置方法 Methods 表)，可传入 Function(e, configs, vm)

---

### formRenderList - customRender

> 包含 name,component,props,config, events(个属性与上面相同)，数组第一项与最外层的同属性继承，但 name 和 component 必须指定

---

### 回调方法

| 参数            | 说明                         | 类型                                | 默认值 |
| --------------- | ---------------------------- | ----------------------------------- | ------ |
| on-change       | 自动完成值改变时触发         | Function( name, value )             | -      |
| on-blur         | 输入框失焦时的触发           | Function( configs )                 | -      |
| on-blur         | 输入框失焦时的触发           | Function( configs )                 | -      |
| on-focus        | 输入框获取焦点时触发         | Function( configs )                 | -      |
| on-custom       | 自定义事件、配合 events 使用 | Function( configs )                 | -      |
| on-auto-search  | 自动完成输入搜索时触发       | Function( { value, name } )         | -      |
| on-auto-select  | 自动完成选中时触发           | Function( { value, option, name } ) | -      |
| on-button-click | 输入框按钮点击时触发         | Function( configs )                 | -      |

---

### 组件方法 - Methods

| 参数                    | 说明                                              | 类型                   | 默认值 |
| ----------------------- | ------------------------------------------------- | ---------------------- | ------ |
| submit                  | 验证表单并返回 myform(没有做双向绑定，需手动操作) | Function(form, myform) | -      |
| reset                   | 重置表单                                          | Function()             | -      |
| clear                   | 清空表单                                          | Function()             | -      |
| \_getFieldsValue        | 获取表单所有字段                                  | Function()             | -      |
| handleFormItemBlur      | 失焦事件                                          | Function()             | -      |
| handleFormItemFocus     | 获取焦点                                          | Function()             | -      |
| handleAutoSelect        | 自动完成选中事件                                  | Function()             | -      |
| handleAutoSearch        | 自动完成查询                                      | Function()             | -      |
| handleAutoCompleteClick | 按钮点击                                          | Function()             | -      |
| handleCustomEvents      | 自定义事件                                        | Function()             | -      |

#### 注释

在父组件操作 myform 数据的时候，如果有多个参数请用对象的方法一次性赋值，避免出现本组件在同步数据时关闭同步通道

---

---

---

## 自定义组件

---

### AAutoCompleteConfig

## props

1. 参照 antdV 自动完成组件
2. dataSource - String(name)/Object
3. optionLabelProp: 'value'

## config

| 参数                        | 说明                      | 类型   | 默认值           |
| --------------------------- | ------------------------- | ------ | ---------------- |
| autocompleteSlotType        | 默认显示和 table 显示     | String | ' ' (table 可选) |
| autocompleteSlotTableConfig | 为 table 下拉时的数据配置 | Array  | -                |
| autocompleteSlotName        | slot 的具名插槽配置       | String | -                |
| buttonConfig                | 关于按钮的配置项          | Object | -                |

## events

> 以 button-开头的事件将绑定到按钮上

### config - autocompleteSlotTableConfig

| 参数  | 说明                | 类型   | 默认值 |
| ----- | ------------------- | ------ | ------ |
| title | 表头所显示 label    | String | -      |
| key   | 该列对应的 value 值 | String | -      |
| span  | 栅格配置            | Number | -      |

### config - buttonConfig

> text 为按钮显示值，其余 props 与官方组件一致

---

### AButtonConfig

## props

1. text 为按钮显示值，其余 props 与官方组件一致
2. 其他属性配置同基本组件

---

### ACheckboxConfig

## props

1. config 中 layout 已说明

---

### BaseInputGroup

> 该组件包含多项配置, customRender 作为渲染基础

---
