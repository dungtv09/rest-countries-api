const state = () => ({
  countries: null,
  filteredCountries: null,
  searchInput: '',
  regionSelected: 'Filter by Region',
})

const getters = {
  countries(state) {
    return state.countries
  },
  filteredCountries(state) {
    return state.filteredCountries
  },
  searchInput(state) {
    return state.searchInput
  },
  regionSelected(state) {
    return state.regionSelected
  },
}

const mutations = {
  SET_COUNTRY(state, countries) {
    state.countries = countries
  },
  SET_FILTERED_COUNTRIES(state, filteredCountries) {
    state.filteredCountries = filteredCountries
  },
  UPDATE_SEARCH_INPUT(state, searchInput) {
    state.searchInput = searchInput
  },
  UPDATE_REGION_SELECTED(state, regionSelected) {
    state.regionSelected = regionSelected
  },
}

const actions = {
  async nuxtServerInit({ commit }) {
    const data = await this.$axios.$get('https://restcountries.eu/rest/v2/all')
    commit('SET_COUNTRY', data)
    commit('SET_FILTERED_COUNTRIES', data)
  },

  filterCountries({ commit, getters }, { searchInput, regionSelected }) {
    let filteredCountries = []
    if (regionSelected === 'All' || regionSelected === 'Filter by Region') {
      filteredCountries = getters.countries.filter((country) => {
        return country.name.toLowerCase().includes(searchInput.toLowerCase())
      })
    } else {
      filteredCountries = getters.countries.filter((country) => {
        return (
          regionSelected === country.region &&
          country.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      })
    }
    commit('SET_FILTERED_COUNTRIES', filteredCountries)
  },

  updateSearchInput({ commit }, searchInput) {
    commit('UPDATE_SEARCH_INPUT', searchInput)
  },

  updateRegionSelected({ commit }, regionSelected) {
    commit('UPDATE_REGION_SELECTED', regionSelected)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
