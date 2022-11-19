import {Functor} from './_typings'

export function map<T, K> (fn: Functor<T, K>){
  return (list: T[]) => list.map(fn);
}
