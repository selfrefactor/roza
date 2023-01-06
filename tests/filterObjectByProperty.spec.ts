import {numbersOrStringsObject } from './mocks/mocks'
import { filterObjectByProperty, pipe } from '../src/_internals/index'

test('happy', () => {
    const result =pipe(
      numbersOrStringsObject,
      filterObjectByProperty(x => {
        // $ExpectType string
        x
        return x === 'a'
      })
    )
    expect(result).toEqual({ a: 1 })
})
