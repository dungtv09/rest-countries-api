<template>
  <div class="container">
    <NuxtLink
      to="/"
      tag="button"
      class="btn btn-secondary shadow-sm mt-5 mb-5 px-5 back-btn"
    >
      <i class="fas fa-angle-left mr-2"></i>Back
    </NuxtLink>

    <div class="main">
      <div class="country--flag">
        <img :src="country.flag" alt="Country Flag" />
      </div>
      <div class="country--info">
        <h3 class="font-weight-bold">{{ country.name }}</h3>
        <ul>
          <li class="mt-4">
            <span class="font-weight-bold">Native Name: </span
            >{{ country.nativeName }}
          </li>
          <li class="mt-2">
            <span class="font-weight-bold">Population: </span
            >{{ country.population }}
          </li>
          <li class="mt-2">
            <span class="font-weight-bold">Region: </span>{{ country.region }}
          </li>
          <li class="mt-2">
            <span class="font-weight-bold">Sub Region: </span
            >{{ country.subregion }}
          </li>
          <li class="mt-2">
            <span class="font-weight-bold">Capital: </span>{{ country.capital }}
          </li>
          <li class="mt-2">
            <span class="font-weight-bold">Top Level Domain: </span
            >{{ country.topLevelDomain.join(', ') }}
          </li>
          <li class="mt-2">
            <span class="font-weight-bold">Currencies: </span
            >{{
              country.currencies.map((currency) => currency.name).join(', ')
            }}
          </li>
          <li class="mt-2">
            <span class="font-weight-bold">Languages: </span
            >{{ country.languages.map((language) => language.name).join(', ') }}
          </li>
        </ul>
        <div class="border-countries mt-5">
          <span class="font-weight-bold">Border Countries: </span>
          <ul class="btn-group border-countries-list mt-3">
            <li v-for="(borderCountry, index) in borderCountries" :key="index">
              <NuxtLink
                :to="{
                  name: 'country',
                  params: { country: borderCountry.alpha3Code },
                }"
                class="btn btn-secondary shadow-sm mr-2 mb-2 border-country-btn"
                >{{ borderCountry.name }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const borderCountries = []

    const country = await context.$axios.$get(
      'https://restcountries.eu/rest/v2/alpha/' + context.params.country
    )

    for (const borderCountryCode of country.borders) {
      const borderCountry = await context.$axios.$get(
        'https://restcountries.eu/rest/v2/alpha/' + borderCountryCode
      )
      borderCountries.push(borderCountry)
    }

    return { country, borderCountries }
  },
}
</script>

<style lang="scss" scoped>
.back-btn {
  border: none;
  border-radius: 3px;
  background-color: $white;
  color: $very-dark-blue-light-mode;
}
.main {
  display: flex;
}
.country--flag,
.country--info {
  width: 50%;
}
.country--flag img {
  width: 80%;
}
.border-countries-list {
  display: flex;
  flex-wrap: wrap;
}
.border-country-btn {
  border: none;
  border-radius: 3px;
  background-color: $white;
  color: $very-dark-blue-light-mode;
}

@media (max-width: 560px) {
  .main {
    flex-direction: column;
  }
  .country--flag,
  .country--info {
    width: 100%;
  }
  .country--flag img {
    width: 100%;
  }
  .country--info {
    margin-top: 30px;
  }
}
</style>
