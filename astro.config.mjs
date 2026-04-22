// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			// 侧边栏插件
			plugins: [
				starlightSidebarTopics([
					{
						label: '健康记',
						link: '/health/',
						icon: 'open-book',
						//items: ['guides/getting-started', 'guides/manual-setup'],
						autogenerate: {
							directory: 'health',
						},
					},
					{
						label: 'Reference',
						link: '/reference/',
						icon: 'information',
						items: ['reference/api', 'reference/components'],
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
