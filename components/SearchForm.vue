<template>
  <form class="form-control search-form shadow-sm">
    <i class="fas fa-search ml-3 mr-2"></i>
    <input
      v-model="searchInput"
      type="text"
      placeholder="Search for a country..."
      class="search-input"
      @input="filterCountries"
    />
    <i class="fas fa-times" @click="clearInput"></i>
  </form>
</template>

<script>
export default {
  computed: {
    searchInput: {
      get() {
        return this.$store.getters.searchInput
      },
      set(searchInput) {
        this.$store.dispatch('updateSearchInput', searchInput)
      },
    },
    regionSelected() {
      return this.$store.getters.regionSelected
    },
  },

  methods: {
    filterCountries() {
      this.$store.dispatch('filterCountries', {
        searchInput: this.searchInput,
        regionSelected: this.regionSelected,
      })
    },

    clearInput() {
      this.$store.dispatch('updateSearchInput', '')
      this.filterCountries()
    },
  },
}
</script>

<style lang="scss" scoped>
.search-form {
  border: none;
  border-radius: 3px;
  display: inline-block;
  background-color: $white;
}
.fa-search {
  color: grey;
}
.search-input {
  border: none;
  width: 300px;
  color: $dark-gray;
  &:focus {
    outline: none;
  }
}
.fa-times {
  cursor: pointer;
}
</style>
