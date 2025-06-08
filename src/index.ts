import type { Config } from 'payload'
import { createProductsCollection } from './collections/Products/index.js'
import { ProductsCollectionConfig } from './types.js'

export const productsCollection =
  (pluginOptions?: ProductsCollectionConfig) =>
  (config: Config): Config => {
    const collections = config.collections || []

    const pluginCollection = pluginOptions?.disabled
      ? {
          ...createProductsCollection(pluginOptions),
          admin: {
            ...createProductsCollection(pluginOptions).admin,
            hidden: true,
          },
          access: {
            create: () => false,
            update: () => false,
            delete: () => false,
            read: () => false,
          }, // ffdgfd
        }
      : createProductsCollection(pluginOptions)

    return {
      ...config,
      collections: [...collections, pluginCollection],
    }
  }
