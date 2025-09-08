<template>
  <div
    class="flex justify-end items-center gap-2 top-16 end-[5%] text-xs lg:text-base z-40"
    :class="textColor === 'white' ? 'text-primary' : 'text-primary'"
  >
    <UButton
      v-if="currentLocale === 'en'"
      color="primary"
      variant="outline"
      size="sm"
      class="px-2 py-1"
      :aria-label="'Switch to Arabic'"
      @click="switchLang('ar')"
    >
      AR
    </UButton>
    <UButton
      v-else
      color="primary"
      variant="outline"
      size="sm"
      class="px-2 py-1"
      :aria-label="'Switch to English'"
      @click="switchLang('en')"
    >
      EN
    </UButton>
  </div>
</template>

<script setup lang="ts">
type SupportedLang = 'ar' | 'en'

const props = defineProps({
  textColor: String
})

const { locale, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const currentLangCookie = useCookie<SupportedLang>('i18n_redirected')
const useCookieLocale = () => useCookie<SupportedLang>('i18n_redirected')

const currentLocale = ref<SupportedLang>(currentLangCookie.value || locale.value as SupportedLang)

const switchLang = async (newLocale: SupportedLang) => {
  if (locale.value !== newLocale) {
    currentLangCookie.value = newLocale
    useCookieLocale().value = newLocale
    const newPath = switchLocalePath(newLocale)
    await setLocale(newLocale)
    navigateTo(newPath)
  }
}

watch(
  () => locale.value,
  (val) => {
    if (val !== currentLocale.value) {
      currentLocale.value = val as SupportedLang
    }
  }
)

onMounted(() => {
  if (import.meta.client) {
    const savedLang = useCookie('i18n_redirected').value as SupportedLang | null
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      locale.value = savedLang
      currentLocale.value = savedLang
    }
  }
})
</script>
