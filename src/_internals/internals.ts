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
