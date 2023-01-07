import { filterObject, pipe } from '../src/_internals/index'

const obj = {
  a: 1,
  b: 2,
  c:3,
}

test('without pipe - passing type in library method', () => {
  const result = filterObject<number>((x) => {
      x // $ExpectType number
      return x <3
    })(obj)
  expect(result).toEqual({ a: 1, b: 2 })
})

test('without pipe - passing type in function', () => {
  const result = filterObject((x: number) => {
      x // $ExpectType number
      return x <3
    })(obj)
  expect(result).toEqual({ a: 1, b: 2 })
})

test('with pipe', () => {
  const result = pipe(
    obj,
    filterObject((x) => {
      x // $ExpectType number
      return x <3
    }),
  )
  expect(result).toEqual({ a: 1, b: 2 })
})

test('from rambda-scripts', () => {
  const PATHS = {
    'foo/bar': 'foo/bar',
    'foo/baz': 'foo/baz',
    'bar/foo': 'bar/foo',
  }
  const validPaths = pipe(
    PATHS,
    filterObject((filePath) => {
      filePath // $ExpectType string
      if (filePath.includes('foo/')) return true
      return false
    }),
  ) 
  validPaths // $ExpectType Record<string, string>
  expect(validPaths).toEqual({
    'foo/bar': 'foo/bar',
    'foo/baz': 'foo/baz',
  })  
})
