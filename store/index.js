/* eslint-disable */
import axios from "axios";

export const actions = {
  fetchingArticles(context) {
      axios.get('https://api.elzodxon.uz/api/v1/article/')
        .then((res) => {
          context.commit("UPDATE_ARTICLES", res.data)
        })
        .catch((err)=> {
          console.log(err)
        })
    },
  fetchingPodcasts(context) {
      axios.get('https://api.elzodxon.uz/api/v1/podcast/')
        .then((res) => {
          context.commit("UPDATE_PODCASTS", res.data)
        })
        .catch((err)=> {
          console.log(err)
        })
    },
  fetchingProjects(context) {
      axios.get('https://api.elzodxon.uz/api/v1/project/')
        .then((res) => {
          context.commit("UPDATE_PROJECTS", res.data)
          console.log(res.data)
        })
        .catch((err)=> {
          console.log(err)
        })
    },
  fetchingJournals(context) {
      axios.get('https://api.elzodxon.uz/api/v1/journal/')
        .then((res) => {
          context.commit("UPDATE_JOURNALS", res.data)
          console.log(res.data)
        })
        .catch((err)=> {
          console.log(err)
        })
    },

}
  
  export const mutations = {
    UPDATE_ARTICLES(state, payload){
        state.articles = payload
      },
    UPDATE_PODCASTS(state, payload){
      state.podcasts = payload
    },
    UPDATE_PROJECTS(state, payload){
      state.projects = payload
    },
    UPDATE_JOURNALS(state, payload){
      state.journals = payload
    }
    
  }
  export const state = {
    articles: [],
    journals:[],
    podcasts:[],
    projects:[],
  };
  
  
  export const gettingArticleList = (state) => {
    return() =>{
      state.articles,
      state.podcasts,
      state.projects,
      state.journals
    }
  }