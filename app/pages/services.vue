<script setup lang="ts">
const serviceTemplate = {
  number: '01',
  icon: '/services/image-1.png',
  title: 'Media Consulting & Strategy',
  description:
    'Data-driven consulting to help businesses confidently navigate the media landscape and craft effective strategies.',
  linkText: 'View Portfolio',
  link: '#'
}

// If you want to add more unique services, push them to this array
const services = Array.from({ length: 6 }, () => ({ ...serviceTemplate }))
</script>

<template>
  <UPage>
    <Hero
      title="Services"
      description="Advertising with impact, designed to grow your brand."
    />
    <div v-for="(service, idx) in services" :key="idx" class="grid grid-cols-1 md:grid-cols-2 gap-0 my-0 items-center">
      <div v-if="idx % 2 === 0" class="hidden md:block" />
      <BaseServiceCard
        :number="service.number"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
        :link-text="service.linkText"
        :link="service.link"
        :class="idx % 2 === 0 ? 'md:justify-self-start' : 'md:justify-self-center'"
      />
      <div v-if="idx % 2 !== 0" class="hidden md:block" />
      <UIcon
        v-if="idx < services.length - 1"
        :name="idx % 2 === 0 ? 'RtlLine' : 'LtrLine'"
        class="relative -top-4 justify-self-end"
      />
    </div>
  </UPage>
</template>
