// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Raptoreum Docs',
  tagline: '',
  url: 'https://docs.raptoreum.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config. If you aren't using GitHub pages, you don't need these.
  projectName: 'docs', // Usually your repo name.
  organizationName: 'Raptor3um', // Usually your GitHub org/user name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/raptor3um/docs',
        },
        // blog: {
        //   showReadingTime: false,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },

      navbar: {
        title: 'RTM Docs',
        logo: {
          alt: 'Raptoreum Logo',
          src: 'img/logo_rtm_mono.svg',
        },
        items: [
          {
            label: 'FAQ',
            type: 'doc',
            docId: 'faq',
            position: 'left',
          },
          {
            label: 'Tutorial',
            type: 'doc',
            docId: 'intro',
            position: 'left',

          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
        ],
      },

      footer: {
        links: [
          {
            title: 'Raptoreum',
            items: [
              {
                label: 'Home',
                href: 'https://raptoreum.com/',
              },
              {
                label: 'Features',
                to: '/raptoreum/index#raptoreum-features',
              },
              {
                label: 'Exchanges',
                to: '/raptoreum/exchanges',
              },
              {
                label: 'Explorer',
                href: 'https://explorer.raptoreum.com/',
              },
              {
                label: 'Tools',
                to: '/raptoreum/tools',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Roadmap',
                to: '/raptoreum/roadmap',
              },
              {
                label: 'Credits',
                to: '/raptoreum/credits',
              },
            ],
          },
          {
            title: 'Quick Docs',
            items: [
              {
                label: 'Raptoreum Wallet',
                to: '/docs/wallet/install',
              },
              {
                label: 'Smartnode install',
                to: '/docs/smartnode/install',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/raptoreum',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/raptoreum',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCfFNoa8d5b0Jt8dfwy0eG7g',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/raptoreum',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/raptoreum',
              },
            ],
          },
          {
            title: 'GitHub repos',
            items: [
              {
                label: 'RaptoreumCore',
                href: 'https://github.com/raptor3um/raptoreum',
              },
              {
                label: 'Raptoreum Docs',
                href: 'https://github.com/raptor3um/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Raptoreum. All Rights Reserved.`,
      },

      // Code highlighter plugin settings (built-in)
      prism: {
        theme: darkCodeTheme
      },

      // Zoom plugin settings
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          dark: 'rgba(21, 12, 6, 0.92)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {}
      },
    }),
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
  ],
};

module.exports = config; 