<template>
  <div v-if="articles.length > 0">
    <h2 class="text-[18px] my-2 text-gray-800">
      I have been prolifically publishing numerous articles on the internet
      covering a wide range of topics.
    </h2>
    <p class="text-[19px] my-4 text-gray-800">
      Here are some of my personal favorites.
    </p>

    <hr class="my-3" />
    <div
      v-for="(article, index) in articles"
      :key="index"
      class="article-wrapper my-2"
    >
      <nuxt-link class="article-link" :to="`/articles/${article.slug}`">
        <h2
          class="article-title text-[21px] my-2 min-w-[600px]"
          v-html="article.title"
        ></h2>
      </nuxt-link>
      <p class="article-short" v-html="article.short"></p>
      <nuxt-link :to="`/articles/${article.slug}`" class="read-article-link"
        >Read this article →</nuxt-link
      >
    </div>
  </div>
  <div v-else>
    <div v-for="index in 20" :key="index">
      <SkeletonBox />
    </div>
  </div>
</template>

<script>
import SkeletonBox from '~/components/loader/SkeletonBox.vue'
export default {
  components: {
    SkeletonBox,
  },

  computed: {
    articles() {
      return this.$store.state.articles
    },
  },
  async mounted() {
    await this.$store.dispatch('fetchingArticles')
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
