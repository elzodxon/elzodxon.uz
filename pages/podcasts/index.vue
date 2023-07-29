<style>
.podcasts-text {
  font-weight: 1000;
}
.title-podcast--link:hover {
  text-decoration: underline;
}
.podcast-title {
  font-weight: 600 !important;
}
.podcast-link:hover {
  text-decoration: underline;
}
.podcast-short {
  font-size: 16px;
  line-height: 30px;
  color: rgb(58, 57, 57);
}

.read-podcast-link {
  color: gray;
  font-size: 14px;
}

.read-podcast-link:hover {
  color: black;
  text-decoration: underline;
}
</style>
<template>
  <div v-if="podcasts.length > 0">
    <h1 class="podcasts-text text-[22px]">Podcasts</h1>
    <h4 class="text-[18px] my-6 text-gray-800">
      Over the years I've published a few dozen articles — some more noteworthy
      than others.
    </h4>
    <span class="text-[19px] my-4 text-gray-800"
      >Here are some of my personal favorites.</span
    >
    <div
      v-for="(podcast, index) in paginatedPodcasts"
      :key="index"
      class="podcast-wrapper my-10"
    >
      <nuxt-link class="podcast-link" :to="`/podcasts/${podcast.slug}`">
        <h2
          class="podcast-title text-[21px] my-2 min-w-[600px]"
          v-html="podcast.title"
        ></h2>
      </nuxt-link>
      <p class="podcast-short" v-html="truncateText(podcast.short)"></p>
      <nuxt-link :to="`/podcasts/${podcast.slug}`" class="read-podcast-link"
        >Listen to this episode →</nuxt-link
      >
    </div>
  </div>
  <div v-else>
    <div v-for="index in 15" :key="index">
      <SkeletonBox />
    </div>
  </div>
</template>

<script>
import SkeletonBox from '~/components/loader/SkeletonBox.vue'

export default {
  components: {
    // _slug,
    SkeletonBox,
  },
  data() {
    return {
      podcasts: [],
      perPage: 3,
      currentPage: 1,
      loading: false,
    }
  },

  computed: {
    paginatedPodcasts() {
      const startIndex = 0
      const endIndex = this.currentPage * this.perPage
      return this.podcasts.slice(startIndex, endIndex)
    },
  },
  watch: {
    '$store.state.podcasts': {
      immediate: true,
      handler(newPodcasts) {
        this.podcasts = newPodcasts
      },
    },
  },
  mounted() {
    this.podcasts = this.$store.state.podcasts
    this.$store.dispatch('fetchingPodcasts', { force: true })
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    loadMore() {
      if (this.loading) return // Prevent multiple requests
      this.loading = true
      setTimeout(() => {
        const startIndex = (this.currentPage - 1) * this.perPage
        const endIndex = this.currentPage * this.perPage
        const newPodcasts = this.$store.state.podcasts.slice(
          startIndex,
          endIndex
        )
        this.podcasts = [...this.podcasts, ...newPodcasts]
        this.currentPage++
        this.loading = false
      }, 100)
    },

    truncateText(text) {
      const maxLength = 195
      if (text.length <= maxLength) {
        return text
      } else {
        return text.substring(0, maxLength) + '...'
      }
    },
    handleScroll() {
      const scrollPosition = window.innerHeight + window.pageYOffset
      const pageHeight = document.documentElement.scrollHeight

      if (scrollPosition >= pageHeight && !this.loading) {
        this.loadMore()
      }
    },
  },
  head() {
    return {
      title: 'Podcasts',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'This page is responsible to get podcasts from vuex store and show them.',
        },
        { name: 'keywords', content: 'podcast, store, axios, loading' },
      ],
    }
  },
}
</script>
