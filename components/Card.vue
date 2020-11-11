<template>
  <div class="card shadow-sm" style="width: 15rem">
    <img :src="country.flag" class="card-img-top" alt="Country Flag" />
    <div class="card-body pt-4 px-4 pb-5 border-top">
      <div class="card-text">
        <h5 class="font-weight-bold mb-3">{{ country.name }}</h5>
        <ul>
          <li>
            <span class="font-weight-bold">Population: </span
            >{{ country.population }}
          </li>
          <li class="mt-1">
            <span class="font-weight-bold">Region: </span>{{ country.region }}
          </li>
          <li class="mt-1">
            <span class="font-weight-bold">Capital: </span>{{ country.capital }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-text {
  color: $very-dark-blue-light-mode;
}
</style>
