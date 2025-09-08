<script setup lang="ts">
import { ref } from 'vue'

const year = new Date().getFullYear()

const navCards = ref([
  {
    title: 'Work With Us',
    to: '#',
    icon: 'i-lucide-handshake',
    description: 'Join our team or collaborate with us.'
  },
  {
    title: 'Advertise With Us',
    to: '#',
    icon: 'i-lucide-megaphone',
    description: 'Promote your brand to our audience.'
  },
  {
    title: 'Support Us',
    to: '#',
    icon: 'i-lucide-heart-handshake',
    description: 'Help us grow and improve our services.'
  },
  {
    title: 'Business Advice',
    to: '#',
    icon: 'i-lucide-briefcase',
    description: 'Get expert business guidance.'
  },
  {
    title: 'Private Coaching',
    to: '#',
    icon: 'i-lucide-graduation-cap',
    description: 'Personalized coaching for your needs.'
  },
  {
    title: 'Our Work',
    to: '#',
    icon: 'i-lucide-folder-kanban',
    description: 'See our portfolio and case studies.'
  },
  {
    title: 'Our Commitment',
    to: '#',
    icon: 'i-lucide-shield-check',
    description: 'Learn about our values and promises.'
  },
  {
    title: 'Our Team',
    to: '#',
    icon: 'i-lucide-users',
    description: 'Meet the people behind Future Media.'
  },
  {
    title: 'About Us',
    to: '#',
    icon: 'i-lucide-info',
    description: 'Who we are and what we do.'
  },
  {
    title: 'FAQ',
    to: '#',
    icon: 'i-lucide-help-circle',
    description: 'Frequently asked questions.'
  },
  {
    title: 'Report a Bug',
    to: '#',
    icon: 'i-lucide-bug',
    description: 'Let us know about any issues.'
  }
])

const socialLinks = [
  {
    icon: 'i-simple-icons-instagram',
    label: 'Instagram',
    to: 'https://instagram.com/'
  },
  {
    icon: 'i-simple-icons-twitter',
    label: 'Twitter',
    to: 'https://twitter.com/'
  },
  {
    icon: 'i-simple-icons-facebook',
    label: 'Facebook',
    to: 'https://facebook.com/'
  }
]
</script>

<template>
  <UFooter :ui="{ root: 'bg-primary', right: 'lg:justify-start pt-10' }">
    <template #left>
      <div class="flex flex-col gap-6 min-w-[220px]">
        <div class="flex items-center gap-2 mb-2">
          <NuxtImg
            src="/logo.png"
            alt="Future Media"
            width="38"
            height="38"
            class="object-contain"
          />
          <span class="text-white font-semibold text-lg tracking-wide">
            Future <span class="text-[#b6d6e7]">Media</span>
          </span>
        </div>
        <div class="flex gap-4 mb-2">
          <UButton
            v-for="(social, i) in socialLinks"
            :key="i"
            :icon="social.icon"
            :aria-label="social.label"
            color="white"
            variant="ghost"
            size="lg"
            :to="social.to"
            target="_blank"
            class="rounded-full border border-white/30 hover:bg-white/10"
          />
        </div>
        <UButton
          color="primary"
          variant="soft"
          class="rounded-full px-6 py-2 font-semibold text-base bg-[#ffe7c2] text-[#195b7d] hover:bg-[#ffe7c2]/90 shadow"
        >
          Contact Us
        </UButton>
      </div>
    </template>

    <template #right>
      <UPageGrid class="my-auto">
        <NuxtLink
          v-for="(card, index) in navCards"
          :key="index"
          :to="card.to"
          class="flex flex-col gap-2 rounded-lg hover:bg-[#ffe7c2]/10 transition"
        >
          <div class="flex items-center gap-2 mb-1">
            <span
              v-if="card.icon"
              :class="card.icon"
              class="text-xl"
            />
            <span class="font-semibold text-white text-base">{{ card.title }}</span>
          </div>
          <!-- <div class="text-white/80 text-sm">{{ card.description }}</div> -->
        </NuxtLink>
      </UPageGrid>
    </template>

    <template #bottom>
      <div class="w-full text-center text-xs text-white/70 mt-8">
        © {{ year }} Future Media. All Rights Reserved.
      </div>
    </template>
  </UFooter>
</template>
