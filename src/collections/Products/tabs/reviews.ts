import { Tab } from 'payload'

export const reviewsTab: Tab = {
  label: 'Reviews',
  fields: [
    {
      name: 'reviews',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'customer', type: 'text' },
            { name: 'date', type: 'date' },
          ],
        },
        {
          name: 'rating',
          type: 'radio',
          options: Array.from({ length: 5 }, (_, i) => ({
            label: `${i + 1}`,
            value: (i + 1).toString(),
          })),
          hooks: {
            beforeChange: [({ value }) => Number(value)],
          },
        },
        { name: 'review', type: 'richText' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
