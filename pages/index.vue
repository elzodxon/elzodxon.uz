<template>
  <PageWrapper>
    <div class="flex flex-col gap-3">
      <h3>Hi, My name is Elzodxon and I am a Frontend developer</h3>

      <div>
        I share everything I know about making awesome software through my
        <nuxt-link to="/courses" class="underline font-semibold"
          >courses</nuxt-link
        >,
        <nuxt-link to="/journal" class="underline font-semibold"
          >journals</nuxt-link
        >,

        <nuxt-link class="underline font-semibold" to="/youtube-videos"
          >Youtube videos</nuxt-link
        >.
      </div>

      <div>
        Right now, I work at
        <a
          target="_blank"
          href="https://uic.group"
          class="font-semibold underline"
          >UIC Group</a
        >
        as a Frontend developer
      </div>

      <div>
        Curious about how I work? Check out my
        <nuxt-link to="/uses" class="underline font-semibold">uses</nuxt-link>
        page for a full list of all the software, gadgets, and services I use.
      </div>
    </div>
  </PageWrapper>
</template>
<script>
import PageWrapper from '~/components/ui/PageWrapper'
import { Config } from '~/config'
export default {
  components: { PageWrapper },
  data() {
    return { Config }
  },
}
</script>
