<template>
  <div class="fact-card">
    <span class="fact-card__index">#01</span>
    <p class="fact-card__content">
      <slot />
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.fact-card {
  padding: 3rem 4.5rem;
  transition: $default-transition;
  transition-property: background-color;

  &__index {
    color: $borders-darker;
  }

  &__content {
    font-size: 1.5em;
  }

  &:hover {
    background: $primary;
    cursor: pointer;

    .fact-card__index {
      color: $text;
    }

    .fact-card__content {
      color: #fff;
    }
  }
}
</style>
