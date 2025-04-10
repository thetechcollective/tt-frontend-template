/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // watch: {
        //  usePolling: true,
        // },
        host: true, // Here
        // strictPort: true,
    },
    test: {
        // vitest config goes here
        // Docs: https://vitest.dev/guide/
        // Vitest & React: https://github.com/vitest-tests/browser-examples/tree/main/examples/react
    },
});
