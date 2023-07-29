<template>
  <div v-if="projects.length > 0">
    <h1 class="projects-text text-[22px]">Projects</h1>
    <h4
      class="project-description text-[17.5px] my-6 text-gray-600 min-w-[700px]"
    >
      My main focus these days is Tailwind CSS — an open-source utility-first
      CSS framework for rapidly building custom user interfaces.
    </h4>
    <h4
      class="project-description text-[17.5px] my-6 text-gray-600 min-w-[700px]"
    >
      I made the decision to work on it full-time beginning in 2019, and have a
      lot of plans for continuing to improve the framework, grow the community,
      and expand the ecosystem.
    </h4>
    <h4
      class="project-description text-[17.5px] my-6 text-gray-600 min-w-[700px]"
    >
      Here are some of the other projects I've worked on in the past — some
      still actively maintained, and others retired or on pause.
    </h4>
    <span class="text-[18px] my-6 text-gray-600"
      >Here are some of my personal favorites.</span
    >
    <div v-for="project in projects" :key="project.id" class="my-10">
      <a class="project-visit" :href="project.project_link"
        ><h2 class="project-title text-[19px] my-4" v-html="project.title"></h2
      ></a>
      <p class="project-short" v-html="project.content"></p>
      <nuxt-link :to="`/project/${project.slug}`" class="read-project-link"
        >Visit the site →</nuxt-link
      >
    </div>
  </div>
  <div v-else>
    <div v-for="index in 15" :key="index">
      <SkeletonBox />
    </div>
  </div>
</template>

<script>
import SkeletonBox from '~/components/loader/SkeletonBox.vue'
export default {
  components: {
    SkeletonBox,
  },
  beforeRouteLeave(to, from, next) {
    document.title = 'Come back we miss you!'
    next()
  },
  data() {
    return {
      projects: [],
      perPage: 3,
      currentPage: 1,
    }
  },
  watch: {
    '$store.state.projects': {
      immediate: true,
      handler(newProjects) {
        this.projects = newProjects
      },
    },
  },
  mounted() {
    this.projects = this.$store.state.projects
    this.$store.dispatch('fetchingProjects', { force: true })
  },
  methods: {
    truncateText(text) {
      const maxLength = 170
      if (text.length <= maxLength) {
        return text
      } else {
        return text.substring(0, maxLength) + '...'
      }
    },
  },
}
</script>
<style>
.projects-text {
  font-weight: 1000;
}

.project-title {
  font-weight: 600 !important;
}

.project-short {
  font-size: 16px;
  line-height: 30px;
  color: rgb(58, 57, 57);
}

.read-project-link {
  color: gray;
  font-size: 14px;
}
.project-visit:hover {
  text-decoration: underline;
}

.read-project-link:hover {
  color: black;
  text-decoration: underline;
}
</style>
