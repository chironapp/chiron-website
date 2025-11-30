import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      tags: z.array(z.string()).optional(),
      description: z.string(),
      image: z.union([image(), z.string()]).optional(),
    }),
});

const trainingCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      tags: z.array(z.string()).optional(),
      description: z.string(),
      image: z.union([image(), z.string()]).optional(),
    }),
});

export const collections = {
  blog: blogCollection,
  training: trainingCollection,
};
