
export const getString = (value: unknown) => {
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

export const isObject = (value: unknown) => {
  if (value === null) {
    return false
  }
  const type = typeof value
  return type === 'object' || type === 'function'
}

export const isPrimitive = (value: unknown) => {
  return !isObject(value)
}