import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 4002
  },
  moduleFederation: {
    options: {
      name: 'rsbuildRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: {
        react: {
          requiredVersion: '18.3.1',
          singleton: true,
        },
        'react-dom': {
          requiredVersion: '18.3.1',
          singleton: true,
        },
      },
    }
  },
});
