<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__row">
        <h1 class="logo">
          <page-logo />
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
import PageLogo from "@/components/PageLogo";
import SearchBox from "@/components/SearchBox";
import BaseButton from "@/components/BaseButton";

export default {
  components: {
    PageLogo,
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
      this.$store.dispatch("fetchFacts", this.currentQuery);
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
