/*
 * @Author: Darren.Xiong
 * @Date: 2021-01-19 15:43:17
 * @LastEditTime: 2021-01-19 15:44:05
 * @LastEditors: Please set LastEditors
 * @Description: 通用表单组件固定格式说明
 * @FilePath: \emanifest\src\components\EMFormList\format.js
 */
//  form表单的固定格式
export const formJSON = [
  {
    name: '', // key：需要提交的参数
    label: '', // 要显示的对应字段
    type: '', // 值类型为text, select, radio, checkbox, datesingle, daterange, autocomplete, textarea, ( slot的时候为自定义)
    defaultValue: '', // 默认值
    optionsList: [
      {
        label: '',
        value: ''
      }
    ], // "type为select, radio, checkbox时有值, 否则为空"
    slotList: [],
    props: {}, // 用于接收原生表单属性
    isShow: Boolean || Function // 是否显示
  }
]
