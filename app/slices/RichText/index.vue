<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.RichTextSlice>());
</script>

<template>
  <section>
    <PrismicRichText :field="slice.primary.content" />
  </section>
</template>

<style scoped>
section {
  max-width: 600px;
  margin: 6em auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

section:deep(.codespan) {
  font-family: monospace;
}
</style>
