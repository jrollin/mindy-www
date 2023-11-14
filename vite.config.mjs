import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src'),
            '@usecases': path.resolve(__dirname, './core/usecases/'),
            '@domains': path.resolve(__dirname, './core/domains/'),
            '@components': path.resolve(__dirname, './src/components'),
        },
    },
    plugins: [react(), nodePolyfills()],
});
