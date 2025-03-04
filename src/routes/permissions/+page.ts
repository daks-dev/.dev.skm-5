import type { PageLoad } from './$types';
import getter from '$lib/content/permissions/index.async';

export const load = (async () => ({
  ...(await getter())
})) satisfies PageLoad;
