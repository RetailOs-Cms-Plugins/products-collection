import { CollectionConfig } from 'payload'

export const salesChannelsCollection: CollectionConfig = {
  slug: 'sales-channels',
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
      name: 'domain_url',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'sc_id',
      type: 'text',
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
      name: 'isMaster',
      type: 'checkbox',
      defaultValue: false,
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
