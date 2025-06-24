import { CollectionConfig, CollectionSlug } from 'payload'

export const collectionsCollection: CollectionConfig = {
  slug: 'collections',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products' as CollectionSlug,
      hasMany: true,
    },
    {
      name: 'cmsVisibleIn',
      type: 'relationship',
      relationTo: 'sales-channels' as CollectionSlug,
      hasMany: true,
    },
    {
      name: 'visibleFieldsPerCMS',
      type: 'json',
    },
    {
      name: 'collection_type',
      type: 'select',
      options: [
        { label: 'Manual', value: 'manual' },
        { label: 'Automated', value: 'automated' },
      ],
      defaultValue: 'manual',
      required: true,
    },
    {
      name: 'seo_title',
      type: 'text',
    },
    {
      name: 'seo_description',
      type: 'textarea',
    },
    {
      name: 'seo_image',
      type: 'upload',
      relationTo: 'media',
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
            if (data?.title) {
              return data.title.toLowerCase().replace(/\s+/g, '-')
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
    {
      name: 'is_active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
