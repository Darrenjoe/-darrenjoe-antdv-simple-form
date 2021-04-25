/*
 * @Author: your name
 * @Date: 2021-01-15 11:37:36
 * @LastEditTime: 2021-02-07 16:39:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \emanifest\src\components\EMFormList\core.js
 */
import AntdMap from './antd-map'
import { isFunction } from '../../utils/tools'

export function computeFormItem(config, form, rules) {
  const item = { ...config }
  // 计算组件真实对应的名称并传入一些默认配置
  const res = AntdMap[item.type] || AntdMap['input']
  item.type = res.component
  item.props = Object.assign({}, res.props, item.props)

  // 处理联动
  if (isFunction(item.getProps)) {
    Object.assign(item.props, item.getProps(form))
  }

  item._isShow = isFunction(item.isShow) ? item.isShow(form) : item.isShow
  // 处理校验
  // item._rule = getRule(item)

  // 设置内容宽度
  if (item.contentWidth) {
    const temp = typeof item.contentWidth === 'number' ? `${item.contentWidth}px` : item.contentWidth
    item.props.style = { width: temp }
  }

  // 加入验证规则
  item.rules = []
  const ruleKeys = rules ? Object.keys(rules) : []
  if (ruleKeys.includes(item.name)) {
    item.rules = rules[item.name]
  }

  // 加入配置项
  item.config = item.config ? { ...item.config } : {}

  const rulesKeys = Object.keys(rules)
  if (rulesKeys.includes(item.name)) item.config = { ...item.config, className: 'isRequired' }

  return item
}
