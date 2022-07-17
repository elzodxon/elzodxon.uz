<template>
  <nuxt-link to="/" class="flex items-center no-underline">
    <img
      :src="avatar"
      :alt="alt"
      class="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
    />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: 'https://picsum.photos/40/40',
    },
    alt: {
      type: String,
      default: '',
    },
  },
}
</script>
