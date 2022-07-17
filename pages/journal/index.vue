<template>
  <PageWrapper title="Life journal">
    <div>
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
        >.
      </p>

      <div class="space-y-10 mt-12">
        <base-card v-for="(item, index) in 12" :key="index" />
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
  data() {
    return {
      Config,
    }
  },
  head() {
    return {
      title: `Life journal - ${Config.name} `,
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
