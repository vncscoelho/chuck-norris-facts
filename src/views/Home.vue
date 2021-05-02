<template>
  <div class="home">
    <page-header />
    <div class="container">
      <p v-if="currentFacts === null" class="home__error-msg">
        Search for keyworks or try a random one.
      </p>
      <template v-else>
        <p v-if="currentFacts.length === 0" class="home__error-msg">
          No results found.
        </p>
        <template v-else>
          <fact-card
            v-for="(fact, index) in $store.state.currentFacts"
            :key="fact.id"
            :index="index + 1"
          >
            {{ fact.value }}
          </fact-card>
        </template>
      </template>
    </div>
    <base-loading v-show="$store.state.isLoading" />
  </div>
</template>

<script>
import BaseLoading from "@/components/BaseLoading.vue";
import PageHeader from "@/components/PageHeader.vue";
import FactCard from "@/components/FactCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    BaseLoading,
    PageHeader,
    FactCard,
  },
  computed: {
    ...mapGetters({
      currentFacts: "getCurrentFacts",
    }),
  },
};
</script>

<style lang="scss">
.home {
  &__error-msg {
    text-align: center;
    padding: 2em 0;
  }
}
</style>
