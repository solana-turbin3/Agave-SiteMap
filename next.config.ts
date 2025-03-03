import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer, dev, webpack }) {
    config.output.webassemblyModuleFilename =
    isServer && !dev
        ? '../app/wasm/scripts/[modulehash].wasm'
        : 'app/wasm/scripts/[modulehash].wasm'

// Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
config.experiments = { ...config.experiments, asyncWebAssembly: true }

// Disable webpack cache in production to prevent the pack error
if (process.env.NODE_ENV === 'production') {
  config.cache = false
}

// Deubbing (vercel/next.js/issues/27650)
config.infrastructureLogging = { debug: /PackFileCache/ }

return config
  },
};

export default nextConfig;