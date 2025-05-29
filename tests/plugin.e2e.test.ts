import { describe, it, expect, beforeAll, afterAll } from 'vitest'

import dotenv from 'dotenv'
dotenv.config()

import { getPayload } from 'payload'
import configPromise from '../dev/payload.config.js'
import type { CollectionSlug } from 'payload'

describe('Products Plugin E2E', () => {
  let localPayload: Awaited<ReturnType<typeof getPayload>>

  beforeAll(async () => {
    process.env.PAYLOAD_CONFIG_PATH = new URL('../dev/payload.config.ts', import.meta.url).pathname
    const config = await configPromise

    localPayload = await getPayload({ config })
  })

  it('should have products collection registered', () => {
    expect(localPayload.collections['products' as CollectionSlug]).toBeDefined()
  })

  it('should create a product', async () => {
    const result = await localPayload.create({
      collection: 'products' as CollectionSlug,
      data: {
        productName: 'Test Product',
      } as any,
    })

    expect(result).toMatchObject({
      productName: 'Test Product',
      id: expect.any(Number),
    })
  })

  afterAll(async () => {
    await localPayload.delete({
      collection: 'products' as CollectionSlug,
      where: {
        productName: {
          equals: 'Test Product',
        },
      },
    })
  })
})

/*
describe('Sanity test', () => {
  it('should pass basic truthy check', () => {
    expect(true).toBe(true)
  })
})*/
