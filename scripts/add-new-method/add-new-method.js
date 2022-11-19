const {camelCase} = require('string-fn')
const {existsSync} = require('fs')
const {interpolate, replace} = require('rambdax')
const {log} = require('helpers-fn')
const {readFile, outputFile} = require('fs-extra')
const {resolve} = require('path')

const methodTemplate = `
export function {{name}}<T> (fn: any): (array: T[]) => T[];

export function {{name}}(fn: any) {
  return (itarable: any) => {

  }
}
`.trim()

const testTemplate = `
import { {{name}} } from './{{name}}'

test('happy', () => {
  const result = {{name}}()
  console.log(result)
})
`.trim()

const typescriptTestTemplate = `
import { {{name}} } from 'roza'
import * as R from 'rambda'

const input = 

describe('R.{{name}}', () => {
  it('happy', () => {
    const result = {{name}}(input)
    
    result // $ExpectType number
  })
})
`.trim()

async function createMethodFile(methodName) {
  const methodPath = resolve(
    __dirname,
    `../../src/${methodName}.ts`
  )
  return
  const content = interpolate(methodTemplate, {name: methodName})
  await outputFile(methodPath, content)
}

async function createTestFile(methodName) {
  const testPath = resolve(
    __dirname,
    `../../src/${methodName}.spec.ts`
  )
  console.log(testPath, `testPath`)
  return
  const content = interpolate(testTemplate, {name: methodName})

  await outputFile(testPath, content)
}

async function createTypescriptTestFile(methodName) {
  const typescriptTestPath = resolve(
    __dirname,
    `../../typings-test/${methodName}-spec.ts`
  )
  console.log(typescriptTestPath, `typescriptTestPath`)
  // const content = interpolate(typescriptTestTemplate, {name: methodName})
  // await outputFile(typescriptTestPath, content)
}

async function addNewMethod(methodName) {
  await createMethodFile(methodName)
  await createTestFile(methodName)
  await createTypescriptTestFile(methodName)
  log(`${methodName} is created`, 'success')
}

void (async function cli() {
  if (process.argv.length !== 3) {
    throw new Error('Missing method name or too many arguments')
  }
  await addNewMethod(camelCase(process.argv[2]))
})()
