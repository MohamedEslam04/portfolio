<script setup lang="ts">
import type { NavigationMenuItem } from '@eslamdevui/ui'
import { ar, en } from '@eslamdevui/ui/locale'

const { locale, setLocale } = useI18n()
const i18nRedirected = useCookie<'en' | 'ar'>('i18n_redirected')

function handleLocaleChange(newLocale: 'en' | 'ar') {
  setLocale(newLocale)
  i18nRedirected.value = newLocale
}

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-2 sm:top-0 w-full mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-muted/80 px-2 sm:px-4 shadow-lg shadow-neutral-950/5"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-leading>
        <NuxtImg
          src="/logo.png"
          alt="logo"
          format="webp"
          quality="80"
          width="130"
        />
      </template>
      <!-- <template #></template> -->
      <template #list-trailing>
        <div class="flex items-center gap-4">
          <!-- <ULocaleSelect
            v-model="locale"
            :locales="[en, ar]"
            @update:model-value="handleLocaleChange"
          /> -->
          <BaseLangSwitcher />
          <!-- INSERT_YOUR_CODE -->
          <UButton
            icon="Twitter"
            color="primary"
            variant="ghost"
            to="https://twitter.com/yourprofile"
            target="_blank"
            aria-label="Twitter"
            size="sm"
          />
          <UButton
            icon="Facebook"
            color="primary"
            variant="ghost"
            to="https://facebook.com/in/yourprofile"
            target="_blank"
            aria-label="Facebook"
            size="sm"
          />
          <UButton
            icon="Instagram"
            color="primary"
            variant="ghost"
            to="https://instagram.com/yourprofile"
            target="_blank"
            aria-label="Instagram"
            size="sm"
          />
          <ColorModeButton />
        </div>
      </template>
    </UNavigationMenu>
  </div>
</template>
