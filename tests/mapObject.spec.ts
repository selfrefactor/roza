import { numbers, numbersAsConst } from './mocks'
import { mapObject, pipe } from '../src/index'

const double = (x: number) => x * 2

test('with pipe object', () => {
  // $ExpectType Record<"a" | "b", number>
  pipe(
    numbers,
    mapObject(double)
  )
  // $ExpectType Record<"a" | "b", number>
  pipe(
    numbersAsConst,
    mapObject(double)
  )
})

test('with simple object', () => {
  let result = mapObject(double)(numbers)

  expect(result).toEqual({
    a : 2,
    b : 4,
  })
})

test('with const keyword', () => {
  // $ExpectType Record<string, number>
  mapObject(double)(numbersAsConst)
})

test('property as second and input object as third argument', () => {
  mapObject((
    value: number
  ) => {
    // $ExpectType number
    value
    return value * 2
  })(numbers)
})

