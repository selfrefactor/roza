import { PartialRecord } from "./_internals/typings"

export function filterObject<T, TResult extends T, TKey extends string> (fn: (value: T, key: TKey, obj: Record<TKey, T>) => value is TResult ): (obj: Record<TKey, T>) => PartialRecord<TKey, TResult>;
export function filterObject<T, TResult extends T, TKey extends string> (fn: (value: T, key: TKey, obj: Record<TKey, T>) => boolean): (obj: Record<TKey, T>) => PartialRecord<TKey, TResult>;

export function filterObject(predicate: any){
  return (iterable: any) => {
    const willReturn:any = {}

    for (const prop in iterable){
      if (predicate(
        iterable[ prop ], prop, iterable
      )){
        willReturn[ prop ] = iterable[ prop ]
      }
    }
  
    return willReturn
  }
}

