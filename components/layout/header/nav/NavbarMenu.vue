<template>
  <nuxt-link
    :to="url.link"
    class="text-grey-dark font-semibold no-underline hover:text-black transition delay-150"
    >{{ url.name }}</nuxt-link
  >
</template>

<script>
export default {
  props: {
    url: {
      type: Object,
      default: () => {
        return {
          link: '#',
          name: 'Podcasts',
        }
      },
    },
  },
}
</script>

<style>
.nuxt-link-exact-active.nuxt-link-active {
  @apply text-black;
}
</style>
