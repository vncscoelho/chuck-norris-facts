<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__row">
        <h1 class="logo">
          <span>Chuck</span>
          <span>Norris</span>
          <span>Facts</span>
        </h1>
      </div>
      <div class="page-header__row">
        <search-box v-model="currentQuery" />
      </div>
      <div class="page-header__row">
        <base-button primary @click="submitQuery">SEARCH</base-button>
        <base-button>FEELING LUCKY</base-button>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import BaseButton from "@/components/BaseButton";

export default {
  components: {
    SearchBox,
    BaseButton,
  },
  data() {
    return {
      currentQuery: "",
    };
  },
  methods: {
    submitQuery() {
      this.$api
        .queryFacts(this.currentQuery)
        .then(({ data }) => console.log(data));
    },
  },
};
</script>

<style lang="scss">
.page-header {
  background: $secondary;

  &__row {
    & + & {
      border-top: 1px solid $text;
    }
  }

  .logo {
    padding: 2rem;
    font-size: 2em;
    font-weight: bolder;
    text-transform: uppercase;
    line-height: 0.75;
    color: $primary;

    span {
      display: block;
    }
  }

  .base-button {
    width: 50%;
  }
}
</style>
