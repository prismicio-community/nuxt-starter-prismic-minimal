<template>
  <SliceZone :slices="page.data.slices" :components="components" />
</template>

<script>
import { components } from "~/slices";

export default {
  async asyncData({ $prismic }) {
    const page = await $prismic.api.getByUID("page", "home");

    return {
      page,
    };
  },
  data() {
    return { components };
  },
  head() {
    return {
      title: this.$prismic.asText(this.page.data.title),
    };
  },
};
</script>
