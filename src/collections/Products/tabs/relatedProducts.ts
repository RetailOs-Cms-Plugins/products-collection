import { CollectionSlug, Tab } from 'payload'

const createRelationshipField = (
  collectionName: string,
): {
  name: string
  type: 'relationship'
  hasMany: true
  relationTo: CollectionSlug
  admin: {
    condition: (data: any, siblingData: any) => boolean
  }
} => ({
  name: collectionName,
  type: 'relationship',
  hasMany: true,
  relationTo: collectionName as CollectionSlug,
  admin: {
    condition: (_, siblingData) => siblingData?.chosenFilters?.includes(collectionName),
  },
})

const filterOptions = [
  { value: 'categories', label: 'categories' },
  { value: 'collections', label: 'Collections' },
  { value: 'tags', label: 'Tags' },
  { value: 'product-types', label: 'Types' },
]

export const relatedProducts: Tab = {
  label: 'Related Products',
  fields: [
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'filter',
      options: [
        { label: 'Filter', value: 'filter' },
        { label: 'Individual Selection', value: 'selection' },
      ],
    },
    {
      name: 'filters',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'filter',
      },
      fields: [
        {
          name: 'chosenFilters',
          type: 'select',
          hasMany: true,
          options: filterOptions,
        },
        ...filterOptions.map(({ value }) => createRelationshipField(value)),
      ],
    },
    {
      name: 'limit',
      type: 'number',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'filter',
        step: 1,
      },
      defaultValue: 10,
      label: 'Limit',
    },
    {
      name: 'selectedpProducts',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
      hasMany: true,
      label: 'Selection',
      relationTo: 'products' as CollectionSlug,
    },
  ],
}
