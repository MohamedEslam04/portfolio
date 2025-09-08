<script setup lang="ts">
const services = computed(() => [
  {
    icon: 'i-lucide-briefcase',
    title: $t('landing.services.0.title', 'Media Consulting & Strategy'),
    description: $t('landing.services.0.description', 'Data-driven consulting to help businesses confidently navigate the media landscape and craft effective strategies.')
  },
  {
    icon: 'i-lucide-presentation',
    title: $t('landing.services.1.title', 'Campaign & Advertising Management'),
    description: $t('landing.services.1.description', 'Tailored campaigns across multiple channels, designed, coordinated, and executed to positively impact audiences for maximum impact.')
  },
  {
    icon: 'i-lucide-droplet',
    title: $t('landing.services.2.title', 'Branding & Identity Design'),
    description: $t('landing.services.2.description', 'Building powerful visual identities, logos, and stories to manifest your essence and engage your customers.')
  },
  {
    icon: 'i-lucide-film',
    title: $t('landing.services.3.title', 'Digital Presence & Content Production'),
    description: $t('landing.services.3.description', 'Managing online reputation through social & paid media, SEO combined with impactful content — video, stories, and impactful visuals.')
  },
  {
    icon: 'i-lucide-monitor-speaker',
    title: $t('landing.services.4.title', 'Media Equipment & Technology Solutions'),
    description: $t('landing.services.4.description', 'Media Equipment & Technology Solutions: Integrating the latest production tools and technologies to support production and broadcasting needs.')
  },
  {
    icon: 'i-lucide-graduation-cap',
    title: $t('landing.services.5.title', 'Workshops & Training'),
    description: $t('landing.services.5.description', 'Interactive media sessions and ongoing workshops to empower your workforce and enhance your team’s communication and soft skills.')
  }
])

const serviceRows = computed(() => [
  services.value.slice(0, 3),
  services.value.slice(3, 6)
])
</script>

<template>
  <section class="py-16">
    <div class="max-w-5xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-2">
          {{ $t('landing.services.title', 'Our Services') }}
        </h2>
        <p class="text-gray-500 text-lg">
          {{ $t('landing.services.subtitle', 'compelling creativity for digital success') }}
        </p>
      </div>
      <div class="space-y-0">
        <div
          v-for="(row, rowIdx) in serviceRows"
          :key="rowIdx"
        >
          <div class="flex flex-col md:flex-row">
            <template
              v-for="(service, idx) in row"
              :key="service.title"
            >
              <div class="flex-1 flex flex-col items-center text-center px-4 py-6">
                <UIcon
                  :name="service.icon"
                  class="text-2xl mb-3"
                />
                <h3 class="font-semibold text-lg mb-1">
                  {{ service.title }}
                </h3>
                <p class="text-gray-500 text-sm">
                  {{ service.description }}
                </p>
              </div>
              <div
                v-if="idx < row.length - 1"
                class="hidden md:block w-px bg-gray-200"
              />
            </template>
          </div>
          <USeparator v-if="rowIdx === 0" />
        </div>
      </div>
    </div>
  </section>
</template>
