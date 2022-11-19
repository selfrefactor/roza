import {Functor} from './_typings'

/**
 * Curried list filter function to be used with `pipe` method
 */
export function map<T, K> (fn: Functor<T, K>){
  return (list: T[]) => list.map(fn);
}
