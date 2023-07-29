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
        <svg
          v-if="showDropdown"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
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
      tabTitle: 'NavbarList',
    }
  },
  watch: {
    tabTitle(newTitle) {
      document.title = newTitle
    },
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
  },
  head() {
    return {
      title: this.tabTitle || 'NavbarList',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'That includes and navigates a links for changing pages. It received links from Navbar.vue',
        },
        { name: 'keywords', content: 'navbar, navigation, links, pages' },
      ],
    }
  },
}
</script>
