import type { Config } from 'payload'
import { createProductsCollection } from './collections/Products/index.js'
import { ProductsCollectionConfig } from './types.js'

import { categoriesCollection } from './collections/Categories/index.js'
import { collectionsCollection } from './collections/Collections/index.js'
import { tagsCollection } from './collections/Tags/index.js'
import { productTypesCollection } from './collections/ProductTypes/index.js'
import { salesChannelsCollection } from './collections/SalesChannels/index.js'
import { productLinesCollection } from './collections/ProductLines/index.js'
import { manufacturesCollection } from './collections/Manufactures/index.js'
import { vendorsCollection } from './collections/Vendors/index.js'

export const productsCollection =
  (pluginOptions?: ProductsCollectionConfig) =>
  (config: Config): Config => {
    const collections = config.collections || []

    const productCollection = createProductsCollection(pluginOptions)

    const pluginCollection = pluginOptions?.disabled
      ? {
          ...productCollection,
          admin: {
            ...productCollection.admin,
            hidden: true,
          },
          access: {
            create: () => false,
            update: () => false,
            delete: () => false,
            read: () => false,
          },
        }
      : productCollection

    return {
      ...config,
      collections: [
        ...collections,
        pluginCollection,
        categoriesCollection,
        collectionsCollection,
        tagsCollection,
        productTypesCollection,
        salesChannelsCollection,
        productLinesCollection,
        manufacturesCollection,
        vendorsCollection,
      ],
    }
  }
