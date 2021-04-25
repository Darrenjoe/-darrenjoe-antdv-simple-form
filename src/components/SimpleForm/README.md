<!--
 * @Author: your name
 * @Date: 2021-01-20 14:05:18
 * @LastEditTime: 2021-02-07 14:52:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \emanifest\src\components\EMFormList\README.md
-->

# EMFormList 表单整体组件

根据不同的配置完成表单的渲染和操作。

## 何时使用

当表单元素很多，内容不那么复杂的时候使用

引用方式：

```javascript
import EMFormList from '@/components/EMFormList'

export default {
  components: {
    EMFormList
  }
}
```

## 代码演示

```html
<EMFormList
  :myForm.sync="formData"
  :formRenderList="formRenderList"
  :autoCompleteSource="autoCompleteSource"
></EMFormList>
```

## API

| 参数               | 说明                   | 类型   | 默认值                                                                   |
| ------------------ | ---------------------- | ------ | ------------------------------------------------------------------------ |
| myForm             | 表单对象               | Object | {key: value}                                                             |
| formRenderList     | 列表的渲染配置         | Object | -                                                                        |
| formRules          | 列表的规则             | Object | -                                                                        |
| formLayout         | 列表的自适应删栏       | Object | -                                                                        |
| autoCompleteSource | 自动完成列表的渲染配置 | Object | 以 name 为单个 list 的键值，值为 Array(请用\$set 方法插值，否则监听不到) |

---

### formRenderList

| 参数         | 说明                                             | 类型                   | 默认值 |
| ------------ | ------------------------------------------------ | ---------------------- | ------ |
| name         | key：需要提交的参数                              | String                 | -      |
| label        | 要显示的 label                                   | String                 | -      |
| type         | 值类型为 text, select 等                         | String                 | text   |
| defaultValue | 默认值                                           | String                 | -      |
| options      | type 为 select, radio, checkbox 时有值, 否则为空 | {label: '', value: ''} | -      |
| slotList     | 当 type 为自定义时自定义传值传值                 | Any                    | -      |
| props        | 用于接收原生表单属性                             | Object                 | -      |
| config       | 用于接收一些单独配置项，比如特别的值处理         | Object                 | -      |
| isShow       | 是否显示                                         | Boolean/ Function      | true   |

---

### formRenderList - Type

| 参数             | 说明             | 类型   | 默认值 |
| ---------------- | ---------------- | ------ | ------ |
| input            | 普通输入框       | String | -      |
| select           | 下拉选择框       | String | -      |
| radio            | 单选列表         | String | -      |
| checkbox         | 多选列表         | String | -      |
| datesingle       | 单独日期选择     | String | -      |
| daterange        | 范围日期选择     | String | -      |
| autocomplete     | 自动完成         | String | -      |
| baseAutocomplete | 自定义列自动完成 | String | -      |
| textarea         | 多行文本框       | String | -      |
| slot             | 自定义组件名     | String | -      |

---

### 回调方法

| 参数                    | 说明                       | 类型                                 | 默认值 |
| ----------------------- | -------------------------- | ------------------------------------ | ------ |
| handleAutoSelect        | 自动完成选中时触发         | Function( value, option, name, type) | -      |
| handleAutoSearch        | 自动完成输入搜索时触发     | Function( value, name)               | -      |
| handleAutoChange        | 自动完成值改变时触发       | Function( value, name)               | -      |
| handleAutoCompleteClick | 自动完成搜索按钮点击时触发 | Function( name， type)               | -      |

---

### Slot

| 参数                 | 说明                   | 类型   | 默认值 |
| -------------------- | ---------------------- | ------ | ------ |
| autoCompleteSlot     | 自动完成下拉组件       | String | -      |
| baseAutoCompleteSlot | 自定义自动完成下拉组件 | String | -      |

---

### 组件方法

| 参数             | 说明                                              | 类型                   | 默认值 |
| ---------------- | ------------------------------------------------- | ---------------------- | ------ |
| submit           | 验证表单并返回 myform(没有做双向绑定，需手动操作) | Function(form, myform) | -      |
| \_getFieldsValue | 获取表单所有字段                                  | Function(form)         | -      |

#### 注释

在父组件操作 myform 数据的时候，如果有多个参数请用对象的方法一次性赋值，避免出现本组件在同步数据时关闭同步通道