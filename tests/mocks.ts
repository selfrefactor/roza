export interface Foo{
  a: number, b: string, c?: number[]
}
export type FooStrict = Pick<Foo, keyof Foo>

export const objectList:Foo[] = [
  {a:1, b: 'foo'}
]
