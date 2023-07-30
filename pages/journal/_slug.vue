<template>
  <div>
    <div v-if="loading" class="animate-pulse">
      <div
        v-for="(item, index) in 20"
        :key="index"
        class="bg-gray-300 h-4 w-full mb-2"
      ></div>
    </div>
    <div v-else>
      <!-- Render actual title, description, and image when loaded -->
      <h1 class="text-2xl font-semibold text-gray-800 my-2">
        {{ journal.title }}
      </h1>

      <div class="text-gray-600 line-clamp-2" v-html="journal.content" />
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  data() {
    return {
      journal: null,
      loading: true,
    }
  },
  created() {
    const slug = this.$route.params.slug // Get slug from route parameter
    this.fetchJournal(slug)
  },
  methods: {
    fetchJournal(slug) {
      this.$axios
        .get(`journal/${slug}`) // Fetch journal by slug
        .then((response) => {
          this.journal = response.data
        })
        .catch((error) => {
          console.error('Error fetching journal:', error)
        }).finally(()=> {
          this.loading = false
      })
    },
  },
}
</script>
