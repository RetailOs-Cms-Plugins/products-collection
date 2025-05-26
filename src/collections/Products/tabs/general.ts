import { Tab } from 'payload'
import type { ProductsCollectionConfig } from '../../../types'

export const createGeneralTab = (options?: ProductsCollectionConfig): Tab => {
  const { enableCategoryField = true, enableProductTypeField = true } = options || {}

  const fields: Tab['fields'] = [
    { name: 'productName', label: 'Product Name', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'content', label: 'Content', type: 'richText' },
    {
      name: 'tags',
      type: 'array',
      fields: [{ name: 'tag', type: 'text' }],
    },
    {
      name: 'seasonalExpiryDate',
      label: 'Seasonal Expiry Date',
      type: 'date',
      admin: {
        condition: (_, siblingData) => siblingData?.productType === 'seasonal',
      },
    },
    { name: 'productGroup', label: 'Product Group ', type: 'text' },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Visible', value: 'visible' },
        { label: 'Not Visible', value: 'not_visible' },
        { label: 'Archive', value: 'archive' },
      ],
    },
  ]

  if (enableCategoryField) {
    fields.splice(3, 0, {
      name: 'category',
      label: 'Category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    })
  }

  if (enableProductTypeField) {
    fields.splice(4, 0, {
      name: 'productType',
      label: 'Product Type',
      type: 'relationship',
      relationTo: 'productsTypes',
      hasMany: true,
    })
  }

  return {
    label: 'General',
    fields,
  }
}
