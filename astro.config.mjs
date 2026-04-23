// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			// 侧边栏插件
			plugins: [
				starlightSidebarTopics([
					{
						label: '健康记',
						link: '/health',
						icon: 'slack',
						//items: ['guides/getting-started', 'guides/manual-setup'],
						items: [
							{
								label: '健康记专题',
								autogenerate: { directory: 'health' },
							},
						],
					},
					{
						label: '投资记',
						link: '/invest',
						icon: 'rocket',
						items: [
							{
								label: '投资记专题',
								autogenerate: { directory: 'invest' },
							},
						],
					},
					{
						label: '生活记',
						link: '/lifedoc',
						icon: 'pencil',
						items: [
							{
								label: '生活记专题',
								autogenerate: { directory: 'lifedoc' },
							},
						],
					},
				]),
			],


			title: '望云川文档',
			description: '人生笔记本，归纳碎片化信息流，提供极致流畅的阅读体验。',
			defaultLocale: 'zh-CN',
			locales: {
				root: {
					label: '中文',
					lang: 'zh-CN',
				},
			},
			lastUpdated: false,
			social: [{ icon: 'github', label: 'GitHub', href: '' }],
	
			customCss: [
				'./src/styles/custom.css',
			],

		/*	sidebar: [
				{
					label: '健康/健身',
					collapsed: true,
					// 自动扫描 src/content/docs/ 下所有文件/文件夹
					autogenerate: {
						directory: 'health',
					},
				},

				{
					label: '投资理财',
					collapsed: true,
					// 自动扫描 src/content/docs/ 下所有文件/文件夹
					autogenerate: {
						directory: 'invest',
					},
				},

				{
					label: '科技生活',
					collapsed: true,
					// 自动扫描 src/content/docs/ 下所有文件/文件夹
					autogenerate: {
						directory: 'lifedoc',
					},
				},
			],*/
		}),
	],
});
