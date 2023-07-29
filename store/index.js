/* eslint-disable */
import axios from 'axios'

export const actions = {
  fetchingArticles({ commit }) {
    axios.get(this.$config.axios.baseURL + 'article/')
      .then((res) => {
        commit('UPDATE_ARTICLES', res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },  
  fetchingPodcasts({ commit }) {
    axios.get(this.$config.axios.baseURL + 'podcast/')
      .then((res) => {
        commit('UPDATE_PODCASTS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchingProjects({ commit }) {
    axios.get(this.$config.axios.baseURL + 'project/')
      .then((res) => {
        commit('UPDATE_PROJECTS', res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  fetchingJournals({ commit }) {
    axios.get(this.$config.axios.baseURL + 'journal/')
      .then((res) => {
        commit('UPDATE_JOURNALS', res.data)
        console.log(res.data)
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

export const getters = {
  gettingList(state) {
    return () => {
      state.articles,
      state.podcasts,
      state.projects,
      state.journals
    }
  },
}