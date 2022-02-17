
export const getStringTag = (value: unknown) => {
  return Object.prototype.toString.call(value).slice(8, -1)
}

export const hasOwnKey = (object: object, key: string) => {
  return Object.prototype.hasOwnProperty.call(object, key)
}

export const random = (min: number, max: number) => {
  min = Math.floor(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const isNumber = (value: unknown) => {
  return typeof value === 'number'
}

export const isString = (value: unknown) => {
  return typeof value === 'string'
}

export const isBoolean = (value: unknown) => {
  return typeof value === 'boolean'
}

export const isFunction = (value: unknown) => {
  return typeof value === 'function'
}

export const isSymbol = (value: unknown) => {
  return typeof value === 'symbol'
}

export const isBigInt = (value: unknown) => {
  return typeof value === 'bigint'
}

export const isArray = (value: unknown) => {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  }
  return getStringTag(value) === 'Array'
}

export const isDate = (value: unknown) => {
  return getStringTag(value) === 'Date'
}

export const isRegExp = (value: unknown) => {
  return getStringTag(value) === 'RegExp'
}

export const isPrimitive = (value: unknown) => {
  if (value === null) {
    return true
  }
  return typeof value !== 'object' && !isFunction(value)
}


export const isObject = (value: unknown) => {
  return !isPrimitive(value)
}

export const isPlainObject = (value: unknown) => {
  return getStringTag(value) === 'Object'
}

