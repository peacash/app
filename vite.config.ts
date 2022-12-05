import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
	build: {
		target: 'es2020'
	},
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`
		}
	},
	plugins: [
		Vue(),
		VitePWA({
			srcDir: 'src',
			filename: 'sw.ts',
			base: '/',
			strategies: 'injectManifest',
			registerType: 'autoUpdate',
			manifest: {
				theme_color: '#ffeeff',
				background_color: '#ffeeff',
				name: 'Pea App',
				short_name: 'Pea',
				start_url: '.',
				display: 'standalone',
				description:
					"Pea.",
				icons: [
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable',
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
		Pages(),
		ViteComponents({
			customComponentResolvers: [
				ViteIconsResolver({
					componentPrefix: ''
				})
			]
		}),
		ViteIcons()
	],
	optimizeDeps: {
		include: ['vue', 'vue-router', '@vueuse/core'],
		exclude: ['vue-demi']
	},
	server: {
		fs: {
			allow: [".","./wallet/pkg"]
		}
	}
})