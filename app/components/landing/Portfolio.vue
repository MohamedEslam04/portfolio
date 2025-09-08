<template>
  <div class="flex flex-col flex-1 gap-6 relative">
    <h1 class="text-3xl font-bold text-center mb-8">
      {{ $t('portfolio.title', 'Our Portfolio') }}
    </h1>
    <UTabs
      v-model="activeTab"
      :items="tabs"
      :default-value="categories[0]?.value"
      label-key="label"
      variant="link"
      :ui="{ root: 'space-y-8 gap-8 w-full', content: 'flex justify-center', trigger: 'max-w-4/5 font-bold', list: 'max-w-full md:max-w-4/5 justify-center px-10' }"
    >
      <template
        v-for="cat in categories"
        #[cat.value]
      >
        <div class="max-w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="card in getCardsByCategory(cat.value)"
            :key="card.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <NuxtImg
              :src="card.image"
              :alt="card.title"
              class="w-full h-48 object-cover"
              format="webp"
              quality="80"
              loading="lazy"
              decoding="async"
            />
            <!-- <div class="p-4 flex-1 flex flex-col">
                <h3 class="text-lg font-semibold mb-2">{{ card.title }}</h3>
                <p class="text-gray-600 flex-1">{{ card.description }}</p>
              </div> -->
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">
import type { TabsItem } from '@eslamdevui/ui'

const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()

const { current } = useBreakpoint()

const categories = [
  { label: $t('portfolio.all', 'All'), value: 'all' },
  { label: $t('portfolio.mediaConsultation', 'Media Consultation'), value: 'media_consultation' },
  { label: $t('portfolio.campaigns', 'Campaigns'), value: 'campaigns' },
  { label: $t('portfolio.brandingIdentity', 'Branding & Identity'), value: 'branding_identity' },
  { label: $t('portfolio.contentProduction', 'Content Production'), value: 'content_production' },
  { label: $t('portfolio.mediaEquipments', 'Media Equipments'), value: 'media_equipments' }
]

const defaultTab = categories[0]?.value
const activeTab = ref<string | undefined>(defaultTab)

const tabs: TabsItem[] = categories.map(cat => ({
  label: cat.label,
  slot: cat.value,
  value: cat.value
}))

// Example cards data (replace with real data as needed)
const cards = [
  {
    id: 1,
    title: '3D Creative Promo & Development',
    description: 'A creative 3D promo for a digital product, including character design and animation.',
    image: '/home/portfolio/image-1.png',
    categories: ['media_consultation', 'campaigns', 'content_production', '', 'branding_identity']
  },
  {
    id: 2,
    title: '3D Creative Promo & Development',
    description: 'A creative 3D promo for a digital product, including character design and animation.',
    image: '/home/portfolio/image-2.png',
    categories: ['media_consultation', '', 'content_production', 'media_equipments', 'branding_identity']
  },
  {
    id: 3,
    title: '3D Creative Promo & Development',
    description: 'A creative 3D promo for a digital product, including character design and animation.',
    image: '/home/portfolio/image-3.png',
    categories: ['media_consultation', 'campaigns', 'content_production', 'media_equipments', 'branding_identity']
  },
  {
    id: 4,
    title: '3D Creative Promo & Development',
    description: 'A creative 3D promo for a digital product, including character design and animation.',
    image: '/home/portfolio/image-4.png',
    categories: ['media_consultation', 'campaigns', 'content_production', 'media_equipments', 'branding_identity']
  },
  {
    id: 5,
    title: '3D Creative Promo & Development',
    description: 'A creative 3D promo for a digital product, including character design and animation.',
    image: '/home/portfolio/image-5.png',
    categories: ['media_consultation', 'campaigns', 'content_production', 'media_equipments', 'branding_identity']
  },
  {
    id: 6,
    title: '3D Creative Promo & Development',
    description: 'A creative 3D promo for a digital product, including character design and animation.',
    image: '/home/portfolio/image-6.png',
    categories: ['media_consultation', 'campaigns', 'content_production', 'media_equipments', 'branding_identity']
  }
]

// Helper to filter cards by category
function getCardsByCategory(category: string) {
  if (category === 'all') return cards
  return cards.filter(card => card.categories.includes(category))
}
</script>
