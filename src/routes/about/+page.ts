import type { PageLoad } from './$types';

export const load = (async () => ({
  image: {
    source: (await import('$lib/content/about/00.jpg?meta')).default,
    thumbnail: (await import('$lib/content/about/00.jpg?w=300&h=450&meta')).default
  }
})) satisfies PageLoad;
