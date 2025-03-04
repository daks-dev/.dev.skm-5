import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import placeholder from '$lib/assets/images/skm/logo.png?w=288&meta';

// export const prerender = 'auto';

type MDData = {
  metadata: {
    title: string;
    description: string;
  };
  default: MDComponent;
};

const promises = {
  mds: import.meta.glob('$lib/content/news/**/index.md'),
  images: import.meta.glob('$lib/content/news/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    query: { w: 288, meta: true },
    import: 'default'
  })
};

const filter = (obj: Record<string, unknown>, dir: string | undefined) =>
  Object.keys(obj).filter((x) => x.split('/').at(-2) === dir);

export const load = (async ({ params }) => {
  if (/^\d{2}-\d{2}-\d{2}$/.test(params.slug)) {
    const { slug } = params;
    const md = filter(promises.mds, slug)[0];
    if (md) {
      const {
        metadata: { title, description },
        default: content
      } = (await promises.mds[md]()) as MDData;

      const images: ImageMetadata[] = [];
      for (const image of filter(promises.images, slug))
        images.push((await promises.images[image]()) as ImageMetadata);
      if (!images.length) images[0] = placeholder;

      return { slug, title, description, content, images };
    }
    throw error(404, 'Not found [data]');
  }
  throw error(404, 'Not found');
}) satisfies PageLoad;
