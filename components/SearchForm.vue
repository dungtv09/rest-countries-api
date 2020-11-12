<template>
  <form class="form-control search-form shadow-sm" @submit.prevent="">
    <div class="icon"><i class="fas fa-search ml-3 mr-2"></i></div>
    <input
      v-model="searchInput"
      type="text"
      placeholder="Search for a country..."
      class="search-input"
      @input="filterCountries"
    />
    <div class="icon"><i class="fas fa-times" @click="clearInput"></i></div>
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
  background-color: var(--element);
  width: 400px;
  display: grid;
  grid-template-columns: 50px auto 15px;
}
.fa-search,
.fa-times {
  color: var(--color);
}
.search-input {
  border: none;
  background-color: var(--element);
  color: var(--color);
  &:focus {
    outline: none;
  }
}
.fa-times {
  cursor: pointer;
}

@media (max-width: 767px) {
  .search-form {
    margin-bottom: 30px;
  }
}
@media (max-width: 520px) {
  .search-form {
    width: 100%;
  }
}
</style>
