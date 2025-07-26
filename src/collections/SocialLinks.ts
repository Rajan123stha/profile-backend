import type { CollectionConfig } from 'payload'

const SocialLinks: CollectionConfig = {
  slug: 'social-links',
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
  name: 'socialLinks',
  type: 'group',
  label: 'Social Media Links',
  fields: [
    {
      name: 'facebook',
      label: 'Facebook URL',
      type: 'text',
    },
    {
      name: 'instagram',
      label: 'Instagram URL',
      type: 'text',
    },
    {
      name: 'snapchat',
      label: 'Snapchat URL',
      type: 'text',
    },
    {
      name: 'linkedin',
      label: 'LinkedIn URL',
      type: 'text',
    },
    {
      name: 'twitter',
      label: 'Twitter URL',
      type: 'text',
    },
    {
      name: 'youtube',
      label: 'YouTube URL',
      type: 'text',
    },
    {
      name: 'tiktok',
      label: 'TikTok URL',
      type: 'text',
    },
  ],
}

  ],
};

export default SocialLinks;
