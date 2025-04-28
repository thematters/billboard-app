export default {
  browserNodeBuiltinsPolyfill: {
    modules: {
      buffer: true,
      events: true,
    },
  },
  ignoreRignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: ['lodash-es']
}
