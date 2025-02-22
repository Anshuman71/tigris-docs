module.exports = {
  protodocs: [
    {
      type: "category",
      label: "RPC",
      items: [
        {
          type: "category",
          label: "/server/v1",
          items: [
            { type: "doc", id: "server/v1/api.proto" },
            { type: "doc", id: "server/v1/admin.proto" },
            { type: "doc", id: "server/v1/health.proto" },
            { type: "doc", id: "server/v1/auth.proto" },
            { type: "doc", id: "server/v1/observability.proto" },
          ],
        },
      ],
    },
  ],
};
