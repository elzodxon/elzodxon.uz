<template>
  <div>
    <div v-if="loading" class="animate-pulse">
      <!-- Display shimmer effect for title and description while loading -->
      <div
        v-for="(item, index) in 20"
        :key="index"
        class="bg-gray-300 h-4 w-full mb-2"
      ></div>
    </div>
    <div v-else>
      <!-- Render actual title, description, and image when loaded -->
      <h1 class="text-2xl font-semibold mb-4">{{ article.title }}</h1>

      <div class="text-gray-600" v-html="article.content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: null,
      loading: true,
    }
  },
  created() {
    const slug = this.$route.params.slug // Get slug from route parameter
    this.fetchArticle(slug)
  },
  methods: {
    fetchArticle(slug) {
      this.loading = true
      this.$axios
        .get(`https://api.elzodxon.me/api/v1/article/${slug}`) // Fetch article by slug
        .then((response) => {
          this.article = response.data
          this.loading = false
        })
        .catch((error) => {
          console.error('Error fetching article:', error)
          this.loading = false
        })
    },
  },
}
</script>
