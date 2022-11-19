import {numbersOrStringsObject } from './mocks'
import { isNumber, isString } from './testHelpers'
import { filterObjectByProperty, pipe } from '../src/index'

test('with pipe object - is number', () => {
  // $ExpectType PartialRecord<string, number>
  pipe(
    numbersOrStringsObject,
    filterObjectByProperty(isNumber)
  )
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
