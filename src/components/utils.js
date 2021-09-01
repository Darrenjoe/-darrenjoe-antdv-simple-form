export function isFunction(value) {
  return isType(value, 'Function')
}

// is-type
const toString = {}.toString
export function isType(value, type) {
  return toString.call(value) === '[object ' + type + ']'
}

export function isObject(data) {
  return typeof data === 'object' && data !== null
}
