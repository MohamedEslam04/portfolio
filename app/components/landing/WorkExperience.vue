<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-6">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="flex flex-col gap-2"
        >
          <div class="text-muted flex flex-wrap items-center text-nowrap gap-2">
            <p class="text-sm">
              {{ experience.date }}
            </p>
            <USeparator class="w-6" />
            <ULink
              class="flex items-center gap-1"
              :to="experience.company.url"
              target="_blank"
            >
              <span class="text-sm">
                {{ experience.position }}
              </span>
              <div
                class="inline-flex items-center gap-1"
                :style="{ color: experience.company.color }"
              >
                <span class="font-medium">{{ experience.company.name }}</span>
                <UIcon :name="experience.company.logo" />
              </div>
            </ULink>
          </div>

          <p
            v-if="experience.location"
            class="text-xs text-muted"
          >
            {{ experience.location }}
          </p>

          <ul
            v-if="experience.highlights?.length"
            class="ml-4 list-disc space-y-1 text-sm text-muted"
          >
            <li
              v-for="highlight in experience.highlights"
              :key="highlight"
            >
              {{ highlight }}
            </li>
          </ul>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
