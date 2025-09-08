<template>
  <UContainer class="py-10 flex flex-wrap gap-10 justify-center max-w-5xl mx-auto">
    <UPageCard class="flex-1 min-w-[320px] max-w-md">
      <template #header>
        <h2 class="text-3xl font-bold mb-1">
          Get in <span class="text-primary">Touch</span>
        </h2>
        <p class="text-gray-500 mb-4">
          Elit nterdum eget pharetra facilisi sed maecenas adipiscing. Susco molestie vel, conne non id blandit metus.
        </p>
      </template>
      <UForm
        :schema="schema"
        :state="state"
        class="flex flex-col gap-4"
        @submit="onSubmit"
      >
        <UFormField
          label="Full Name"
          name="fullName"
        >
          <UInput
            v-model="state.fullName"
            placeholder="Full Name"
          />
        </UFormField>
        <UFormField
          label="Email"
          name="email"
        >
          <UInput
            v-model="state.email"
            type="email"
            placeholder="Email"
          />
        </UFormField>
        <UFormField
          label="Phone Number"
          name="phone"
        >
          <UInput
            v-model="state.phone"
            type="tel"
            placeholder="Phone Number"
          />
        </UFormField>
        <UFormField
          label="Topic"
          name="topic"
        >
          <USelect
            v-model="state.topic"
            :items="[
              { label: 'General Inquiry', value: 'general' },
              { label: 'Support', value: 'support' },
              { label: 'Feedback', value: 'feedback' }
            ]"
            placeholder="Select Topic"
          />
        </UFormField>
        <UButton
          type="submit"
          color="primary"
          class="mt-2 w-full"
        >
          Send
        </UButton>
      </UForm>
      <USeparator class="my-6" />
      <div class="flex flex-wrap gap-6">
        <UUser
          name="PHONE"
          description="03 5432 1234"
        >
          <template #avatar>
            <UIcon
              name="Phone"
              size="30"
            />
          </template>
        </UUser>
        <UUser
          name="EMAIL"
          description="info@maroc.com.au"
        >
          <template #avatar>
            <UIcon
              name="Email"
              size="30"
            />
          </template>
        </UUser>
        <UUser
          name="Location"
          description="Oman - Muscat"
        >
          <template #avatar>
            <UIcon
              name="Location"
              size="30"
            />
          </template>
        </UUser>
      </div>
    </UPageCard>
    <UCard class="flex-1 min-w-[320px] flex items-center justify-center p-0 overflow-hidden">
      <iframe
        class="w-full h-96 rounded-lg border-0"
        src="https://www.google.com/maps?q=Royal+Opera+House+Muscat,+Oman&output=embed"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>
import * as z from 'zod'
import type { FormSubmitEvent } from '@eslamdevui/ui'

const schema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(7, 'Phone number is required'),
  topic: z.enum(['general', 'support', 'feedback'], { required_error: 'Please select a topic' })
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  fullName: '',
  email: '',
  phone: '',
  topic: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>
