// src/collections/Products/index.ts

import { CollectionConfig } from 'payload'
import type { ProductsCollectionConfig } from '../../types.js'

import { generalTab } from './tabs/general.js'
import { organizeTab } from './tabs/organize.js'
import { mediaTab } from './tabs/media.js'
import { specificationsTab } from './tabs/specifications.js'
import { seoTab } from './tabs/seo.js'
import { featuresTab } from './tabs/features.js'
import { reviewsTab } from './tabs/reviews.js'
import { termsTab } from './tabs/terms.js'
import { relatedProducts } from './tabs/relatedProducts.js'
import { vendorsTab } from './tabs/vendors.js'

export const createProductsCollection = (
  pluginOptions?: ProductsCollectionConfig,
): CollectionConfig => ({
  slug: 'products',

  admin: {
    useAsTitle: 'title',
    hidden: pluginOptions?.disabled,
  },

  access: {
    create: () => !pluginOptions?.disabled,
    update: () => !pluginOptions?.disabled,
    delete: () => !pluginOptions?.disabled,
    read: () => !pluginOptions?.disabled,
  },

  fields: [
    {
      type: 'tabs',
      tabs: [
        generalTab,
        organizeTab,
        vendorsTab,
        mediaTab,
        specificationsTab,
        seoTab,
        featuresTab,
        termsTab,
        reviewsTab,
        relatedProducts,
      ],
    },

    {
      name: 'slug',
      type: 'text',
      admin: { position: 'sidebar' },
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
      name: 'publishFrom',
      type: 'date',
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishUntil',
      type: 'date',
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Submitted', value: 'submitted' },
        { label: 'Review', value: 'review' },
        { label: 'Revisions', value: 'revisions' },
        { label: 'Edited', value: 'edited' },
        { label: 'Approved', value: 'approved' },
        { label: 'Scheduled', value: 'scheduled' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
        { label: 'Unpublished', value: 'unpublished' },
        { label: 'Rejected', value: 'rejected' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
})
