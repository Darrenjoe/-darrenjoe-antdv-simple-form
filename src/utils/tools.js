// is-type
const toString = {}.toString
export function isType(value, type) {
  return toString.call(value) === '[object ' + type + ']'
}

/**
 * 是否为函数
 * @param  {*} fn 对象
 * @return {Boolean}  是否函数
 */
export function isFunction(value) {
  return isType(value, 'Function')
}
