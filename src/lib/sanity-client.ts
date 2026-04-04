import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { clientConfig } from './sanity';

export const client = createClient(clientConfig);

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function fetchSanityQuery<T = unknown>(query: string, params = {}): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.error('Sanity query error:', error);
    return null;
  }
}
