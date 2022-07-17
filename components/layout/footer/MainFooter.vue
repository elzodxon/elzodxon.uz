<template>
  <footer>
    {{ Config.name }}
  </footer>
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
