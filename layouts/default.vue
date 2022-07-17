<template>
  <div class="py-8 lg:py-16 px-6 md:px-16 lg:px-24">
    <MainHeader>
      <nuxt />
    </MainHeader>
  </div>
</template>

<style>
html {
  font-family: 'Roboto Light', Ubuntu, sans-serif;
}
</style>
<script>
import MainHeader from '~/components/layout/header/MainHeader'
export default {
  components: { MainHeader },
}
</script>
