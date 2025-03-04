import { globIndex, globInfoset, globDataset } from '@daks.dev/svelte.sdk';

const idxs = globIndex(
  import.meta.glob('./*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    import: 'default',
    eager: true
  })
);

export const captions = globInfoset(
  idxs,
  import.meta.glob('./*.(json|yaml|yml)', {
    import: 'default',
    eager: true
  })
);

export const sources = globDataset(
  idxs,
  captions,
  import.meta.glob('./*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    query: { w: 450, h: 250, withoutEnlargement: 'false', withoutReduction: 'false', meta: true },
    import: 'default',
    eager: true
  }) as unknown as ImageMetadata
);

export default {
  captions,
  sources
};
