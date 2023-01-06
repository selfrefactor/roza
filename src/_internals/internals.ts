import { PredicateWithIndex } from "./typings"

export function filterObjectBy(predicate: any, iterable: any){
    const willReturn:any = {}

    for (const prop in iterable){
      if (predicate(
        prop, iterable[prop], iterable
      )){
        willReturn[ prop ] = iterable[ prop ]
      }
    }
  
    return willReturn
}

export const has = Object.prototype.hasOwnProperty

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
