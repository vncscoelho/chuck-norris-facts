<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__row">
        <h1 class="logo">
          <page-logo />
        </h1>
      </div>
      <div class="page-header__row">
        <search-box
          v-model="currentQuery"
          :error="!inputValidation && inputTouched"
          error-text="Query must contain at least 3 characters"
        />
      </div>
      <div class="page-header__row">
        <base-button primary @click="validateAction('submitQuery')"
          >SEARCH</base-button
        >
        <base-button @click="validateAction('handleFeelingLucky')"
          >FEELING LUCKY</base-button
        >
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
      inputTouched: false,
    };
  },
  computed: {
    inputValidation() {
      return this.currentQuery.length >= 3;
    },
  },
  methods: {
    validateAction(action) {
      if (this.inputValidation === false) {
        this.inputTouched = true;
        return;
      }

      this[action]();
    },
    submitQuery() {
      this.$store.dispatch("fetchFacts", this.currentQuery);
    },
    handleFeelingLucky() {
      this.$store.dispatch("getFirstResult", this.currentQuery).then((data) => {
        if (data) {
          this.$router.push({
            name: "fact-page",
            params: {
              id: data.id,
              value: data.value,
            },
          });
        }
      });
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
