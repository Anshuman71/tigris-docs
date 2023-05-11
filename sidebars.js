/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
// const sidebars = {
//   // By default, Docusaurus generates a sidebar from the docs folder structure
//   tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
// };

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  quickstarts: [
    {
      type: "category",
      label: "Quickstarts",
      link: {
        type: "doc",
        id: "quickstarts/index",
      },
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "doc",
          label: "TypeScript",
          id: "quickstarts/quickstart-typescript",
        },
        {
          type: "doc",
          label: "Vector Search",
          id: "quickstarts/quickstart-vector-search",
        },
        {
          type: "doc",
          label: "Next.js & Vercel",
          id: "quickstarts/quickstart-nextjs-vercel",
        },
        {
          type: "doc",
          label: "Go",
          id: "quickstarts/quickstart-go",
        },
        {
          type: "doc",
          label: "Java",
          id: "quickstarts/quickstart-java",
        },
        {
          type: "doc",
          label: "HTTP API",
          id: "quickstarts/quickstart-http",
        },
        {
          type: "category",
          label: "MongoDB compatibility",
          link: {
            type: "doc",
            id: "quickstarts/mongodb-compatibility/index",
          },
          collapsed: false,
          items: [
            {
              type: "doc",
              label: "TypeScript",
              id: "quickstarts/mongodb-compatibility/typescript/index",
            },
            {
              type: "doc",
              label: "Go",
              id: "quickstarts/mongodb-compatibility/go/index",
            },
            {
              type: "doc",
              label: "Java",
              id: "quickstarts/mongodb-compatibility/java/index",
            },
            // {
            //   type: "doc",
            //   label: ".NET",
            //   id: "quickstarts/mongodb-compatibility/dotnet/index",
            // },
            {
              type: "doc",
              label: "Python",
              id: "quickstarts/mongodb-compatibility/python/index",
            },
            {
              type: "doc",
              label: "PHP",
              id: "quickstarts/mongodb-compatibility/php/index",
            },
          ],
        },
      ],
    },
  ],
  concepts: [
    {
      type: "doc",
      label: "Overview",
      id: "concepts/index",
    },
    "concepts/architecture/index",
    "concepts/project/index",
    {
      type: "category",
      label: "Database",
      link: {
        type: "doc",
        id: "concepts/database/database",
      },
      items: [
        "concepts/database/documents",
        "concepts/database/datamodel",
        "concepts/database/branching",
        "concepts/database/schema-validation",
        "concepts/database/schema-modification",
        "concepts/database/crud",
        "concepts/database/search",
        "concepts/database/secondary-indexes",
        "concepts/database/transaction",
        "concepts/database/filters",
        "concepts/database/restrictions",
      ],
    },
    {
      type: "category",
      label: "Vector Search",
      link: {
        type: "doc",
        id: "concepts/vector-search/index",
      },
      items: [
        "concepts/vector-search/getting-started",
        "concepts/vector-search/hybrid-search",
        "concepts/vector-search/usage-guide",
      ],
    },
    {
      type: "doc",
      label: "Full-text Search",
      id: "concepts/searching/full-text-search",
    },
    {
      type: "category",
      label: "MongoDB Compatibility",
      link: {
        type: "doc",
        id: "concepts/mongodb-compatibility/index",
      },
      items: [
        "concepts/mongodb-compatibility/get-started",
        "concepts/mongodb-compatibility/supported-features",
        "concepts/mongodb-compatibility/driver-status",
        "concepts/mongodb-compatibility/known-differences",
      ],
    },
    {
      type: "category",
      label: "Platform",
      link: {
        type: "doc",
        id: "concepts/platform/index",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Cloud",
          link: {
            type: "doc",
            id: "concepts/platform/cloud/index",
          },
          collapsed: true,
          items: [
            "concepts/platform/cloud/auth",
            {
              type: "category",
              label: "Metrics and Tracing",
              link: {
                type: "doc",
                id: "concepts/platform/cloud/metrics/index",
              },
              collapsed: true,
              items: ["concepts/platform/cloud/metrics/tags"],
            },
          ],
        },
        {
          type: "category",
          label: "Self-host",
          link: {
            type: "doc",
            id: "concepts/platform/self-host/self-host",
          },
          collapsed: true,
          items: [
            "concepts/platform/self-host/deploy-tigris-on-eks",
            "concepts/platform/self-host/deploy-tigris-on-gke",
          ],
        },
      ],
    },
  ],
  guides: [
    {
      type: "category",
      label: "Next.js",
      link: {
        type: "doc",
        id: "guides/nextjs/index",
      },
      collapsed: false,
      items: ["guides/nextjs/add-existing-app/index"],
    },
    {
      type: "category",
      label: "Deploying Apps built with Tigris",
      collapsed: false,
      items: [
        "guides/deploy-tigris-app/deploy-existing-app-to-vercel/index",
        "guides/deploy-tigris-app/deploy-to-netlify/index",
      ],
    },
    {
      type: "category",
      label: "Nuxt.js",
      link: {
        type: "doc",
        id: "guides/nuxtjs/index",
      },
      collapsed: false,
      items: ["guides/nuxtjs/ecommerce/index"],
    },
    {
      type: "doc",
      id: "guides/rest-webapp-typescript",
    },
    {
      type: "doc",
      id: "guides/rest-webapp-go",
    },
    {
      type: "doc",
      id: "guides/rest-webapp-java",
    },
  ],
  sdkstools: [
    {
      type: "category",
      label: "SDKs & Tools",
      link: {
        type: "doc",
        id: "sdkstools/index",
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "TypeScript",
          link: {
            type: "doc",
            id: "sdkstools/typescript/index",
          },
          collapsed: true,
          items: [
            "sdkstools/typescript/index",
            {
              type: "category",
              label: "Database",
              link: {
                type: "doc",
                id: "sdkstools/typescript/database/index",
              },
              collapsed: false,
              items: [
                "sdkstools/typescript/database/datamodel",
                "sdkstools/typescript/database/types",
                "sdkstools/typescript/database/schema",
                "sdkstools/typescript/database/schema-bootstrap",
                "sdkstools/typescript/database/branching",
                "sdkstools/typescript/database/insert",
                "sdkstools/typescript/database/update",
                "sdkstools/typescript/database/delete",
                "sdkstools/typescript/database/query",
                "sdkstools/typescript/database/search",
                "sdkstools/typescript/database/secondary-indexes",
                "sdkstools/typescript/database/transactions",
                "sdkstools/typescript/database/cursor",
                "sdkstools/typescript/database/using-interfaces",
              ],
            },
            {
              type: "category",
              label: "Search",
              link: {
                type: "doc",
                id: "sdkstools/typescript/search/index",
              },
              collapsed: false,
              items: [
                "sdkstools/typescript/search/datamodel",
                "sdkstools/typescript/search/types",
                "sdkstools/typescript/search/index-documents",
                "sdkstools/typescript/search/fulltext-search",
                "sdkstools/typescript/search/vector-search",
                "sdkstools/typescript/search/get",
                "sdkstools/typescript/search/delete",
                "sdkstools/typescript/search/pagination",
                "sdkstools/typescript/search/using-interfaces",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Go",
          link: {
            type: "doc",
            id: "sdkstools/golang/index",
          },
          collapsed: true,
          items: [
            "sdkstools/golang/getting-started",
            {
              type: "category",
              label: "Database",
              link: {
                type: "doc",
                id: "sdkstools/golang/database/index",
              },
              collapsed: false,
              items: [
                "sdkstools/golang/database/datamodel",
                "sdkstools/golang/database/types",
                "sdkstools/golang/database/schema",
                "sdkstools/golang/database/insert",
                "sdkstools/golang/database/update",
                "sdkstools/golang/database/delete",
                "sdkstools/golang/database/query",
                "sdkstools/golang/database/search",
                "sdkstools/golang/database/secondary-indexes",
                "sdkstools/golang/database/transactions",
                "sdkstools/golang/database/iterator",
              ],
            },
            {
              type: "category",
              label: "Search",
              link: {
                type: "doc",
                id: "sdkstools/golang/search/index",
              },
              collapsed: false,
              items: [
                "sdkstools/golang/search/datamodel",
                "sdkstools/golang/search/types",
                "sdkstools/golang/search/index-documents",
                "sdkstools/golang/search/search-documents",
                "sdkstools/golang/search/get",
                "sdkstools/golang/search/delete",
                "sdkstools/golang/search/pagination",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Java",
          link: {
            type: "doc",
            id: "sdkstools/java/getting-started",
          },
          collapsed: true,
          items: [
            "sdkstools/java/getting-started",
            {
              type: "category",
              label: "Database",
              link: {
                type: "doc",
                id: "sdkstools/java/database/index",
              },
              collapsed: false,
              items: [
                {
                  type: "category",
                  label: "Data Modeling",
                  link: {
                    type: "doc",
                    id: "sdkstools/java/database/datamodel/overview",
                  },
                  collapsed: false,
                  items: [
                    "sdkstools/java/database/datamodel/declare",
                    "sdkstools/java/database/datamodel/primary-key",
                    "sdkstools/java/database/datamodel/embedded",
                    "sdkstools/java/database/datamodel/types",
                  ],
                },
                "sdkstools/java/database/insert",
                "sdkstools/java/database/update",
                "sdkstools/java/database/delete",
                "sdkstools/java/database/query",
                "sdkstools/java/database/search",
                "sdkstools/java/database/transactions",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Command Line Interface",
          link: {
            type: "doc",
            id: "sdkstools/cli/index",
          },
          collapsed: true,
          items: [
            "sdkstools/cli/authentication",
            "sdkstools/cli/installation",
            "sdkstools/cli/configuration",
            "sdkstools/cli/working-locally",
            "sdkstools/cli/importing",
            {
              type: "category",
              label: "Commands",
              link: {
                type: "doc",
                id: "sdkstools/cli/commands/index",
              },
              collapsed: true,
              items: [
                "sdkstools/cli/commands/alter-app-key",
                "sdkstools/cli/commands/alter-collection",
                "sdkstools/cli/commands/backup",
                "sdkstools/cli/commands/branch-checkout",
                "sdkstools/cli/commands/branch-create",
                "sdkstools/cli/commands/branch-delete",
                "sdkstools/cli/commands/branch-list",
                "sdkstools/cli/commands/branch-reset",
                "sdkstools/cli/commands/branch-show",
                "sdkstools/cli/commands/completion",
                "sdkstools/cli/commands/config-show",
                "sdkstools/cli/commands/create-app-key",
                "sdkstools/cli/commands/create-collection",
                "sdkstools/cli/commands/create",
                "sdkstools/cli/commands/create-namespace",
                "sdkstools/cli/commands/create-project",
                "sdkstools/cli/commands/db-search",
                "sdkstools/cli/commands/delete",
                "sdkstools/cli/commands/delete-project",
                "sdkstools/cli/commands/describe-collection",
                "sdkstools/cli/commands/describe-database",
                "sdkstools/cli/commands/describe",
                "sdkstools/cli/commands/dev-logs",
                "sdkstools/cli/commands/dev-start",
                "sdkstools/cli/commands/dev-stop",
                "sdkstools/cli/commands/drop-app-key",
                "sdkstools/cli/commands/drop-collection",
                "sdkstools/cli/commands/generate",
                "sdkstools/cli/commands/generate-sample-schema",
                "sdkstools/cli/commands/import",
                "sdkstools/cli/commands/insert",
                "sdkstools/cli/commands/invitation-create",
                "sdkstools/cli/commands/invitation-delete",
                "sdkstools/cli/commands/invitation-list",
                "sdkstools/cli/commands/invitation-verify",
                "sdkstools/cli/commands/list-app-keys",
                "sdkstools/cli/commands/list-collections",
                "sdkstools/cli/commands/list-namespaces",
                "sdkstools/cli/commands/list-projects",
                "sdkstools/cli/commands/login",
                "sdkstools/cli/commands/logout",
                "sdkstools/cli/commands/ping",
                "sdkstools/cli/commands/quota-limits",
                "sdkstools/cli/commands/quota-usage",
                "sdkstools/cli/commands/read",
                "sdkstools/cli/commands/replace",
                "sdkstools/cli/commands/restore",
                "sdkstools/cli/commands/scaffold",
                "sdkstools/cli/commands/search-import",
                "sdkstools/cli/commands/search-index-create",
                "sdkstools/cli/commands/search-index-delete",
                "sdkstools/cli/commands/search-index-describe",
                "sdkstools/cli/commands/search-index-list",
                "sdkstools/cli/commands/search-index",
                "sdkstools/cli/commands/server-info",
                "sdkstools/cli/commands/server-version",
                "sdkstools/cli/commands/transact",
                "sdkstools/cli/commands/update",
                "sdkstools/cli/commands/version",
              ],
            },
          ],
        },
        {
          type: "doc",
          label: "Create Tigris App",
          id: "sdkstools/create-tigris-app/create-tigris-app",
        },
        {
          type: "doc",
          label: "Tigris Astro Integration",
          id: "sdkstools/astro/index",
        },
        {
          type: "category",
          label: "MongoDB compatibility",
          link: {
            type: "doc",
            id: "sdkstools/mongodb-compatibility/index",
          },
          collapsed: true,
          items: [
            "sdkstools/mongodb-compatibility/mongodb-drivers",
            "sdkstools/mongodb-compatibility/mongodb-features",
            "sdkstools/mongodb-compatibility/mongosh",
          ],
        },
      ],
    },
  ],
  reference: [
    {
      type: "category",
      label: "References",
      link: {
        type: "doc",
        id: "references/index",
      },
      collapsed: false,
      items: [
        {
          label: "API Reference",
          type: "link",
          href: "/references/api",
        },
        {
          label: "HTTP status codes",
          type: "doc",
          id: "references/http-code",
        },
        {
          label: "HTTP types reference",
          type: "doc",
          id: "references/http-types",
        },
      ], // end of reference items
    },
  ],
  community: [
    {
      type: "doc",
      label: "Community",
      id: "community/index",
    },
    {
      type: "doc",
      label: "Code of Conduct",
      id: "community/code-of-conduct",
    },
  ],
};

module.exports = sidebars;
