<template>
  <div v-if="journals.length">
    <h2 class="text-[18px] my-2 text-gray-800">
      Something new I'm starting for 2019 — every week or two I write about what
      I've been working on, problems I've solved, and things I'm still trying to
      figure out.
    </h2>

    <p class="text-[19px] my-4 text-gray-800">
      If you're interested in following along, subscribe to
      <a class="font-semibold underline" :href="Config.telegram_channel"
        >my telegram channel</a
      >
    </p>

    <hr class="my-3" />
    <div v-for="journal in journals" :key="journal.id" class="my-2">
      <!--      <h3 class="text-[13px] text-gray-500">DECEMBER 23, 2023</h3>-->
      <nuxt-link :to="`/journal/${journal.slug}`" class="read-journal-link">
        <h2
          class="journal-title text-[19px] my-2 font-bold"
          v-html="journal.title"
        ></h2>
      </nuxt-link>
      <p class="journal-short" v-html="journal.content"></p>
      <nuxt-link :to="`/journal/${journal.slug}`" class="read-article-link"
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
import { Config } from '~/config'
import SkeletonBox from '~/components/loader/SkeletonBox.vue'
export default {
  components: {
    SkeletonBox,
  },
  data() {
    return {
      Config,
    }
  },
  computed: {
    journals() {
      return this.$store.state.journals
    },
  },
  async mounted() {
    await this.$store.dispatch('fetchingJournals', { force: true })
  },
}
</script>
<style>
.journals-text {
  font-weight: 1000;
}

.journals-title {
  font-weight: 700 !important;
}
.journal-title:hover {
  text-decoration: underline;
}
.journal-short {
  font-size: 16px;
  line-height: 30px;
  color: rgb(58, 57, 57);
}
</style>
