import { pipe } from './pipe'

test('happy', () => {
  let result = pipe(1, x => x+1)
  expect(result).toBe(2)
})
