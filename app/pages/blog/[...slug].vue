<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

type BlogPost = {
  title: string
  description: string
  image: string
  author: { name: string; avatar: string }
  date: string
  minRead: number
  content: string[]
  gallery: string[]
  tags: string[]
  path: string
}

const mockPosts: BlogPost[] = [
  {
    title: 'Introducing Nuxt Icon v1',
    description:
      'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    author: { name: 'Alexandra N.', avatar: 'https://i.pravatar.cc/100?img=5' },
    date: '2024-01-09',
    minRead: 4,
    content: [
      'In today’s digital world, icons carry meaning at a glance. Nuxt Icon v1 offers a lightweight, flexible way to use thousands of icons across your app with a consistent API.',
      'The library is tree-shakeable, supports size and color props, and integrates seamlessly with Nuxt and Vue components.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop'
    ],
    tags: ['Nuxt', 'Icons', 'Frontend'],
    path: '/blog/introducing-nuxt-icon-v1'
  },
  {
    title: 'Introducing Nuxt Icon v1 (2)',
    description:
      'A follow‑up with deeper dives into patterns and best practices when using Nuxt Icon.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    author: { name: 'Alexandra N.', avatar: 'https://i.pravatar.cc/100?img=6' },
    date: '2024-01-16',
    minRead: 5,
    content: [
      'Beyond the basics, this post explores composability patterns and performance tips to keep your UI crisp and your bundle lean.',
      'You will also see how to align iconography with your design system tokens.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop'
    ],
    tags: ['Nuxt', 'Icons', 'Best Practices'],
    path: '/blog/introducing-nuxt-icon-v1-2'
  }
]

const route = useRoute()
const router = useRouter()

const currentPath = computed(() => `/blog/${(route.params.slug as string[] | string)?.toString().split(',').join('/')}`)
const post = computed(() => mockPosts.find(p => p.path === currentPath.value))
const nextPosts = computed(() => mockPosts.filter(p => p.path !== (post.value?.path || '')))

if (!post.value) {
  router.replace('/blog')
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <UPage v-if="post">
    <div class="flex items-center text-sm gap-1 text-muted">
      <NuxtLink to="/blog" class="inline-flex items-center gap-1 hover:underline">
        <UIcon name="lucide:chevron-left" />
        Back
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
      <div class="lg:col-span-2 flex flex-col gap-6">
        <NuxtImg :src="post.image" :alt="post.title" class="rounded-lg w-full h-[280px] md:h-[360px] object-cover" />

        <UUser :avatar="{ src: `${post.author.avatar}` }" :name="post.author.name"
          :description="`${formatDate(post.date)} / ${post.minRead} MIN READ`" />

        <h1 class="text-3xl md:text-4xl font-semibold text-start">{{ post.title }}</h1>
        <p class="text-start text-muted max-w-2xl mx-auto">{{ post.description }}</p>

        <ul class="flex flex-col gap-4 list-disc">
          <li v-for="(p, i) in post.content" :key="i" class="leading-7 text-[15px] text-gray-600">
            {{ p }}
          </li>
        </ul>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtImg v-for="(img, i) in post.gallery" :key="i" :src="img" class="rounded-lg w-full h-44 object-cover" />
        </div>

        <div class="flex items-center gap-3 text-sm">
          <span class="text-muted">Share:</span>
          <UIcon name="lucide:facebook" class="cursor-pointer" />
          <UIcon name="lucide:twitter" class="cursor-pointer" />
          <UIcon name="lucide:linkedin" class="cursor-pointer" />
        </div>
      </div>

      <aside class="lg:col-span-1 flex flex-col gap-6">
        <div>
          <h3 class="font-semibold mb-3">Next Blog</h3>
          <div v-for="p in nextPosts.slice(0, 1)" :key="p.path" class="flex gap-3">
            <NuxtImg :src="p.image" class="w-24 h-16 rounded object-cover" />
            <div class="text-sm">
              <NuxtLink :to="p.path" class="font-medium hover:underline line-clamp-2">{{ p.title }}</NuxtLink>
              <p class="text-muted line-clamp-2">{{ p.description }}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-3">Our Gallery</h3>
          <div class="grid grid-cols-3 gap-2">
            <NuxtImg v-for="(img, i) in post.gallery" :key="i" :src="img" class="w-full h-20 rounded object-cover" />
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-3">Tags</h3>
          <div class="flex flex-wrap gap-2">
            <UBadge v-for="tag in post.tags" :key="tag" color="neutral" variant="subtle">{{ tag }}</UBadge>
          </div>
        </div>
      </aside>
    </div>
  </UPage>
</template>
