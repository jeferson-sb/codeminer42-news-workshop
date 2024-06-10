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
  date: string
  region?: string
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

export type StoriesResponse = {
  todayHighlight: Story
  secondaries: Story[]
  opinions: Story[]
  categorized: Record<string, Story[]>
}

const api = {
  stories: async () => {
    const storiesApi = await fetch('http://localhost:3333/stories')

    return storiesApi.json()
  },
}

export default api

export type { Story, Image, Author }
