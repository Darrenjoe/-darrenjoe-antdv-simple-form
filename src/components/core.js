import AntdMap from './antd-map'
import { gridLayoutDefault } from './layout'
import { isFunction, isObject } from './utils'

export function computeFormItem(vm, config, layout) {
  let item = {
    type: 'defalut',
    defaultValue: '',
    isShow: true,
    ...config
  }

  // 保存自定义可拖拽layout
  item.layout = layout[item.name] || { ...gridLayoutDefault, i: item.name }
  // 处理显示或隐藏
  item.isShow = isFunction(item.isShow) ? item.isShow(item.isShow) : item.isShow

  // name, component, props, config, events, rules
  const currentComponentsConfig = getComponentsConfigs(vm, config)

  item = { ...item, ...currentComponentsConfig }

  if (config.customRender && config.customRender.length) {
    const { customRender } = config
    const newCustomRender = []
    customRender &&
      customRender.forEach(comp => {
        const compItem = getComponentsConfigs(vm, comp, config)
        newCustomRender.push(compItem)
      })
    item.customRender = newCustomRender
  }

  return item
}

/**
 *
 * @param {vue实例} vm
 * @param {当前配置属性} currentConfig
 * @param {整体的配置属性} configs
 * @returns
 */
function getComponentsConfigs(vm, currentConfig, configs) {
  const { formRules } = vm
  const componentsConfigs = {}

  // name
  componentsConfigs.name = currentConfig.name || configs.name

  // component
  const resComp = AntdMap[currentConfig.component] || AntdMap['input']
  componentsConfigs.component = resComp.component
  componentsConfigs.props = Object.assign({}, resComp.props, currentConfig.props)
  componentsConfigs.events = Object.assign({}, resComp.events, currentConfig.events)

  // props
  const currentProps = getProps(vm, componentsConfigs.props, componentsConfigs)
  componentsConfigs.props = { ...componentsConfigs.props, ...currentProps }

  // events
  const currentEvents = getEvents(vm, componentsConfigs.events, componentsConfigs)
  componentsConfigs.events = { ...componentsConfigs.events, ...currentEvents }

  // rules
  componentsConfigs.rules = formRules[componentsConfigs.name] || []

  // config
  let className = '' // 确定是否必填类名
  if (componentsConfigs.rules.length) {
    componentsConfigs.rules.forEach(element => {
      if (element.required) {
        className = 'isRequired'
      }
    })
  }
  componentsConfigs.config = {
    ...(configs && configs.config ? configs.config : {}),
    ...currentConfig.config,
    className
  }

  return componentsConfigs
}

/**
 *
 * @param {vue实例} vm
 * @param {当前props} props
 * @param {当前的配置属性} config
 * @returns
 */
function getProps(vm, props, config) {
  const { name } = config
  const resProps = { ...props }

  const { dataSource, options, treeData } = props

  if (dataSource) resProps['dataSource'] = bindOptions(vm, dataSource, name)
  if (options) resProps['options'] = bindOptions(vm, options, name)
  if (treeData) resProps['treeData'] = bindOptions(vm, options, name)

  return resProps
}

/**
 *
 * @param {vue实例} vm
 * @param {当前options} options
 * @param {name} name
 * @returns
 */
function bindOptions(vm, options, name) {
  return !isObject(options) ? vm['autoCompleteSourceData'](options || name) : options
}

/**
 *
 * @param {vue实例} vm
 * @param {当前events} events
 * @param {当前configs} configs
 * @returns
 */
function getEvents(vm, events, configs) {
  const resEvents = {}
  for (const event in events) {
    if (isFunction(events[event])) {
      resEvents[event] = e => events[event](e, configs, vm)
    } else {
      resEvents[event] = e => {
        vm[events[event]](e, configs)
      }
    }
  }

  return resEvents
}
