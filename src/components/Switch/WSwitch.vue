<template>
  <label class="inline-flex items-center cursor-pointer">
    <input v-model="model" type="checkbox" value="" class="sr-only peer" />
    <div
      class="relative w-[44px] h-[24px] bg-white-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-black-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white-50 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white-50 after:border-white-50 after:border after:rounded-full after:h-[20px] after:w-[20px] after:transition-all dark:border-gray-700 peer-checked:bg-wit-blue-700 dark:peer-checked:bg-wit-blue-500"
    ></div>
  </label>
</template>

<script setup lang="ts">
const model = defineModel<boolean>({ required: true })
</script>
