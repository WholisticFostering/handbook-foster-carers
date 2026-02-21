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
					label: 'Emergency',
					items: [
						
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'sections/emergency/intro' },
						{ label: 'Emergency contacts (24/7)', slug: 'sections/emergency/contact-numbers' },
						{ label: 'What to do if a child discloses abuse', slug: 'sections/emergency/disclosure' },
						{ label: 'Missing from home procedure', slug: 'sections/emergency/missing-child' },
						{ label: 'Immediate safeguarding concerns', slug: 'sections/emergency/concerns' },
						{ label: 'Serious injury or medical emergency', slug: 'sections/emergency/serious-medical-emergency' },
						{ label: 'Allegation made against you', slug: 'sections/emergency/allegation-against-me' },
						{ label: 'Police involvement guidance', slug: 'sections/emergency/police-involvement' },
						// { label: 'Introduction', slug: 'sections/emergency/intro' },
						// { label: 'Alcohol, Drugs & Solvents', slug: 'sections/emergency/alcohol-drugs-and-solvents' },
						// { label: 'Allegations', slug: 'sections/emergency/allegations-against-staff-carers' },
						// { label: 'Bullying', slug: 'sections/emergency/bullying' },
						// { label: 'Child Protection', slug: 'sections/emergency/child-protection' },
						// { label: 'Child Sexual Abuse (CSE)', slug: 'sections/emergency/child-sexual-exploitation' },
						// { label: 'Children Missing from Care', slug: 'sections/emergency/allegations-against-staff-carers' },
						// { label: 'Confidentiality', slug: 'sections/emergency/allegations-against-staff-carers' },
						// { label: 'Images of Children', slug: 'sections/emergency/allegations-against-staff-carers' },
						// { label: 'Internet & Email', slug: 'sections/emergency/allegations-against-staff-carers' },
						// { label: 'Monitoring & Notifications', slug: 'sections/emergency/allegations-against-staff-carers' },
						// { label: 'Out-of-hours Support', slug: 'sections/emergency/allegations-against-staff-carers' },
						// { label: 'Personal Care and Relationships', slug: 'sections/emergency/allegations-against-staff-carers' },
					],
				},
				{
					label: 'Safeguarding',
					items: [
						// Each item here is one entry in the navigation menu.
						// Types of abuse
						{ label: 'Types of abuse', slug: 'sections/safeguarding/types-of-abuse' },
						// Recording concerns correctly
						{ label: 'Recording concerns correctly', slug: 'sections/safeguarding/recording-concerns' },
						// Escalation process
						{ label: 'Escalation process', slug: 'sections/safeguarding/escalation-process' },
						// Whistleblowing
						{ label: 'Whistleblowing', slug: 'sections/safeguarding/whistleblowing' },
						// Safer care policies
						{ label: 'Safer care policies', slug: 'sections/safeguarding/safer-care-policies' },
						// Managing allegations
						{ label: 'Managing allegations', slug: 'sections/safeguarding/managing-allegations' },
						
					],
				},
				{
					label: 'Daily Care',
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
					items: [
						{ label: 'Supporting school attendance', slug: 'sections/education/supporting-school-attendance' },
						{ label: 'PEP (Personal Education Plan)', slug: 'sections/education/personal-education-plan' },
						{ label: 'Working with schools', slug: 'sections/education/working-with-schools' },
						{ label: 'Exclusions', slug: 'sections/education/exclusions' },
						{ label: 'Additional needs support', slug: 'sections/education/additional-needs-support' },
					],
				},
				{
					label: 'Placements',
					items: [
					],
				},	
				{
					label: 'Recording',
					items: [
					],
				},
				{
					label: 'Support',
					items: [
					],
				},					
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Policies',
					autogenerate: { directory: 'policies' },
				},
			],
			components: {
				Head: './src/components/Head.astro',
				Search: './src/components/Search.astro',
				// Footer: "./src/components/CustomFooter.astro",
				Footer: "./src/components/FooterWrapper.astro",
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
