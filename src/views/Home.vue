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
            @click="goToFactPage(fact)"
          >
            {{ fact.value }}
          </fact-card>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import FactCard from "@/components/FactCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    PageHeader,
    FactCard,
  },
  computed: {
    ...mapGetters({
      currentFacts: "getCurrentFacts",
    }),
  },
  methods: {
    goToFactPage({ id, value }) {
      this.$router.push({
        name: "fact-page",
        params: {
          id,
          value,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  height: max-content;

  .container {
    height: 100%;
    width: 100%;
    border-left: 1px solid $borders;
    border-right: 1px solid $borders;

    &:last-of-type {
      border-bottom: 1px solid $borders;
    }
  }

  .page-header {
    .container {
      border-color: $text;
    }
  }

  &__error-msg {
    text-align: center;
    padding: 2em 0;
  }
}
</style>
