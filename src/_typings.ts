export type Functor<T, K> = (input: T) => K;
export type Predicate<T> = (input: T) => boolean;
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
