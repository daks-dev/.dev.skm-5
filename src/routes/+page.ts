import type { PageLoad } from './$types';

export const load = (async () => ({
  logo: {
    image: (await import('$lib/assets/images/skm/logo.png?meta')).default,
    thumbnail: (await import('$lib/assets/images/skm/logo.png?w=312&meta')).default
  },
  infographic: [
    {
      title: 'Научных инженеров',
      icon: (await import('$lib/content/home/info.0.png?w=144&meta')).default,
      max: 25
    },
    {
      title: 'Сотрудников компании',
      icon: (await import('$lib/content/home/info.1.png?w=144&meta')).default,
      max: 37
    },
    {
      title: 'Реализованных проектов',
      icon: (await import('$lib/content/home/info.2.png?w=144&meta')).default,
      max: 100
    },
    {
      title: 'Действующих проектов',
      icon: (await import('$lib/content/home/info.3.png?w=144&meta')).default,
      max: 52
    }
  ]
})) satisfies PageLoad;
