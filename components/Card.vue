<template>
  <div class="card">
    <img :src="country.flag" class="card-img-top" alt="Country Flag" />
    <div class="card-body pt-4 px-4 pb-5">
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
  width: 240px;
  transition: box-shadow 0.3s ease;
  background-color: var(--element);
  img {
    height: 160px;
  }
  &:hover {
    box-shadow: 1px 8px 20px grey;
  }
}
.card-text {
  height: 120px;
  color: var(--color);
}

@media (max-width: 991px) {
  .card {
    width: 300px;
    img {
      height: 200px;
    }
  }
}

@media (max-width: 767px) {
  .card {
    width: 390px;
    img {
      height: 260px;
    }
  }
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
