// next.config.mjs
export default {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/pages",
      },
      {
        source: "/login",
        destination: "/src/app/pages/Login",
      },
    ];
  },
};
