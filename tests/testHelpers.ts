export const isString = (value: string | number): value is string => {
  return typeof value ==='string'
}
export const isNumber = (value: string | number): value is number => {
  return typeof value ==='number'
}
