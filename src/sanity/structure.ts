import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('TechVibes CMS')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Solutions')
        .schemaType('solution')
        .child(S.documentTypeList('solution').title('Solutions')),
      S.listItem()
        .title('Brands')
        .schemaType('brand')
        .child(S.documentTypeList('brand').title('Brands')),
      S.listItem()
        .title('Blog Posts')
        .schemaType('blogPost')
        .child(S.documentTypeList('blogPost').title('Blog Posts')),
    ]);
