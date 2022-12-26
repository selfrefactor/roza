import { has } from "./_internals/internals"
import { Predicate, PredicateWithIndex, Refinement } from "./_internals/typings"

export function filterWithIndex<A>(
  predicateWithIndex: PredicateWithIndex<string, A>
): (fa: Record<string, A>) => Record<string, A> {
  return (fa) => {
    const out: Record<string, A> = {}
    let changed = false
    for (const key in fa) {
      if (has.call(fa, key)) {
        const a = fa[key]
        if (predicateWithIndex(key, a)) {
          out[key] = a
        } else {
          changed = true
        }
      }
    }
    return changed ? out : fa
  }
}

export const filterObject: {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Record<string, A>) => Record<string, B>
  <A>(predicate: Predicate<A>): <B extends A>(fb: Record<string, B>) => Record<string, B>
  <A>(predicate: Predicate<A>): (fa: Record<string, A>) => Record<string, A>
} = <A>(predicate: Predicate<A>): ((fa: Record<string, A>) => Record<string, A>) =>
filterWithIndex((_, a) => predicate(a))


