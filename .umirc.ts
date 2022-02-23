import { defineConfig } from 'dumi';

export default defineConfig({
  title: `ShaneJix's Interview`,
  mode: 'site',
  favicon: '../assets/favicon.png',
  logo: '../icons/icon-96x96.png',
  locales: [
    // ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  publicPath: './',
  history: { type: 'hash' },
  // more config: https://d.umijs.org/config
});
