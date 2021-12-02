import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss'
import { createVuePlugin } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'

export default defineConfig({
  plugins: [createVuePlugin(), ScriptSetup(), WindiCSS()],
});
