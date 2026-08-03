import { file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const publicImage = z.string().refine((value) => value.startsWith("/images/"), {
  message: "Public image paths must start with /images/",
});

const authorSchema = z.object({
  name: z.string(),
  role: z.string(),
  avatar: publicImage,
  bio: z.string(),
      socials: z.object({
      instagram: z.string().url().optional(),
      strava: z.string().url().optional(),
    }).optional(),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      author: reference("authors").default("clive"),
      tags: z.array(z.string()).optional(),
      description: z.string(),
      image: z.union([publicImage, image()]).optional(),
    }),
});

const authorsCollection = defineCollection({
  loader: file("src/content/authors/authors.json"),
  schema: authorSchema,
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

const legalCollection = defineCollection({
  type: "content",
  schema: z.object({}),
});

export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
  training: trainingCollection,
  legal: legalCollection,
};
