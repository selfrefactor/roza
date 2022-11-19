export function pipe<A, B> (value: A, op1: (input: A) => B): B;
export function pipe<A, B, C> (
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C
): C;

export function pipe<A, B, C, D> (
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D
): D;

export function pipe<A, B, C, D, E> (
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E
): E;

export function pipe<A, B, C, D, E, F> (
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F
): F;

export function pipe<A, B, C, D, E, F, G> (
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G
): G;

export function pipe<A, B, C, D, E, F, G, H> (
  value: A,
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H
): H;

/**
 * Perform left-to-right function composition.
 */
export function pipe (input: any, ...operations: ((x: any) => any)[]): any{
  if (operations.length === 0)
    throw new Error('pipe requires at least one argument');
  const fn = operations.shift();
  let result = fn!(input);
  while (operations.length > 0){
    result = operations.shift()!(result);
  }

  return result;
}
