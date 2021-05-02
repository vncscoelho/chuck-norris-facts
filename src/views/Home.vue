<template>
  <div class="home">
    <page-header />
    <div class="container">
      <fact-card>
        Fort Knox wanted to store gold in Chuck Norris' beard - but Chuck
        Norris' beard makes gold rust
      </fact-card>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import FactCard from "@/components/FactCard.vue";

export default {
  name: "Home",
  components: {
    PageHeader,
    FactCard,
  },
};
</script>
