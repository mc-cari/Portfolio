import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	output: 'static',
	// Cursor can exhaust Linux's inotify instance limit; polling keeps dev mode reliable.
	vite: {
		server: {
			watch: {
				usePolling: true,
				interval: 1000,
			},
		},
	},
});
