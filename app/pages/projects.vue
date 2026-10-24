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

    <!-- Projects Grid Section -->
    <UPageSection :ui="{
      container: '!pt-0'
}">
      <!-- Projects Stats -->
      <div class="mb-8 text-center">
        <div class="inline-flex items-center gap-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">{{ projects?.length || 0 }}</div>
            <div class="text-sm text-muted">Total Projects</div>
          </div>
          <div class="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">{{ projects?.filter(p => p.url !== '#').length || 0 }}</div>
            <div class="text-sm text-muted">Live Projects</div>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Motion v-for="(project, index) in projects" :key="project.title"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.1 * index, duration: 0.6 }" :in-view-options="{ once: true }" class="group">
          <div
            class="relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
            <!-- Project Image -->
            <div class="relative overflow-hidden aspect-video">
              <NuxtImg :src="project.image" :alt="project.title" loading="lazy" format="webp"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <!-- Project Status Badge -->
              <div class="absolute top-3 right-3">
                <UBadge :color="project.url !== '#' ? 'success' : 'neutral'" variant="solid" size="sm">
                  {{ project.url !== '#' ? 'Live' : 'In Development' }}
                </UBadge>
              </div>
              <!-- Year Badge -->
              <div class="absolute top-3 left-3">
                <UBadge color="secondary" variant="solid" size="sm" class="text-white font-medium">
                  {{ new Date(project.date).getFullYear() }}
                </UBadge>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <!-- Title and Description -->
              <h3
                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Technology Tags -->
              <div class="mb-6">
                <div class="flex flex-wrap gap-2">
                  <UBadge v-for="tag in project.tags" :key="tag" color="neutral" variant="soft" size="xs"
                    class="text-xs font-medium">
                    {{ tag }}
                  </UBadge>
                  <!-- <UBadge
                    v-if="project.tags && project.tags.length > 6"
                    color="neutral"
                    variant="soft"
                    size="xs"
                    class="text-xs font-medium"
                  >
                    +{{ project.tags.length - 6 }} more
                  </UBadge> -->
                </div>
              </div>

              <!-- Project Actions -->
              <div class="flex items-center justify-between">
                <UButton :to="project.url" target="_blank" :disabled="project.url === '#'" variant="ghost"
                  color="primary" size="sm" class="group-hover:bg-primary group-hover:text-white transition-all">
                  <span>{{ project.url !== '#' ? 'View Project' : 'Coming Soon' }}</span>
                  <UIcon v-if="project.url !== '#'" name="i-lucide-external-link"
                    class="size-4 ml-2 transition-transform group-hover:translate-x-1" />
                  <UIcon v-else name="i-lucide-clock" class="size-4 ml-2" />
                </UButton>

                <!-- GitHub Link (if available) -->
                <UButton v-if="project.url !== '#'" :to="project.url" variant="ghost" color="neutral" size="sm"
                  class="opacity-0 group-hover:opacity-100 transition-all" target="_blank">
                  <UIcon name="i-lucide-github" class="size-4" />
                </UButton>
              </div>
            </div>

            <!-- Hover Effect Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            </div>
          </div>
        </Motion>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <div class="max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to work together?
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Let's discuss your next project and bring your ideas to life with modern web technologies.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton :to="global.meetingLink" color="primary" size="lg">
              Schedule a Meeting
            </UButton>
            <UButton :to="`mailto:${global.email}`" variant="outline" size="lg">
              Send Email
            </UButton>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Open Source Contributions Section -->
    <UPageSection :ui="{ container: '!pt-0' }">
      <div class="border-t border-gray-200 dark:border-gray-800 pt-12">
        <div class="mb-10">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Open Source Contributions</h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm">NPM packages, bug reports, and other open-source contributions.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Motion v-for="(contrib, index) in contributions" :key="contrib.title"
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ delay: 0.1 * index, duration: 0.5 }"
            :in-view-options="{ once: true }"
            class="group">
            <NuxtLink :to="contrib.url" target="_blank" class="block h-full">
              <div class="relative h-full overflow-hidden bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 p-6">
                <!-- Badge + Year -->
                <div class="flex items-center justify-between mb-4">
                  <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-900">
                    {{ contrib.type }}
                  </span>
                  <span class="text-xs text-gray-400 dark:text-gray-500">{{ new Date(contrib.date).getFullYear() }}</span>
                </div>

                <!-- Title -->
                <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors font-mono">
                  {{ contrib.title }}
                </h3>

                <!-- Description -->
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4">
                  {{ contrib.description }}
                </p>

                <!-- Link -->
                <div class="flex items-center gap-1 text-xs text-primary font-medium mt-auto">
                  View Contribution
                  <UIcon name="i-lucide-arrow-right" class="size-3 transition-transform group-hover:translate-x-1" />
                </div>

                <!-- Hover overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              </div>
            </NuxtLink>
          </Motion>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
