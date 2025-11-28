import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).optional(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

const trainingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).optional(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  training: trainingCollection,
};
