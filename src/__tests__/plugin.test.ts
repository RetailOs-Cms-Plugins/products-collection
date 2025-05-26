// plugins/myPlugin/__tests__/plugin.test.ts
import payload from 'payload'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '../../payload.config' // איפה שאתה מגדיר את הפלאגין
import type { InitOptions } from 'payload/config'

describe('Products Plugin E2E', () => {
  let localPayload: Awaited<ReturnType<typeof getPayloadHMR>>

  beforeAll(async () => {
    process.env.PAYLOAD_CONFIG_PATH = require.resolve('../../payload.config')

    localPayload = await getPayloadHMR({
      config: configPromise as InitOptions,
    })

    await localPayload.init({
      local: true,
    })
  })

  it('should have products collection registered', () => {
    expect(localPayload.collections.products).toBeDefined()
  })

  it('should create a product', async () => {
    const result = await localPayload.create({
      collection: 'products',
      data: {
        productName: 'Test Product',
      },
    })

    expect(result).toMatchObject({
      productName: 'Test Product',
      id: expect.any(String),
    })
  })

  afterAll(async () => {
    await localPayload.delete({
      collection: 'products',
      where: {
        productName: {
          equals: 'Test Product',
        },
      },
    })
  })
})
