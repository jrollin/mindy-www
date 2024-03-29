import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, './');
    return {
        resolve: {
            alias: {
                '@app': path.resolve(__dirname, './src'),
                '@usecases': path.resolve(__dirname, './core/usecases/'),
                '@domains': path.resolve(__dirname, './core/domains/'),
                '@components': path.resolve(__dirname, './src/components'),
            },
        },
        plugins: [react(), nodePolyfills()],
        define: {
            VITE_API_URL: JSON.stringify(env.VITE_API_URL),
        },
    };
});
