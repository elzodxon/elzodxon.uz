<!-- eslint-disable -->
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
      <h1 class="text-2xl font-semibold mb-4 text-gray-800 mt-6">
        {{ journal.title }}
      </h1>

      <div class="text-gray-600" v-html="journal.content" />
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
      this.loading = true
      this.$axios
        .get(`https://api.elzodxon.uz/api/v1/journal/${slug}`) // Fetch journal by slug
        .then((response) => {
          console.log(response.data)
          this.journal = response.data
          this.loading = false
        })
        .catch((error) => {
          console.error('Error fetching journal:', error)
          this.loading = false
        })
    },
  },
}
</script>
