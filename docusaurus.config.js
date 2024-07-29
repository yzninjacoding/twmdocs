const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'TWM',
  tagline: 'DOCUMENTATION',
  url: 'https://yzninjacoding.github.io',
  baseUrl: '/twmdocs/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yzninjacoding', // Usually your GitHub org/user name.
  projectName: 'twmdocs', // Usually your repo name on github.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TWM',
        logo: {
          alt: 'TWM Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://twm.com',
            label: 'Download',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Quick Start',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'Platform',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'Code',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TWM`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
