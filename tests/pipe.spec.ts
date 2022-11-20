// import { identity } from 'mocks'
import { map } from '../src/map'
import { pipe } from '../src/pipe'
import { Functor } from '../src/_internals/typings'

test('happy', () => {
  let result = pipe(1, x => x+1)
  expect(result).toBe(2)
})



function delay(ms: number){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(undefined)
    }, ms)
  })
}

function resolve<T, K> (fn: Functor<T, Promise<K>>){
  return (input: Promise<T>) => input.then(fn);
}

test('async',async () => {
  let result = await pipe([1,2,3], list => list.filter(x => x > 1), 
  async x => {
    await delay(100)
    return [...x,...x]
  },
  resolve(async (list) => {
     return list.filter(x => x > 1)
  })
  )
  console.log(result)
  expect(result).toEqual([2,3,2,3])
})
