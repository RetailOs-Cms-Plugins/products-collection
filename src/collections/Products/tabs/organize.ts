import { CollectionSlug, Tab } from 'payload'

export const organizeTab: Tab = {
  label: 'Organize',
  fields: [
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories' as CollectionSlug,
      hasMany: true,
    },
    {
      name: 'collections',
      label: 'Collections',
      type: 'relationship',
      relationTo: 'collections' as CollectionSlug,
      hasMany: true,
    },
    {
      name: 'tags',
      label: 'Tags',
      type: 'relationship',
      relationTo: 'tags' as CollectionSlug,
      hasMany: true,
    },
    {
      name: 'types',
      label: 'Types',
      type: 'relationship',
      relationTo: 'product-types' as CollectionSlug,
      hasMany: true,
    },
    {
      name: 'cmsVisibleIn',
      type: 'relationship',
      relationTo: 'sales-channels' as CollectionSlug,
      hasMany: true,
    },
  ],
}
