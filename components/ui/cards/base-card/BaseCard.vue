<template>
  <nuxt-link :to="`/articles/${article.slug}`">
    <h3
      class="text-lg text-black font-bold no-underline hover:underline transition duration-150"
    >
      {{ article.title }}
    </h3>

    <div
      class="text-grey-darkest text-base leading-normal mt-1 line-clamp-1"
      v-html="article.short"
    />

    <div class="text-grey-darkest text-base leading-normal mt-2">
      <nuxt-link
        class="text-grey-darker hover:text-black text-sm no-underline hover:underline transition duration-150"
        :to="`/articles/${article.slug}`"
      >
        {{ buttonTitle }} →
      </nuxt-link>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {
        return {
          title: 'CSS Utility Classes and "Separation of Concerns"',
          description:
            '  Why “separation of concerns” is the wrong way to think about CSS and why\n' +
            '      presentational classes scale better than semantic classes.',
          slug: '/article/hello',
        }
      },
    },
    buttonTitle: {
      type: String,
      default: 'Read this article',
    },
  },
}
</script>
