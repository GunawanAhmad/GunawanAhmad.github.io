import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about me',
  title: 'About me',
  type: 'document',
  fields: [
    defineField({
      name: 'about',
      title: 'About',
      type: 'string',
    })
  ]
})