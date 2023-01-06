import { Predicate } from "./_internals/typings";

/**
 * Advantage is that we receive same type of input
 * but the price is that we have to explicitly pass predicate type
 */
export const filterObjectAlt = <B>(predicate: Predicate<B>): (<A>(obj: A) => A) => {
  return (obj) => {
    const out: any = {}
    let changed = false
    for (const key in obj) {
        const a = obj[key]
        if ((predicate as any)(a)) {
          out[key] = a
        } else {
          changed = true
        }
    }
    return changed ? out : obj
  }
}
