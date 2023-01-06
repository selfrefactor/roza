 export const filterObject: {
  // <A, B extends A>(refinement: Refinement<A, B>): (fa: Record<string, A>) => Record<string, B>
  <A>(predicate: Predicate<A>): <B extends A>(fb: Record<string, B>) => Record<string, B>
  <A>(predicate: Predicate<A>): (fa: Record<string, A>) => Record<string, A>
} = <A>(predicate: Predicate<A>): ((fa: Record<string, A>) => Record<string, A>) =>
filterWithIndex((_, a) => predicate(a))

===
// import { filterObjectBy } from "./_internals/internals";
// import { PartialRecord } from "./_internals/typings";

// export function filterObjectByProperty<T, TResult extends T, TKey extends string> (fn: (property: TKey) => boolean ): (obj: Record<TKey, T>) => PartialRecord<TKey, TResult>;
// export function filterObjectByProperty<T, TResult extends T, TKey extends string, TResultKey extends string> (fn: (property: TKey) => boolean ): (obj: Record<TKey, T>) => PartialRecord<TKey, TResult>;

// export function filterObjectByProperty(predicate: any){
//   return (iterable: any) => {
//     return filterObjectBy((property: any) => predicate(property), iterable)
//   }
// }
