import { defineCollection, z } from "astro:content";

const publicImage = z.string().refine((value) => value.startsWith("/images/"), {
  message: "Public image paths must start with /images/",
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      tags: z.array(z.string()).optional(),
      description: z.string(),
      image: z.union([publicImage, image()]).optional(),
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
      image: z.union([publicImage, image()]).optional(),
    }),
});

export const collections = {
  blog: blogCollection,
  training: trainingCollection,
};
