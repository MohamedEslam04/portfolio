<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    v-if="page.skills"
    :title="page.skills.title"
    :description="page.skills.description"
    :ui="{
      container: '!pt-0 sm:gap-6 lg:gap-8',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Motion
        v-for="(group, index) in page.skills.groups"
        :key="group.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 * index }"
        :in-view-options="{ once: true }"
        class="rounded-xl border border-default bg-elevated/50 p-5"
      >
        <div class="mb-3 flex items-center gap-2">
          <UIcon
            :name="group.icon"
            class="size-5 text-primary"
          />
          <h3 class="text-sm font-semibold">
            {{ group.title }}
          </h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="item in group.items"
            :key="item"
            :label="item"
            color="neutral"
            variant="subtle"
            size="sm"
          />
        </div>
      </Motion>
    </div>
  </UPageSection>
</template>
