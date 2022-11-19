import { Predicate } from "./_typings";

export function all<T>(predicate: Predicate<T>): (list: T[]) => boolean;

export function all(predicate: any) {
  return (itarable: any) => {
    for (let i = 0; i < itarable.length; i++){
      if (!predicate(itarable[ i ])) return false
    }
  
    return true
  }
}
