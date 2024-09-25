import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        booking: 'booking.html'
        // Add more entry points as needed
      }
    }
  }
})
