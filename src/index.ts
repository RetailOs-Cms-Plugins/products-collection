import type { Config } from 'payload'
export const productsCollection =
  (pluginOptions?: any) =>
  (config: Config): Config => {
    return {
      ...config,
    }
  }
