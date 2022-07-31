import { config } from 'dotenv'

if (process.env.NODE_ENV !== 'production') config()

// ? Postgres
export const PG_HOST: string = process.env.PG_HOST || 'localhost'
export const PG_PORT: number = process.env.PG_PORT
  ? parseInt(process.env.PG_PORT)
  : 5432
export const PG_USER: string = process.env.PG_USER || 'postgres'
export const PG_PASS: string = process.env.PG_PASS || 'postgres'
export const PG_DATABASE: string = process.env.PG_DATABASE || 'pgessync'

// ? Elasticsearch
export const ES_HOST: string = process.env.ES_HOST || 'http://localhost:9200'
export const ES_USER: string = process.env.ES_USER || 'elastic'
export const ES_PASS: string = process.env.ES_PASS || 'elastic'
