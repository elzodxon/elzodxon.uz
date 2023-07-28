<template>
  <div>
    <ul
      class="navbar md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs gap-6"
    >
      <li v-for="(item, index) in menus" :key="index">
        <NavbarMenu :url="item" />
      </li>
    </ul>
    <div class="dropdown-btn hidden">
      <button class="text-xs uppercase tracking-wide" @click="toggleDropdown">
        <i :class="showDropdown ? 'bi bi-x' : 'bi bi-list'"></i>
      </button>
      <div v-if="showDropdown" class="dropdown-nav">
        <ul>
          <li
            v-for="(item, index) in menus"
            :key="index"
            @click="toggleDropdown"
          >
            <NavbarMenu :url="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
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
  data() {
    return {
      showDropdown: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
  },
}
</script>
