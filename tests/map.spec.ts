import { map, pipe } from '../src/_internals/index'
import { objectList, Foo, identity, Bar } from './mocks'

test('without explicit type', () => {
  // $ExpectType Foo[]
  const result = map(identity)(objectList)
  expect(result).toEqual(objectList)
})

test('with pipe', () => {
  // $ExpectType Bar[]
  let result =pipe(
    objectList,
    map<Foo, Bar>(x => {
      // $ExpectType Foo
      x
      return {...x, b: x.b.length}
    })
  )
  expect(result).toEqual([{a:1, b: 3}])
})
