import { defineConfig, type PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
// 包导出的是 fumiVite，README 里写的 fumi 是错的（0.0.3）
import { fumiVite } from '@subwaytime/fumi/vite';

export default defineConfig({
  base: '/',
  // 它返回的对象 map 字段类型偏窄，转一次；fumi 要排在 vue 前面
  plugins: [fumiVite() as PluginOption, vue()],
});
