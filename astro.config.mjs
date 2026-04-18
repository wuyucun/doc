// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '望云川文档',
			description: '人生笔记本，归纳碎片化信息流，提供极致流畅的阅读体验。',
			defaultLocale: 'zh-CN',
			locales: {
				root: {
					label: '中文',
					lang: 'zh-CN',
				},
			},
			lastUpdated: true,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
	     	//sidebar: [
			//	{
		//			label: '导航',
	//				items: [
						// Each item here is one entry in the navigation menu.
		//				{ label: 'Example Guide', slug: 'guides/example' },
			//		],
			//		  autogenerate: {
			//			  directory: '.',
			//			  collapsed: true // ✅ 所有子目录默认折叠
			//	  },
	//			{
	//				label: 'Reference',
		//			autogenerate: { directory: 'health' },

			//	  },

			//	],
			customCss: [
				'./src/styles/custom.css',
			],

			sidebar: [
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
					label: '技术与生活',
					collapsed: true,
					// 自动扫描 src/content/docs/ 下所有文件/文件夹
					autogenerate: {
						directory: 'lifedoc',
					},
				},
			],
		}),
	],
});
