import { siteSettings } from './siteSettings';
import { solution } from './solution';
import { brand } from './brand';
import { blogPost } from './blogPost';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, solution, brand, blogPost],
};
