<template>
  <div class="this">
    <PrismicRichText :field="slice.primary.content" class="richtext" />
  </div>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style scoped>
.this >>> .richtext {
  max-width: 600px;
  margin: 6em auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.this >>> .richtext .codespan {
  font-family: monospace;
}
</style>
