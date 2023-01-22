// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Visdecode',
  tagline: 'Combining data visualization and machine learning',
  url: 'https://github,com',
  baseUrl: '/visualdecode/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mallahyari', // Usually your GitHub org/user name.
  projectName: 'visualdecode', // Usually your repo name.
  deploymentBranch: 'gh-page',

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: 'Tutorials about data visualization and machine learning',
          blogDescription:
            'Tutorials and articles about Data visualization and combination with machine learning',
          blogSidebarTitle: 'Latest posts',
          showReadingTime: true,
          postsPerPage: 6,
          // blogSidebarCount: 0,
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
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: 'Visdecode',
        // logo: {
        //   alt: 'visdecode',
        //   src: 'img/logo.svg',
        // },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            to: 'https://mlnotes.substack.com/',
            label: 'Newsletter',
            position: 'right',
          },
          {
            to: 'https://mallahyari.github.io/ml_tutorial/',
            label: 'Machine Learning',
            position: 'right',
          },
          {
            to: 'https://github.com/mallahyari',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },

        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} visdecode.`,
      },
      prism: {
        // theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // to use dracula highlighting theme
        theme: require('prism-react-renderer/themes/dracula'),
        defaultLanguage: 'javascript',
      },
    }),
  stylesheets: [
    // String format.
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css',
  ],
};

module.exports = config;
