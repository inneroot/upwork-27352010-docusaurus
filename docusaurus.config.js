/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Гелеор",
  tagline: "Dinosaurs are cool",
  url: "https://inneroot.github.io",
  baseUrl: "/upwork-27352010-docusaurus/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "inneroot", // Usually your GitHub org/user name.
  projectName: "upwork-27352010-docusaurus", // Usually your repo name.
  themeConfig: {
    disableSwitch: true,
    navbar: {
      logo: {
        alt: "Гелеор",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "right",
          label: "Услуги",
        },
        { to: "/blog", label: "О нас", position: "right" },
        { to: "/blog", label: "Контакты", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "© 2021 Гелеор",
        },
        {
          items: [
            {
              label: "Политика конфиденциальности",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Иллюстрации Freepik Stories",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Разработка дизайна сайта Анастасия Громова",
              href: "#",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/inneroot/upwork-27352010-docusaurus",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/inneroot/upwork-27352010-docusaurus/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
