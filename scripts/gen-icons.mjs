import sharp from 'sharp'
import { readFile } from 'fs/promises'

const svg = await readFile('public/brand/logo-icon-gold.svg')
const OUT = 'public/icons'
await Promise.all([512,384,256,192,180,152,144,128,120,96,72,64,48,32].map(async s=>{
  await sharp(svg).resize(s,s,{fit:'contain', background:{r:0,g:0,b:0,alpha:0}}).png().toFile(`${OUT}/icon-${s}.png`)
}))
console.log('PNG icons written to', OUT)
