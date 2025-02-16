import {defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      title: 'Designation',
      name: 'designation',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Order',
      name: 'order',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Timeline',
      name: 'timeline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'descriptions',
      title: 'Descriptions',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'string',
          name: 'description',
          title: 'Add a description',
        },
      ],
    }),
  ],
})
