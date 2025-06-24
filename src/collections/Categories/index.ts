import { CollectionConfig, CollectionSlug } from 'payload'

export const categoriesCollection: CollectionConfig = {
  slug: 'categories',
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
      name: 'parentCategory',
      type: 'relationship',
      relationTo: 'categories' as CollectionSlug,
      hasMany: false,
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
      name: 'order',
      type: 'number',
      defaultValue: 0,
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
