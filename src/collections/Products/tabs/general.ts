import { Tab } from 'payload'

export const generalTab: Tab = {
  label: 'General',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'productGroup',
      type: 'text',
    },
    {
      name: 'vendor / brand',
      type: 'text',
    },
    {
      name: 'gtin / mpn',
      type: 'text',
    },
    {
      name: 'structuredData',
      type: 'json',
    },
    {
      name: 'contentBlocks',
      type: 'text',
    },
    {
      name: 'rmsProductId',
      type: 'text',
    },
    {
      name: 'rmsVariantsSnapshot',
      type: 'text',
    },
  ],
}
