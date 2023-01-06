/**
 * Numbers
 */
export interface Numbers{
  [key: string]: number
}
export interface Strings{
  [key: string]: string
}
export interface NumbersOrStrings{
  [key: string]: number | string
}
export const numbers = {
  a:1,
  b:2
}
export const numbersAsConst = {
  a:1,
  b:2
} as const
export const numbersObject: Numbers = {
  a:1,
  b:2
}
export const numbersOrStringsObject = {
  a:1,
  b:'foo'
}

/**
 * Objects
 */
 export interface Foo{
  a: number, b: string, c?: number[]
}
export type FooStrict = Pick<Foo, keyof Foo>
export interface Bar{
  a: number, b: number
}

export const objectList:Foo[] = [
  {a:1, b: 'foo'}
]

export const identity = <T>(x:T) => x


