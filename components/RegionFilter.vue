<template>
  <div id="region-filter">
    <button
      id="dropdownMenuButton"
      class="btn btn-secondary dropdown-toggle shadow-sm form-control"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ !regionSelected ? 'Filter by Region' : regionSelected }}
    </button>

    <div
      class="dropdown-menu dropdown-menu-right"
      aria-labelledby="dropdownMenuButton"
    >
      <a class="dropdown-item" @click="filterCountries('All')">All</a>
      <a class="dropdown-item" @click="filterCountries('Africa')">Africa</a>
      <a class="dropdown-item" @click="filterCountries('Americas')">Americas</a>
      <a class="dropdown-item" @click="filterCountries('Asia')">Asia</a>
      <a class="dropdown-item" @click="filterCountries('Europe')">Europe</a>
      <a class="dropdown-item" @click="filterCountries('Oceania')">Oceania</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    searchInput() {
      return this.$store.getters.searchInput
    },
    regionSelected() {
      return this.$store.getters.regionSelected
    },
  },

  methods: {
    filterCountries(region) {
      this.$store.dispatch('updateRegionSelected', region)
      this.$store.dispatch('filterCountries', {
        searchInput: this.searchInput,
        regionSelected: region,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#dropdownMenuButton {
  border: none;
  border-radius: 3px;
  display: inline-block;
  background-color: $white;
  color: $very-dark-blue-light-mode;
  width: 200px;
  &:focus {
    outline: none;
  }
}
</style>
