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
    query: { meta: true },
    import: 'default',
    eager: true
  }) as unknown as ImageMetadata
);

export const squares = globDataset(
  idxs,
  captions,
  import.meta.glob('./*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    query: { w: 320, h: 320, meta: true },
    import: 'default',
    eager: true
  }) as unknown as ImageMetadata
);

export const screens = globDataset(
  idxs,
  captions,
  import.meta.glob('./*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    query: { w: 320, h: 180, meta: true },
    import: 'default',
    eager: true
  }) as unknown as ImageMetadata
);
