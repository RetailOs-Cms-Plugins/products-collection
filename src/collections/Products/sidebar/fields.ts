import type { Field } from 'payload'

export const sidebarFields: Field[] = [
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
]
