import { filterObject, pipe } from '../src/_internals/index'

test('', () => {
  const obj = {
    a: 1,
    b: 2,
    c:3,
  }
  const result = pipe(
    obj,
    filterObject((x) => {
      x // $ExpectType number
      return x <3
    }),
  )
  expect(result).toEqual({ a: 1, b: 2 })
})
