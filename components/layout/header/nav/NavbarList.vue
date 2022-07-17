<template>
  <ul class="hidden md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs gap-6">
    <li v-for="(item, index) in menus" :key="index">
      <NavbarMenu :url="item" />
    </li>
  </ul>
</template>
<script>
import NavbarMenu from '~/components/layout/header/nav/NavbarMenu'
export default {
  components: { NavbarMenu },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
