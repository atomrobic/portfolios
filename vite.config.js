import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  server: {
    host: "0.0.0.0", // ✅ allows access via local network IP (e.g., 192.168.x.x)
    port: 5173, // ✅ you can change this to any available port
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 add this line
    },
  },
})
