<script setup lang="ts">
import { navLinks as baseNavLinks } from '@/utils/links'
import type { NavigationMenuItem } from '@eslamdevui/ui'

const { t, locale } = useI18n()
const localePath = useLocalePath()

const navLinks = computed((): NavigationMenuItem[] =>
  baseNavLinks.map(link => ({
    ...link,
    label: $t(`nav.${(link.label as string).toLowerCase()}`),
    to: localePath(link.to as string)
  }))
)
</script>

<template>
  <div>
    <AppHeader :links="navLinks" />
    <UContainer class="sm:border-x border-default pt-10 lg:px-20">
      <slot />
    </UContainer>
    <AppFooter />
  </div>
</template>
