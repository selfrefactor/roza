import { filter } from '../src/filter'
import { objectList } from './mocks'

test('with object list', () => {
  // $ExpectType unknown[]
  const result = filter(Boolean)(objectList)
  console.log(result)
})
