<template>
  <UPageHero
    :title="title"
    :description="description"
  />
</template>

<script lang="ts" setup>
interface Props {
  title?: string
  description?: string
}
withDefaults(defineProps<Props>(), {
  title: 'Title',
  description: 'description'
})
</script>

<style></style>
