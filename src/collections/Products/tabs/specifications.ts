import { group } from 'console'
import { Tab } from 'payload'

export const specificationsTab: Tab = {
  label: 'Specifications',
  fields: [
    { name: 'material', label: 'Material', type: 'text' },
    { name: 'dimensions', label: 'Dimensions', type: 'text' },
    {
      name: 'weight',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'unit', type: 'text' },
            { name: 'value', type: 'number' },
          ],
        },
      ],
    },
    { name: 'productCode', type: 'text' },
    { name: 'modelNumber', type: 'text' },
    {
      name: 'spec',
      label: 'Table Spec',
      type: 'array',
      fields: [
        { name: 'group', type: 'text' },
        {
          name: 'values',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'name', type: 'text', admin: { width: 20 } },
                { name: 'value', type: 'richText' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
