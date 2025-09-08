<script setup lang="ts">
type BlogListItem = {
  title: string
  description: string
  image: string
  _path: string
}

// Static list for now (opt-in to headless content later)
const posts: BlogListItem[] = [
  {
    title: 'Introducing Nuxt Icon v1',
    description:
      'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    _path: '/blog/introducing-nuxt-icon-v1'
  },
  {
    title: 'Introducing Nuxt Icon v1',
    description:
      'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    _path: '/blog/introducing-nuxt-icon-v1-2'
  }
]
</script>

<template>
  <UPage>
    <Hero title="Blog" description="Insights, tips, and stories from the world of advertising and media."/>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-14 my-8">
      <UBlogPost
        v-for="post in posts"
        :key="post._path"
        :title="post.title"
        :description="post.description"
        :image="post.image"
        :ui="{root:'p-3',footer:'self-center'}"
      >
        <template #footer>
          <UButton :label="$t('common.readMore')" :href="post._path" class="self-center justify-self-center"/>
        </template>
      </UBlogPost>
    </div>
  </UPage>
</template>
