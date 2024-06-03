type Entity = { id: string }

type Image = {
  src: string
  alt?: string
}

type Author = {
  name: string
  avatar: Image
}

interface Story extends Entity {
  title: string
  poster: Image
  category?: string
  abstract: string
  author: Author
  slug: string
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

const api = {
  stories: async () => {
    // TODO
  },
}

export default api

export type { Story, Image, Author }
