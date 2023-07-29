export const actions = {
  fetchingArticles({ commit }) {
    this.$axios
      .$get('article/')
      .then((res) => {
        commit('UPDATE_ARTICLES', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchingPodcasts({ commit }) {
    this.$axios
      .$get('podcast/')
      .then((res) => {
        commit('UPDATE_PODCASTS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchingProjects({ commit }) {
    this.$axios
      .$get('project/')
      .then((res) => {
        commit('UPDATE_PROJECTS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchingJournals({ commit }) {
    this.$axios
      .$get('journal/')
      .then((res) => {
        commit('UPDATE_JOURNALS', res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

export const mutations = {
  UPDATE_ARTICLES(state, payload) {
    state.articles = payload
  },
  UPDATE_PODCASTS(state, payload) {
    state.podcasts = payload
  },
  UPDATE_PROJECTS(state, payload) {
    state.projects = payload
  },
  UPDATE_JOURNALS(state, payload) {
    state.journals = payload
  },
}

export const state = {
  articles: [],
  journals: [],
  podcasts: [],
  projects: [],
}
