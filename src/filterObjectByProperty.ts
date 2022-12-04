import { filterObjectBy } from "./_internals/internals";
import { PartialRecord } from "./_internals/typings";

export function filterObjectByProperty<T, TResult extends T, TKey extends string> (fn: (property: TKey) => boolean ): (obj: Record<TKey, T>) => PartialRecord<TKey, TResult>;
export function filterObjectByProperty<T, TResult extends T, TKey extends string, TResultKey extends string> (fn: (property: TKey) => boolean ): (obj: Record<TKey, T>) => PartialRecord<TKey, TResult>;

export function filterObjectByProperty(predicate: any){
  return (iterable: any) => {
    return filterObjectBy((property: any) => predicate(property), iterable)
  }
}

