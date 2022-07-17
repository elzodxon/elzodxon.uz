<template>
  <PageWrapper>
    <div>
      I'll curate some of my screencasting stuff here soon but for now check out
      <a :href="Config.youtube_channel" class="font-semibold underline"
        >my YouTube channel</a
      >
      for tons of content.
    </div>
  </PageWrapper>
</template>
<script>
import PageWrapper from '~/components/ui/PageWrapper'
import { Config } from '~/config'

export default {
  components: { PageWrapper },
  data() {
    return {
      Config,
    }
  },
}
</script>
