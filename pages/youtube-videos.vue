<template>
  <div>
    I'll curate some of my screencasting stuff here soon but for now check out
    <a
      target="_blank"
      :href="Config.youtube_channel"
      class="font-semibold underline"
      >my YouTube channel</a
    >
    for tons of content.
  </div>
</template>
<script>
import { Config } from '~/config'

export default {
  data() {
    return {
      Config,
    }
  },
}
</script>
