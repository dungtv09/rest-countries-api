<template>
  <div>
    <div class="top-page container mt-5 mb-5 form-inline">
      <SearchForm />

      <RegionFilter />
    </div>

    <div class="bottom-page container">
      <ul class="card-list">
        <li v-for="(country, index) in filteredCountries" :key="index">
          <NuxtLink
            :to="{
              name: 'country',
              params: { country: country.alpha3Code },
            }"
            :country="country"
            class=".card"
          >
            <Card :country="country" />
          </NuxtLink>
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
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}
</style>
