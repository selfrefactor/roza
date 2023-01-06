import { Predicate } from "../src/_internals/typings"

export function filter(fn: Predicate<any>): <T>(array: T[]) => T[];

/**
 * Using any as TS cannot deal with simple `filter(Boolean)([1,2,3])`
 */
export function filter(fn: Predicate<any>){
  return <T>(list: T[]) => list.filter(fn);
}
