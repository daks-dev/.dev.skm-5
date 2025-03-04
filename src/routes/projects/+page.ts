import type { PageLoad } from './$types';
import getter from '$lib/assets/images/gallery/index.async';

export const load = (async () => ({
  ...(await getter())
})) satisfies PageLoad;
