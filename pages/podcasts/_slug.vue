<!-- eslint-disable -->
<template>
  <div>
    <div v-if="loading" class="animate-pulse">
      <div v-for="(item, index) in 20" :key="index" class="bg-gray-300 h-4 w-full mb-2"></div>
    </div>
    <div v-else class="podcast-single-content mt-8">
      <div class="flex w-full podcast-info-header">
        <div class="podcast-img bg-black w-[140px] h-[145px] rounded-xl">
          <img class="w-full h--full h-full rounded-md border channel-img" src="../../assets/img/img-123.jpg" />
        </div>
        <div class="podcast-single-head">
          <h1 class="channel-title text-3xl mx-8 font-bold mx-8 text-gray-800">
            Elzodxon Sharofaddinov
          </h1>
          <h4 class="podcast-description text-[18px] text-gray-600 my-4 mx-8 max-w-[500px]">
            A podcast for developers interested in building great frontend
            products. Hosted by me.
          </h4>
          <p class="text-base text-gray-600 mx-8 my-0 podcast-themes">
            Apple • Podcasts • Overcast RSS
          </p>
        </div>
      </div>
      <div class="podcast-single-play my-20">
        <p class="podcast-date text-[14px] text-gray-600">SEPTEMBER 13, 2022</p>
        <h2 class="podcast-title-play text-xl font-semibold text-gray-800 mx-0 my-4">
          {{ podcast.title }}
        </h2>
        <h4 class="text-gray-600 max-w-[600px] podcast-play-description">
          DHH returns to the podcast to talk in-depth about how Basecamp 3 is
          designed and implemented!
        </h4>
        <div class="podcast-playground items-center flex bg-black px-4 py-2 rounded-md my-8 w-11/12">
          <iframe v-if="isPlaying" class="podcast-playground-video rounded-xl" :src="podcast.podcast_link" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="mx-4">
            <h5 class="podcast-play-channel-title text-[14px] text-gray-500 font-semibold  my-4 ">Elzodxon Sharofaddinov •
              Episode 32 </h5>
            <h3 class="podcast-play-title text-xl text-white font-semibold mb-4">{{ podcast.title }}</h3>
            <div class="flex my-4">
              <svg @click="playPodcast" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor"
                class="bi bi-play-circle-fill text-white cursor-pointer" viewBox="0 0 16 16">
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
              <p class="podcast-date text-[11px] text-gray-500 mx-2 my-2 font-semibold">VIDEO.mp4</p>
            </div>
          </div>
        </div>
        <div class="podcast-content-single text-gray-700" v-html="podcast.content"></div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>

export default {
  data() {
    return {
      podcast: null,
      isPlaying: false,
      loading: true,
    }
  },
  created() {
    const slug = this.$route.params.slug // Get slug from route parameter
    this.fetchPodcast(slug)
  },
  methods: {
    fetchPodcast(slug) {
      this.loading = true
      this.$axios
        .get(`https://api.elzodxon.uz/api/v1/podcast/${slug}`) // Fetch podcast by slug
        .then((response) => {
          this.podcast = response.data
          this.loading = false
        })
        .catch((error) => {
          console.error('Error fetching podcast:', error)
          this.loading = false
        })
    },
    playPodcast() {
      this.isPlaying = !this.isPlaying;
    }
  },
}
</script>
<style>
.podcast-single-content {
  width: 50vw;
  overflow-x: hidden;
  height: auto;
  margin: 0 40% !important;
}

.channel-title {
  font-family: 'Outfit', sans-serif;
}

.podcast-playground-video {
  width: 250px;
  height: 270px;
}</style>
