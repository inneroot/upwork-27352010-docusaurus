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
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: "Гелеор",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "services/building",
          position: "right",
          label: "Услуги",
        },
        {
          type: "doc",
          docId: "info/about",
          position: "right",
          label: "О нас",
        },
        {
          type: "doc",
          docId: "info/contacts",
          position: "right",
          label: "Контакты",
        },
      ],
    },
    footer: {
      links: [
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          //sidebarPath: require.resolve("./sidebars.js"),
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
