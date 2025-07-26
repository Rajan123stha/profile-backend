import type { CollectionConfig } from 'payload'

const Profile: CollectionConfig = {
  slug: 'profile',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Allow public access for reading blogs
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'story',
      type: 'array',
      label: 'Story Section',
      fields: [
        {
          name: 'year',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // assuming you have a media collection
        },
      ],
    },
   {
  name: 'paragraph',
  label: 'Paragraph',
  type: 'richText',
  required: true, // optional
},
  ],
};

export default Profile;
