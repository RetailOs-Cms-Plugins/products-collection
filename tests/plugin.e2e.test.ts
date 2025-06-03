import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { getPayload } from 'payload'
import configPromise from '../dev/payload.config.js'
import type { CollectionSlug } from 'payload'
import dotenv from 'dotenv'
dotenv.config()

describe('Products Plugin E2E', () => {
  let localPayload: Awaited<ReturnType<typeof getPayload>>
  let createdProduct: any

  beforeAll(async () => {
    process.env.PAYLOAD_CONFIG_PATH = new URL('../dev/payload.config.ts', import.meta.url).pathname
    const config = await configPromise

    localPayload = await getPayload({ config })
  })

  it('should have products collection registered', () => {
    expect(localPayload.collections['products' as CollectionSlug]).toBeDefined()
  })

  it('should create a product', async () => {
    createdProduct = await localPayload.create({
      collection: 'products' as CollectionSlug,
      data: {
        productName: 'Test Product',
      } as any,
    })

    expect(createdProduct).toMatchObject({
      productName: 'Test Product',
      id: expect.any(Number),
    })
  })

  it('should read the created product', async () => {
    const { docs } = await localPayload.find({
      collection: 'products' as CollectionSlug,
      where: {
        id: { equals: createdProduct.id },
      },
    })

    expect(docs[0]).toMatchObject({
      productName: createdProduct.productName,
    })
  })

  it('should update the product', async () => {
    const updated = (await localPayload.update({
      collection: 'products' as CollectionSlug,
      id: createdProduct.id,
      data: { productName: 'Updated Test Product' } as any,
    })) as any

    expect(updated.productName).toBe('Updated Test Product')
  })

  it('should delete the products', async () => {
    await localPayload.delete({
      collection: 'products' as CollectionSlug,
      id: createdProduct.id,
    })

    const { docs } = await localPayload.find({
      collection: 'products' as CollectionSlug,
      where: {
        id: { equals: createdProduct.id },
      },
    })

    expect(docs.length).toBe(0)
  })

  it('should fail to create a product without required field', async () => {
    try {
      await localPayload.create({
        collection: 'products' as CollectionSlug,
        data: {} as any,
      })

      expect(false).toBe(true) // test failed as it should catch error.
    } catch (err: any) {
      expect(err.status).toBe(400)
    }
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
