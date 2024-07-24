import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: true,
            },
          ],
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["test-setup.ts"],
    // Workaround for testing-library/react-testing-library#1197
    fakeTimers: { shouldAdvanceTime: true },
  },
});
