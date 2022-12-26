export type Functor<T, K> = (input: T) => K;
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
export interface Refinement<A, B extends A> {
  (a: A): a is B
}
export interface Predicate<A> {
  (a: A): boolean
}
export type PredicateWithIndex<I, A> = (i: I, a: A) => boolean

