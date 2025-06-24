import { CollectionConfig, CollectionSlug } from 'payload'

export const manufacturesCollection: CollectionConfig = {
  slug: 'manufactures',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'productLines',
      type: 'relationship',
      relationTo: 'product-lines' as CollectionSlug,
      hasMany: true,
    },
  ],
}
