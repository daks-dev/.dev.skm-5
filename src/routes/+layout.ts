import type { LayoutLoad } from './$types';

export const prerender = true;

export const load = (({ url }) => ({
  refresh: url.pathname
})) satisfies LayoutLoad;
