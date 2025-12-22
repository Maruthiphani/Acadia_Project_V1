import { resources as base } from './resources';
import { EXTRA_ITEMS } from './extra'

export const getAllResources = () => {
  const map = new Map(base.map(r => [r.slug, r]));
  for (const x of EXTRA_ITEMS) if (!map.has(x.slug)) map.set(x.slug, x);
  return Array.from(map.values());
};

export const getResourceBySlug = (slug: string) =>
  getAllResources().find(r => r.slug === slug);
