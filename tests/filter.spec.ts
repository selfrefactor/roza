import { filter, pipe } from '../src/_internals/index'
import { objectList, Foo, FooStrict } from './mocks'

test('with explicit type', () => {
  // $ExpectType Foo[]
  const result = filter<Foo>(Boolean)(objectList)
  console.log(result)
})

test('narrowing type + pipe', () => {
  const makeItNarrow = (x: Foo): x is FooStrict => {
    if(!x.c) return false
    
    return x.c && x.c.length > 0
  }
  // $ExpectType FooStrict[]
  pipe(
    objectList,
    filter(makeItNarrow),
  )
})

test('without explicit type', () => {
  // $ExpectType unknown[]
  const result = filter(Boolean)(objectList)
  console.log(result)
})

test('with pipe', () => {
  pipe(
    objectList,
    filter(x => {
      // $ExpectType Foo
      x
      return true
    })
  )
})
