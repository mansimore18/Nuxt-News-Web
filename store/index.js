export const state = () => ({
  counter: 19398472983,
  allNewsData: '',
  allBookmarks: [],
  pageNumber: 1,
  pageSize: 18,
  totalResults: "",
  countrySearch: "",
  categorySearch: "",
  keywordSearch: 'all',
})


export const actions = {
    async getNewsData({ commit, state }, payload) {
      const {keyword, country, category} = payload
      const url = `https://newsapi.org/v2/${(country || category || keyword !== 'all') ? "top-headlines" : "everything"}?q=${keyword}&country=${country}&category=${category}&page=${state.pageNumber}&pageSize=${state.pageSize}&apiKey=72b3d47cc6ef42e691378aad444a9700`
        const res = await fetch(url)
        .then((res) => res.json())
        commit('setNewsData', res)
    },
    getFilteredNews({ commit, state }, param) {
        commit('setFilterParams', param)
     },

    updatepageSize ({commit}, payload) {
      commit('updatepageSize', payload)
    },
  };


  export const mutations = {
    setNewsData(state, params) {
      state.totalResults = params.totalResults
      state.allNewsData = params
    },
    addToBookmark (state, news) {
      const array = state.allBookmarks
      if (!array.some(item => item.title === news.title)) {
        news['isBookmark'] = true
        array.push(news)
      }
     state.allBookmarks = array
    },
    removeBookmark (state, news) {
      news['isBookmark'] = false
      const newArray = state.allBookmarks.filter(obj => obj.title !== news.title)
      state.allBookmarks = newArray
    },
    incrementPageNumber(state) {
      state.pageNumber += 1;
    },
    updatepageSize (state, payload) {
      state.pageSize = payload
    },
    setFilterParams (state, filter) {
      state.countrySearch = filter.country
      state.categorySearch = filter.category 
      state.keywordSearch = filter.keyword
    }
  };

  export const getters = {
    getNewsData (state) {
      return state.allNewsData.articles
    },
    getBookmarks: (state) => {
      // var storedBookmarks = []
      // if (process.browser) {
      //   storedBookmarks = JSON.parse(window.localStorage.getItem('setBookmarks'))
      // }
      // console.log('storedBookmarks', storedBookmarks)
      return state.allBookmarks
    },
    getTotalResults: state => {
      return state.allNewsData.totalResults
    },
    getLodeMoreStatus: state => {
      const totalPage = Math.floor(state.totalResults / state.pageSize);
      if (totalPage >= state.pageNumber) {
        return false;
      } else {
        return true;
      }
    },
    getPageSize (state) {
      return state.pageSize
    },
    getfilterOptions (state) {
      return {
        keyword: state.keywordSearch,
        country: state.countrySearch,
        category: state.categorySearch
      }
    }
  };