import { Predicate } from "./_internals/typings"

export function filter<T, S extends T> (
  fn: (input: T) => input is S
): (array: T[]) => S[];
export function filter<T> (fn: Predicate<T>): (array: T[]) => T[];

export function filter<T> (fn: Predicate<T>){
  return (list: T[]) => list.filter(fn);
}
