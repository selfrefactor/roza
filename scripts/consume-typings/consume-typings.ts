import {filter}from 'remeda'
import {objectList, Foo} from '../../tests/mocks'

let a = filter<Foo>(x => true)(objectList)
console.log(a)
