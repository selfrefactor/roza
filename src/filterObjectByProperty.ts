import {filterWithIndex} from './_internals/internals'
import {Predicate} from './_internals/typings'

export const filterObjectByProperty = <A>(
  predicate: Predicate<string>
): ((obj: Record<string, A>) => Record<string, A>) =>
  filterWithIndex(property => predicate(property))
