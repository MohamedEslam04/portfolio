<script setup lang="ts">
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').order('date', 'DESC').all()
})

const { data: contributions } = await useAsyncData('contributions', () => {
  return queryCollection('contributions').order('date', 'DESC').all()
})

const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero :title="page.title" :description="page.description" :links="page.links" :ui="{
      title: '!mx-0 text-left',
      description: '!mx-0 text-left',
      links: 'justify-start'
    }">
      <template #links>
        <div v-if="page.links" class="flex items-center gap-2">
          <UButton :label="page.links[0]?.label" :to="global.meetingLink" v-bind="page.links[0]" />
          <UButton :to="`mailto:${global.email}`" v-bind="page.links[1]" />
        </div>
      </template>
    </UPageHero>
    
    <UPageSection :ui="{
      container: '!pt-0'
    }">
      <Motion v-for="(project, index) in projects" :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }" :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }">
        <UPageCard :title="project.title" :description="project.description" :to="project.url" orientation="horizontal"
          variant="naked" spotlight :reverse="index % 2 === 1" class="group" :ui="{
            body: 'px-4',
            wrapper: 'max-sm:order-last'
          }">
          <template #leading>
            <span class="text-sm px-4 text-muted">
              {{ new Date(project.date).getFullYear() }}
            </span>
          </template>
          <template #footer>
            <ULink :to="project.url" class="text-sm text-primary px-4 flex items-center">
              View Project
              <UIcon name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
            </ULink>
          </template>
          <img :src="project.image" :alt="project.title" class="object-cover w-full h-48 rounded-lg">
        </UPageCard>
      </Motion>
    </UPageSection>

    <UPageSection 
      title="Open Source Contributions" 
      description="NPM packages, bug reports, and other open-source contributions."
      class="border-t border-default pt-12"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Motion v-for="(contrib, index) in contributions" :key="contrib.title"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }" :transition="{ delay: 0.1 * index }"
          :in-view-options="{ once: true }">
          <UPageCard :title="contrib.title" :description="contrib.description" :to="contrib.url"
            variant="naked" spotlight class="group h-full border border-default rounded-xl p-6" :ui="{
              body: 'p-0',
              title: 'text-lg font-bold group-hover:text-primary transition-colors',
              description: 'text-sm text-muted mt-2'
            }">
            <template #leading>
              <div class="flex items-center justify-between w-full mb-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400">
                  {{ contrib.type }}
                </span>
                <span class="text-xs text-muted">
                  {{ new Date(contrib.date).getFullYear() }}
                </span>
              </div>
            </template>
            <template #footer>
              <div class="mt-4 flex items-center justify-between text-xs text-muted w-full">
                <span class="text-primary font-medium inline-flex items-center gap-1 group-hover:underline">
                  View Contribution
                  <UIcon name="i-lucide-arrow-right" class="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </template>
          </UPageCard>
        </Motion>
      </div>
    </UPageSection>
  </UPage>
</template>
