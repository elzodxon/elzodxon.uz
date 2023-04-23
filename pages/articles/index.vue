<template>
  <PageWrapper title="Articles">
    <div>
      <h4>
        Over the years I’ve published a few dozen articles — some more
        noteworthy than others.
      </h4>

      <div class="space-y-10 mt-8">
        <div v-for="article in loading ? 12 : articles" :key="article.id">
          <!-- Display shimmer effect for title and description while loading -->
          <div v-if="loading" class="animate-pulse">
            <div
              v-for="(item, index) in 20"
              :key="index"
              class="bg-gray-300 h-4 w-full mb-2"
            ></div>
          </div>
          <!-- Render actual title and description when loaded -->
          <div v-else>
            <BaseCard :article="article" @on-change="onGetData" />
          </div>
        </div>
        <div v-if="showLoadMoreButton" class="text-center">
          <button
            class="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
            @click="fetchMoreArticles"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
<script>
import PageWrapper from '~/components/ui/PageWrapper'
import BaseCard from '~/components/ui/cards/base-card/BaseCard'
import { Config } from '~/config'
export default {
  components: { BaseCard, PageWrapper },
  fetch() {
    this.fetchArticles()
  },
  data() {
    return {
      articles: [],
      page: 1,
      perPage: 10,
      loading: true,
    }
  },
  computed: {
    showLoadMoreButton() {
      return this.articles.length % this.perPage === 0
    },
  },
  methods: {
    fetchArticles() {
      this.$axios
        .get(`https://api.elzodxon.me/api/v1/article/`, {
          params: {
            page: this.page,
            perPage: this.perPage,
          },
        })
        .then((response) => {
          this.articles = [...this.articles, ...response.data]
          this.page++
        })
        .catch((error) => {
          console.error('Error fetching articles:', error)
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false
          }, 300)
        })
    },
    fetchMoreArticles() {
      this.fetchArticles()
    },
  },
  head() {
    return {
      title: `Articles - ${Config.name} `,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            '  Over the years I’ve published a few dozen articles — some more\n' +
            '        noteworthy than others.',
        },
      ],
    }
  },
}
</script>
