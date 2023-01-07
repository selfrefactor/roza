import {filterWithIndex} from './_internals/internals'
import {Predicate} from './_internals/typings'

export const filterObject = <A>(
  predicate: Predicate<A>
): ((obj: Record<string, A>) => Record<string, A>) =>
  filterWithIndex((_, a) => predicate(a))
