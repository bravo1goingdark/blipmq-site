import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    lottie: ['lottie-react'],
                    lucide: ['lucide-react'],
                },
            },
        },
        minify : true,
        target : 'es2018'
    },
    preview : {
        allowedHosts : true
    },
})
