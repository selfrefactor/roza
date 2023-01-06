import { Predicate } from "./_internals/typings";

export const filterObjectByProperty = <A>(predicate: Predicate<string>): ((obj: Record<string, A>) => Record<string, A>) => {
  return (obj) => {
    const out: any = {}
    let changed = false
    for (const key in obj) {
        const a = obj[key]
        if (predicate(key)) {
          out[key] = a
        } else {
          changed = true
        }
    }
    return changed ? out : obj
  }
}

