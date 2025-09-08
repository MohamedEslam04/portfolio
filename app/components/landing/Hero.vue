<template>
  <UPageHero
    :title="titleText"
    :description="descriptionText"
    orientation="horizontal"
    :ui="{ title: 'lg:text-8xl' }"
  >
    <NuxtImg
      src="/home/land-hero.png"
      alt="Landing Hero image"
      format="webp"
      quality="80"
      class="w-full"
    />
    <template #links>
      <UInput
        class=""
        :placeholder="t('common.emailPlaceholder')"
      />
      <UButton :label="t('common.start')" />
    </template>
  </UPageHero>
</template>

<script lang="ts" setup>
interface Props {
  title?: string
  description?: string
}
const props = defineProps<Props>()

const { t } = useI18n()

const titleText = computed(() => props.title || t('landing.hero.title'))
const descriptionText = computed(() => props.description || t('landing.hero.description'))
</script>
