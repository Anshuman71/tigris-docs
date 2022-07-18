/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  docs: [
    {
      type: "category",
      label: "Overview",
      link: {
        type: "doc",
        id: "overview/intro",
      },
      collapsed: false,
      items: [
        "overview/concepts",
        "overview/datamodel",
        "overview/schema",
        "overview/query",
        "overview/change-events",
      ],
    },
    {
      type: "doc",
      label: "Quickstart",
      id: "quickstart/quickstart",
    },
    {
      type: "category",
      label: "Go Reference",
      link: {
        type: "doc",
        id: "golang/index",
      },
      collapsed: true,
      items: [
        "golang/getting-started",
        {
          type: "category",
          label: "Data Modeling",
          link: {
            type: "doc",
            id: "golang/datamodel/overview",
          },
          collapsed: false,
          items: [
            "golang/datamodel/declare",
            "golang/datamodel/primary-key",
            "golang/datamodel/embedded",
            "golang/datamodel/types",
          ],
        },
        "golang/crud",
        "golang/query",
        "golang/search",
        "golang/transactions",
      ],
    },
    {
      type: "category",
      label: "Java Reference",
      link: {
        type: "doc",
        id: "java/index",
      },
      collapsed: true,
      items: [
        "java/getting-started",
        {
          type: "category",
          label: "Data Modeling",
          link: {
            type: "doc",
            id: "java/datamodel/overview",
          },
          collapsed: false,
          items: [
            "java/datamodel/declare",
            "java/datamodel/primary-key",
            "java/datamodel/embedded",
            "java/datamodel/types",
          ],
        },
        "java/async-client",
        {
          type: "category",
          label: "Sync Client",
          link: {
            type: "doc",
            id: "java/sync-client",
          },
          collapsed: false,
          items: ["java/query"],
        },
      ],
    },
    {
      type: "category",
      label: "TypeScript Reference",
      link: {
        type: "doc",
        id: "typescript/index",
      },
      collapsed: true,
      items: [
        "typescript/getting-started",
        {
          type: "category",
          label: "Data Modeling",
          link: {
            type: "doc",
            id: "typescript/datamodel/overview",
          },
          collapsed: false,
          items: [
            "typescript/datamodel/declare",
            "typescript/datamodel/primary-key",
            "typescript/datamodel/embedded",
          ],
        },
        "typescript/crud",
        "typescript/query",
        "typescript/transactions",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "tutorials/rest-webapp-go",
        "tutorials/rest-webapp-java",
        "tutorials/rest-webapp-typescript",
      ],
    },
    {
      type: "category",
      label: "Command Line Interface",
      link: {
        type: "doc",
        id: "cli/overview",
      },
      collapsed: false,
      items: [
        "cli/working-locally",
        {
          type: "category",
          label: "Reference",
          items: [
            "cli/reference/alter-collection",
            "cli/reference/completion",
            "cli/reference/create-collection",
            "cli/reference/create-database",
            "cli/reference/delete",
            "cli/reference/describe-collection",
            "cli/reference/describe-database",
            "cli/reference/drop-collection",
            "cli/reference/drop-database",
            "cli/reference/generate-sample-schema",
            "cli/reference/insert",
            "cli/reference/list-collections",
            "cli/reference/list-databases",
            "cli/reference/local-down",
            "cli/reference/local-logs",
            "cli/reference/local-up",
            "cli/reference/ping",
            "cli/reference/read",
            "cli/reference/replace",
            "cli/reference/transact",
            "cli/reference/update",
            "cli/reference/version",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
