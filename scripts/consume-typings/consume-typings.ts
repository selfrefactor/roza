import {filter}from 'remeda'
import {pipe}from 'fp-ts/function'
import * as FRecord from 'fp-ts/Record'
import {objectList, Foo} from '../../tests/mocks'

let a = filter<Foo>(x => true)(objectList)
console.log(a)

let goo = { k1: 1, k2: 2 }

let aa =pipe(goo, FRecord.filter(x => x > 1))
let aaa =FRecord.filter(x => x > 1)(goo)
  console.log(aa)    