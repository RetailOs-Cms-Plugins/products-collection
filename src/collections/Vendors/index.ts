import { CollectionConfig, CollectionSlug } from 'payload'

export const vendorsCollection: CollectionConfig = {
  slug: 'vendors',
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
      name: 'manufactures',
      type: 'relationship',
      relationTo: 'manufactures' as CollectionSlug,
      hasMany: true,
    },
  ],
}
