import { defineCollection, z } from 'astro:content';
const blogCollection =  defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string().optional(),
			publishDate: z.coerce.date(),
			read: z.number().optional(),
			tags: z.array(z.string()).optional(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
});

export const collections = {
	'blog': blogCollection,
	'team': blogCollection,
	'research': blogCollection,
	'conference': blogCollection,
	'focus': blogCollection,
	'patent': blogCollection,
	'award': blogCollection,
	'our': blogCollection,
};