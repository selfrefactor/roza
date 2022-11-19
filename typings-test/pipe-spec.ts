import {pipe, map} from 'roza'
import * as R from 'rambda'

describe('R.pipe', () => {
  it('happy', () => {
    const result = pipe(
      1,
      R.add(1)
    )
    result // $ExpectType number
  })
})
