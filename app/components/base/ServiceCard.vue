<template>
  <div class="service-card bg-neutral rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden">
    <!-- Large Number in Background -->
    <span class="absolute left-4 top-4 text-[74px] font-bold text-gray-200 select-none pointer-events-none z-0">
      {{ number }}
    </span>
    <!-- Icon/Image -->
    <div class="relative z-10 mb-4">
      <slot name="icon">
        <img
          v-if="icon"
          :src="icon"
          :alt="title"
          class="w-30 h-30 object-contain"
        >
      </slot>
    </div>
    <!-- Title -->
    <h3 class="text-2xl font-bold mb-2 z-10">
      {{ title }}
    </h3>
    <!-- Description -->
    <p class="text-gray-500 mb-4 z-10">
      {{ description }}
    </p>
    <!-- Link -->
    <a
      v-if="link && linkText"
      :href="link"
      class="text-primary font-medium inline-flex items-center gap-1 z-10 hover:underline transition"
    >
      {{ linkText }}
      <svg
        class="w-4 h-4 ml-1"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  </div>
</template>

<script lang="ts" setup>
interface ServiceCardProps {
  number: string | number
  title: string
  description: string
  icon?: string // Optional image src, can also use slot
  link?: string
  linkText?: string
}

const props = withDefaults(defineProps<ServiceCardProps>(), {
  icon: undefined,
  link: undefined,
  linkText: undefined
})
</script>

<style scoped>
.service-card {
  min-width: 280px;
  max-width: 340px;
}
/* .text-primary {
  color: #3bb77e;
} */
</style>
