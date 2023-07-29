<template>
  <PageWrapper title="Life journal">
    <div v-if="journals.length > 0">
      <h4>
        Something new I'm starting for 2019 — every week or two I write about
        what I've been working on, problems I've solved, and things I'm still
        trying to figure out.
      </h4>

      <br />
      <p>
        If you're interested in following along, subscribe to
        <a class="font-semibold underline" :href="Config.telegram_channel"
          >my telegram channel</a
        >
      </p>

      <div v-for="journal in journals" :key="journal.id" class="my-10">
        <h3 class="text-[13px] text-gray-500">DECEMBER 23, 2023</h3>
        <nuxt-link :to="`/journal/${journal.slug}`" class="read-journal-link">
          <h2
            class="journal-title text-[19px] my-2 font-bold"
            v-html="journal.title"
          ></h2>
        </nuxt-link>
        <p class="journal-short" v-html="journal.content"></p>
      </div>
    </div>
    <div v-else>
      <div v-for="index in 15" :key="index">
        <SkeletonBox />
      </div>
    </div>
  </PageWrapper>
</template>
<script>
import PageWrapper from '~/components/ui/PageWrapper'
import { Config } from '~/config'
import SkeletonBox from '~/components/loader/SkeletonBox.vue'
export default {
  components: {
    PageWrapper,
    SkeletonBox,
  },
  data() {
    return {
      Config,
      journals: [],
    }
  },
  watch: {
    '$store.state.journals': {
      immediate: true,
      handler(newJournals) {
        this.journals = newJournals
      },
    },
  },
  mounted() {
    this.journals = this.$store.state.journals
    this.$store.dispatch('fetchingJournals', { force: true })
  },
  methods: {
    truncateText(text) {
      const maxLength = 170
      if (text.length <= maxLength) {
        return text
      } else {
        return text.substring(0, maxLength) + '...'
      }
    },
  },
  head() {
    return {
      title: 'Journals',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'This page is responsible to get journals from vuex store and show them.',
        },
        { name: 'keywords', content: 'journal, store, axios, loading' },
      ],
    }
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
