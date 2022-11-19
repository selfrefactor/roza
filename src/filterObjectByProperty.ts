import { PartialRecord } from "./_typings";

export function filterObjectByProperty<T, TResult extends T, TKey extends string> (fn: (input: T) => input is TResult ): (obj: Record<TKey, T>) => PartialRecord<TKey, TResult>;

export function filterObjectByProperty(predicate: any){
  return (iterable: any) => {
    const willReturn:any = {}

    for (const prop in iterable){
      if (predicate(
        prop
      )){
        willReturn[ prop ] = iterable[ prop ]
      }
    }
  
    return willReturn
  }
}

