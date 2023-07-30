<template>
  <div>
    <header class="flex items-start md:block lg:flex items-center max-w-full">
      <Avatar
        :avatar="Config.avatar"
        :alt="Config.name"
        class="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12"
      />

      <div>
        <div class="flex flex-col">
          <nuxt-link
            to="/"
            class="block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight"
          >
            {{ Config.name }}
          </nuxt-link>
        </div>
        <NavbarList :menus="Config.menus" />
      </div>
    </header>
    <div class="lg:pl-32 mt-4 max-w-2xl">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Avatar from '~/components/ui/avatar/Avatar'
import { Config } from '~/config'
import NavbarList from '~/components/layout/header/nav/NavbarList'

export default {
  components: { NavbarList, Avatar },
  data() {
    return {
      Config,
    }
  },
}
</script>
