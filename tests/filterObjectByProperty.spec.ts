import {numbersOrStringsObject } from './mocks/mocks'
import { isString } from './testHelpers'
import { filterObjectByProperty, pipe } from '../src/_internals/index'

test('with pipe object - is number', () => {
  // $ExpectType PartialRecord<string, number>
  const result =pipe(
    numbersOrStringsObject,
    filterObjectByProperty(x => x === 'a')
  )
  expect(result).toEqual({ a: 1 })
})

test('with pipe object - is string', () => {
  // $ExpectType PartialRecord<string, string>
  let result = pipe(
    numbersOrStringsObject,
    filterObjectByProperty(isString)
  )
  // $ExpectType string | undefined
  result.aa
})

test('predicate is only one input', () => {
  (filterObjectByProperty as any)((x: any, value: any) => {
    expect(value).toBeUndefined()
  })(numbersOrStringsObject)
})
