<template>
  <div class="home">
    <page-header />
    <div class="container">
      <fact-card
        v-for="(fact, index) in $store.state.currentFacts"
        :key="fact.id"
        :index="index + 1"
      >
        {{ fact.value }}
      </fact-card>
    </div>
    <base-loading v-show="$store.state.isLoading" />
  </div>
</template>

<script>
import BaseLoading from "@/components/BaseLoading.vue";
import PageHeader from "@/components/PageHeader.vue";
import FactCard from "@/components/FactCard.vue";

export default {
  name: "Home",
  components: {
    BaseLoading,
    PageHeader,
    FactCard,
  },
};
</script>
