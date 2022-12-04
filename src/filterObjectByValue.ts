import { filterObjectBy } from "./_internals/internals";
import { PartialRecord } from "./_internals/typings";

export function filterObjectByValue<T, TResult extends T, TKey extends string> (fn: (value: T) => value is TResult ): (obj: Record<TKey, T>) => PartialRecord<TKey, TResult>;
export function filterObjectByValue<T, TKey extends string> (fn: (value: T) => boolean ): (obj: Record<TKey, T>) => PartialRecord<TKey, T>;

export function filterObjectByValue(predicate: any){
  return (iterable: any) => {
    return filterObjectBy((property: any) => predicate(iterable[property]), iterable)
  }
}

