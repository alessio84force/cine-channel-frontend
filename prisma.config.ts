import { defineConfig } from '@prisma/config'
import * as path from 'node:path'
import * as fs from 'node:fs'
import * as dotenv from 'dotenv'

// Carica .env.local se esiste, altrimenti .env
const envLocal = path.resolve('.env.local')
if (fs.existsSync(envLocal)) {
  dotenv.config({ path: envLocal })
} else {
  dotenv.config()
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  // Qui Prisma troverà la variabile
  datasource: {
    url: process.env.DATABASE_URL!,
  },
})
