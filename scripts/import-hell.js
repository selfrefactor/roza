import { existsSync } from 'fs'
import { readFile } from 'fs-extra'
import { resolve } from 'path'
import * as espree from "espree";


export async function importHell(){
  const content = (await readFile(`${__dirname}/assets/ramda/allPass.js`)).toString()  

  console.log(content, `content`)
  const ast = espree.parse(content, { ecmaVersion: 6, sourceType: 'module' });
  console.log(ast, `ast`)
  // return existsSync(`${__dirname}/import-hell.js`)
}
