import { Nav, type NavSite } from '@daks.dev/svelte.sdk';

const config: NavSite = {
  navbar: {
    links: [
      {
        href: '/about',
        label: 'О нас',
        links: [
          {
            href: '/partners',
            base: '',
            label: 'Партнеры'
          },
          {
            href: '/feedbacks',
            base: '',
            label: 'Отзывы'
          }
        ]
      },
      {
        href: '/activity',
        label: 'Деятельность'
      },
      {
        href: '/projects',
        label: 'Проекты'
      },
      {
        href: '/permissions',
        label: 'Допуски'
      },
      {
        href: '/news',
        label: 'Новости'
      },
      {
        href: '/contacts',
        label: 'Контакты'
      }
    ]
  },
  footer: {
    links: [
      {
        href: '/privacy',
        label: 'Конфиденциальность'
      },
      {
        href: '/admin',
        label: 'admin panel',
        icon: 'ic:outline-settings',
        disallow: true
      }
    ],
    copylink: {
      href: '/',
      label: 'СК&nbsp;«Масштаб»&trade;'
    }
  }
};

export const map = [
  ...Nav.map(config.navbar.links),
  ...Nav.map(config.footer?.links ?? []),
  ...(config.allow ?? [])
].filter((el, idx, arr) => arr.indexOf(el) === idx);

export default config;
