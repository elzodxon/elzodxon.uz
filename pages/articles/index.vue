<template>
  <div v-if="articles.length > 0">
    <h1 class="articles-text text-[22px]">Articles</h1>
    <h4 class="text-[18px] my-6 text-gray-800">
      Over the years I've published a few dozen articles — some more noteworthy
      than others.
    </h4>
    <span class="text-[19px] my-4 text-gray-800"
      >Here are some of my personal favorites.</span
    >
    <div
      v-for="(article, index) in paginatedArticles"
      :key="index"
      class="article-wrapper my-10"
    >
      <nuxt-link class="article-link" :to="`/articles/${article.slug}`">
        <h2
          class="article-title text-[21px] my-2 min-w-[600px]"
          v-html="article.title"
        ></h2>
      </nuxt-link>
      <p class="article-short" v-html="truncateText(article.short)"></p>
      <nuxt-link :to="`/articles/${article.slug}`" class="read-article-link"
        >Read this article →</nuxt-link
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
      articles: [],
      perPage: 3,
      currentPage: 1,
      loading: false,
    }
  },

  computed: {
    paginatedArticles() {
      const startIndex = 0
      const endIndex = this.currentPage * this.perPage
      return this.articles.slice(startIndex, endIndex)
    },
  },
  watch: {
    '$store.state.articles': {
      immediate: true,
      handler(newArticles) {
        this.articles = newArticles
      },
    },
  },
  mounted() {
    this.articles = this.$store.state.articles
    this.$store.dispatch('fetchingArticles', { force: true })
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    loadMore() {
      if (this.loading) return // Prevent multiple requests
      this.loading = true
      setTimeout(() => {
        const startIndex = (this.currentPage - 1) * this.perPage
        const endIndex = this.currentPage * this.perPage
        const newArticles = this.$store.state.articles.slice(
          startIndex,
          endIndex
        )
        this.articles = [...this.articles, ...newArticles]
        this.currentPage++
        this.loading = false
      }, 400)
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
      title: 'Articles',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'This page is responsible to get articles from vuex store and show them.',
        },
        { name: 'keywords', content: 'article, store, axios, loading' },
      ],
    }
  },
}
</script>

<style>
.articles-text {
  font-weight: 1000;
}

.article-title {
  font-weight: 600 !important;
}
.article-title:hover {
  text-decoration: underline;
}
.article-short {
  font-size: 16px;
  line-height: 30px;
  color: rgb(115, 112, 112);
}

.read-article-link {
  color: gray;
  font-size: 14px;
}

.read-article-link:hover {
  color: black;
  text-decoration: underline;
}
</style>
