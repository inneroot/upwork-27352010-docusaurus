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
  customFields: {
    contacts: {
      phone_label: "+7 (999) 222-33-44",
      phone_href: "phone:+79992223344",
      email: "info@geleor.ru",
      telegram: "#",
      whatsapp: "#",
    },
  },
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
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
    docNavbar: {
      collections: [
        {
          label: "Услуги",
          links: [
            { label: "Построение процессов CI/CD", path: "services/building" },
            {
              label: "Создание инфраструктуры для разработки",
              path: "services/infrastructure",
            },
          ],
        },
        {
          label: "Общая информация",
          links: [
            { label: "О нас", path: "info/about" },
            { label: "Контакты", path: "info/contacts" },
          ],
        },
        { label: "База знаний", pending: true, links: [] },
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
