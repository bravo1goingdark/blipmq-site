import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: "/blipmq-site",
    plugins: [react(), tailwindcss()],
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
