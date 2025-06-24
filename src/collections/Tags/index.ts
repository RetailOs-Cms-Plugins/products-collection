import { CollectionConfig, CollectionSlug } from 'payload'

export const tagsCollection: CollectionConfig = {
  slug: 'tags',
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
      name: 'cmsVisibleIn',
      type: 'relationship',
      relationTo: 'sales-channels' as CollectionSlug,
      hasMany: true,
    },

    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.name) {
              return data.name.toLowerCase().replace(/\s+/g, '-')
            }
            return data?.slug
          },
        ],
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
