import { CollectionConfig } from 'payload'

export const productTypesCollection: CollectionConfig = {
  slug: 'product-types',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
