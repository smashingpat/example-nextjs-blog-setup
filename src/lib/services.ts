import { v4 as uuid } from 'uuid';
import slugify from 'slugify';
import * as faker from 'faker';
import { GeneralPost, Post } from './models';

function createFakePost(title: string): Post {
  return {
    id: uuid(),
    title,
    content: faker.lorem.paragraphs(3),
    slug: slugify(title.toLowerCase()),
    timestamp: faker.date.past(1).getTime() / 1000,
  };
}

const posts: Post[] = [
  createFakePost('First post'),
  createFakePost('Second post'),
  createFakePost('MOrE oF tHe sAMe'),
];

async function getPost(slug: string): Promise<Post | null> {
  const lowercasedSlug = slug.toLowerCase();
  const found = posts.find((post) => post.slug.toLowerCase() === lowercasedSlug);

  return found || null;
}

async function getAllPosts(): Promise<GeneralPost[]> {
  return posts;
}

export { getPost, getAllPosts };
