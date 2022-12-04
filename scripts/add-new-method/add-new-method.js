const {camelCase} = require('string-fn')
const {existsSync} = require('fs')
const {interpolate} = require('rambdax')
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
import { {{name}}, pipe } from '../src/index'

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
  if(existsSync(methodPath)) return
  const content = interpolate(methodTemplate, {name: methodName})
  await outputFile(methodPath, content)
}

async function createTestFile(methodName) {
  const testPath = resolve(
    __dirname,
    `../../tests/${methodName}.spec.ts`
  )
  if(existsSync(testPath)) return
  const content = interpolate(testTemplate, {name: methodName})

  await outputFile(testPath, content)
}

async function attachToExports(methodName) {
  const exportsPath = resolve(
    __dirname,
    `../../src/internals/index.ts`
  )
  const content = (await readFile(exportsPath)).toString()
  const exportStatement = `export * from './${methodName}';`
  if(content.includes(exportStatement)) return
  await outputFile(exportsPath, `${exportStatement}\n` + content)
}

async function addNewMethod(methodName) {
  await createMethodFile(methodName)
  await createTestFile(methodName)
  await attachToExports(methodName)
  log(`${methodName} is created`, 'success')
}

void (async function cli() {
  if (process.argv.length !== 3) {
    throw new Error('Missing method name or too many arguments')
  }
  await addNewMethod(camelCase(process.argv[2]))
})()
