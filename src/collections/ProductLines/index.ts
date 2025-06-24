import { CollectionConfig } from 'payload'

export const productLinesCollection: CollectionConfig = {
  slug: 'product-lines',
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
