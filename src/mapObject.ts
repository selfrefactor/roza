import { PartialRecord } from "./_internals/typings";

export function mapObject<T, TResult, TKey extends string>(
  fn: (value: T, key: TKey, obj: Record<TKey, T>) => TResult,
): (obj: Record<TKey, T>) => Record<TKey, TResult>;
export function mapObject<T, TResult, TKey extends string>(
  fn: (value: T, key: TKey, obj: PartialRecord<TKey, T>) => TResult,
): (obj: Record<TKey, T>) => PartialRecord<TKey, TResult>;
export function mapObject<T, TResult>(
  fn: (
      value: T,
      key: string,
      obj: {
          [key: string]: T;
      },
  ) => TResult,
  obj: {
      [key: string]: T;
  },
): {
  [key: string]: TResult;
};

export function mapObject(fn: any){
  return (iterable: any) => {
    let index = 0
    const objKeys = Object.keys(iterable)
    const len = objKeys.length
    const willReturn:any = {}
  
    while (index < len){
      const key = objKeys[ index ]
      willReturn[ key ] = fn(
        iterable[ key ], key, iterable
      )
      index++
    }
  
    return willReturn
  }
}

