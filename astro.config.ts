import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import type { ManifestOptions } from "vite-plugin-pwa";
import manifest from "./webmanifest.json";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Carers Handbook',
			logo: {
				light: './src/assets/light-logo.svg',
				dark: './src/assets/dark-logo.svg',
			  },
			credits: false,
			customCss: ['./src/styles/custom.css'],
			social: {
				instagram: 'https://instagram.com/wholisticfostering',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting Started', slug: 'get-started' },
						{ label: 'The Foster Carer', slug: 'guides/the-foster-carer/intro' },
						{ label: 'The Fostered Child', slug: 'guides/the-foster-child/intro' },
						{ label: 'The Fostering Task', slug: 'guides/the-fostering-task/intro' },
						{ label: 'Allowance Guidelines', slug: 'guides/allowance-guidelines/intro' },
					],
				},
				{
					label: 'Emergency',
					collapsed: true,
					autogenerate: { directory: 'sections/emergency' },
				},
				{
					label: 'Safeguarding',
					collapsed: true,
					autogenerate: { directory: 'sections/safeguarding' },
				},
				{
					label: 'Daily Care',
					collapsed: true,
					items: [
						{ label: 'Behaviour support', slug: 'sections/daily-care/behaviour-support' },
						{ label: 'Building attachment', slug: 'sections/daily-care/building-attachment' },
						{ label: 'Internet safety', slug: 'sections/daily-care/internet-safety' },
						{ label: 'Cultural & identity support', slug: 'sections/daily-care/cultural-identity-support' },
						{ label: 'Life skills', slug: 'sections/daily-care/life-skills' },
						{ label: 'Promoting independence', slug: 'sections/daily-care/promoting-independence' },
						{ label: 'Pocket money guidance', slug: 'sections/daily-care/pocket-money-guidance' },
					],
				},
				{
					label: 'Health',
					collapsed: true,
					items: [
						{ label: 'Consent for medical treatment', slug: 'sections/health/consent-medical-treatment' },
						{ label: 'Medication storage & recording', slug: 'sections/health/medication-storage-recording' },
						{ label: 'Health appointments', slug: 'sections/health/health-appointments' },
						{ label: 'Mental health support', slug: 'sections/health/mental-health-support' },
						{ label: 'First aid guidance', slug: 'sections/health/first-aid-guidance' },
					],
				},
				{
					label: 'Education',
					collapsed: true,
					items: [
						{ label: 'Supporting school attendance', slug: 'sections/education/supporting-school-attendance' },
						{ label: 'PEP (Personal Education Plan)', slug: 'sections/education/personal-education-plan' },
						{ label: 'Working with schools', slug: 'sections/education/working-with-schools' },
						{ label: 'Exclusions', slug: 'sections/education/exclusions' },
						{ label: 'Additional needs support', slug: 'sections/education/additional-needs-support' },
					],
				},
				{
					label: 'Contact',
					collapsed: true,
					autogenerate: { directory: 'sections/contact' },
				},
				{
					label: 'Recording',
					collapsed: true,
					autogenerate: { directory: 'sections/recording' },
				},
				{
					label: 'Support',
					collapsed: true,
					autogenerate: { directory: 'sections/support' },
				},					
				{
					label: 'Policies',
					collapsed: true,
					autogenerate: { directory: 'policies' },
				},
			],
			components: {
				Head: './src/components/Head.astro',
				Search: './src/components/Search.astro',
						}
		}),
		AstroPWA({
			workbox: {
			  skipWaiting: true,
			  clientsClaim: true,
			  navigateFallback: "/404",
			  ignoreURLParametersMatching: [/./],
			  globPatterns: ['**/*.{html,js,css,png,svg,json,ttf,pf_fragment,pf_index,pf_meta,pagefind,wasm}'],
			},
			 experimental: {
			  directoryAndTrailingSlashHandler: true,
			},
			mode: "production",
			registerType: 'autoUpdate',
			manifest: (manifest as Partial<ManifestOptions>)
		  }),
	],
});
