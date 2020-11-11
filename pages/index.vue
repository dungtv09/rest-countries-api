<template>
  <div>
    <div class="top-page container mt-5 form-inline">
      <SearchForm />

      <RegionFilter />
    </div>

    <div class="bottom-page container mt-5">
      <ul class="card-list">
        <li v-for="(country, index) in filteredCountries" :key="index">
          <router-link to="/"> <Card :country="country" /> </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    filteredCountries() {
      return this.$store.getters.filteredCountries
    },
  },
}
</script>

<style lang="scss" scoped>
.top-page {
  justify-content: space-between;
}
.card-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
