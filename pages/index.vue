<template>
  <div class="bg-red">
    <PageWrapper>
      <div class="flex flex-col gap-3">
        <h3>Hi, My name is Elzodxon and I am a Frontend developer</h3>

        <p>
          I share everything I know about making awesome software through my
          <nuxt-link to="/courses" class="underline font-semibold"
            >courses</nuxt-link
          >,
          <nuxt-link to="/podcasts" class="underline font-semibold"
            >podcats</nuxt-link
          >,
          <nuxt-link class="underline font-semibold" to="/youtube-videos"
            >Youtube videos</nuxt-link
          >.
        </p>

        <p>
          Right now, I work at
          <a href="https://uic.group" class="font-semibold underline"
            >UIC Group</a
          >
          as a Frontend developer
        </p>

        <p>
          Curious about how I work? Check out my
          <nuxt-link to="/uses" class="underline font-semibold">uses</nuxt-link>
          page for a full list of all the software, gadgets, and services I use.
        </p>
      </div>
    </PageWrapper>
  </div>
</template>
<script>
import PageWrapper from '~/components/ui/PageWrapper'
import { Config } from '~/config'
export default {
  components: { PageWrapper },
  data() {
    return { Config }
  },
  head() {
    return {
      title: Config.name,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: Config.description,
        },
      ],
    }
  },
}
</script>
