// import { defineConfig } from 'vite';
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import vue from '@vitejs/plugin-vue';
// export default defineConfig({
//   // ...
//   plugins: [
//     // ...
//     [vue()],
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//   ],
// });

// vite.config.js
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  base: "./",
  // ...
  plugins: [
    // ...
    [vue()],
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8080',
  //       changeOrigin: true,
  //       headers: {
  //         Referer: 'http://localhost:3000',
  //         Origin: 'http://localhost:3000'
  //       },
  //     }
  //   }
  // },
  build: {
    chunkSizeWarningLimit: 1600,
    publicPath: "./"
  },
});