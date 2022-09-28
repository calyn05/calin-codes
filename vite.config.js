import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        notfound: resolve(__dirname, "404.html"),
        projects: resolve(__dirname, "./pages/projects.html"),
        about: resolve(__dirname, "./pages/about.html"),
        contact: resolve(__dirname, "./pages/contact.html"),
        wordpress: resolve(__dirname, "./pages/projects/wordpress-blog.html"),
        portfolio: resolve(__dirname, "./pages/projects/calin-codes.html"),
        shifter: resolve(__dirname, "./pages/projects/shift-manager.html"),
        advice: resolve(__dirname, "./pages/projects/advice-generator.html"),
        resume: resolve(__dirname, "./pages/projects/resume.html"),
        github: resolve(__dirname, "./pages/projects/github.html"),
        firebaseConfig: resolve(__dirname, "firebaseConfig.js"),
      },
    },
  },
});
