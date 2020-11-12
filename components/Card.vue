<template>
  <div class="card">
    <img :src="country.flag" class="card-img-top" alt="Country Flag" />
    <div class="card-body pt-5 px-4 pb-5 border-top">
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
.card {
  width: 330px;
  transition: box-shadow 0.3s ease;
  img {
    height: 220px;
  }
  &:hover {
    box-shadow: 1px 8px 20px grey;
  }
}
.card-text {
  height: 130px;
  color: $very-dark-blue-light-mode;
}

@media (max-width: 540px) {
  .card {
    width: 100%;
    img {
      height: auto;
    }
  }
} ;
</style>
