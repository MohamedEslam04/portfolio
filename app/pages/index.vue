<script setup lang="ts">
</script>

<template>
  <UPage>
    <LandingHero
      :title="$t('landing.hero.title')"
      :description="$t('landing.hero.description')"
    />
    <LandingClients />
    <UPageCard
      variant="soft"
      title="27 Years of Experience"
      description="For over 27 years, Sameh Aldahshan has built a solid track record in the media and advertising industry, leading successful strategies and campaigns that have shaped the communication landscape in Oman and beyond."
      orientation="horizontal"
      reverse
      :ui="{ title: 'text-4xl', description: 'text-xl' }"
    >
      <NuxtImg
        src="/home/man.png"
        alt="Man"
        format="webp"
        quality="80"
        class="object-contain w-full h-72"
        loading="lazy"
        decoding="async"
        priority
      />
    </UPageCard>
    <LandingServices />
    <LandingPortfolio />
    <BaseContact />
  </UPage>
</template>
