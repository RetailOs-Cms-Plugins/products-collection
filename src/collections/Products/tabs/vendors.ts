import { CollectionSlug, Tab } from 'payload'

export const vendorsTab: Tab = {
  label: 'vendors',
  fields: [
    {
      name: 'shippingOption',
      type: 'select',
      options: [
        { label: 'Standard Shipping', value: 'standard' },
        { label: 'Express Shipping', value: 'express' },
        { label: 'No Shipping Required', value: 'none' },
      ],
    },

    {
      name: 'vendors',
      type: 'relationship',
      relationTo: 'vendors' as CollectionSlug,
      hasMany: true,
    },

    {
      name: 'manufactures',
      type: 'relationship',
      relationTo: 'manufactures' as CollectionSlug,
      hasMany: true,
    },
    {
      name: 'productLines',
      type: 'relationship',
      relationTo: 'product-lines' as CollectionSlug,
      hasMany: true,
    },

    {
      name: 'SKU',
      type: 'text',
    },
    {
      name: 'EAN',
      label: 'EAN / Barcode',
      type: 'text',
    },
    {
      name: 'MPN',
      label: 'Manufacturer Part Mumber',
      type: 'text',
    },
    {
      name: 'modelNumber',
      type: 'text',
    },
    {
      name: 'productLine',
      type: 'text',
    },
  ],
}
