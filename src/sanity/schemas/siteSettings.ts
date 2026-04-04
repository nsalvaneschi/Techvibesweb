import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'hero', title: 'Hero Section' },
    { name: 'social', title: 'Social Links' },
  ],
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      group: 'general',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'general',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (Spanish)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitleEn',
      title: 'Hero Title (English)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle (Spanish)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitleEn',
      title: 'Hero Subtitle (English)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroBackground',
      title: 'Hero Background Image',
      type: 'image',
      group: 'hero',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      group: 'social',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'googleFormUrl',
      title: 'Questionnaire Form URL',
      type: 'url',
      group: 'social',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
    },
    prepare({ title }) {
      return { title: title || 'Site Settings' };
    },
  },
});
