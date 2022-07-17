<template>
  <PageWrapper title="Projects">
    <div>
      <h4>
        Here are some of the other projects I've worked on in the past — some
        still actively maintained, and others retired or on pause.
      </h4>

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
  head() {
    return {
      title: `Projects - ${Config.name} `,
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
