import { Predicate } from "./_internals/typings";

export const filterObject = <A>(predicate: Predicate<A>): ((obj: Record<string, A>) => Record<string, A>) => {
  return (obj) => {
    const out: Record<string, A> = {}
    let changed = false
    for (const key in obj) {
        const a = obj[key]
        if (predicate(a)) {
          out[key] = a
        } else {
          changed = true
        }
    }
    return changed ? out : obj
  }
}

