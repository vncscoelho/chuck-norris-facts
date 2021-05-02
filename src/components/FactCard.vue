<template>
  <div class="fact-card">
    <span class="fact-card__index">#{{ count }}</span>
    <p class="fact-card__content">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    count() {
      return this.index < 10 ? `0${this.index}` : this.index;
    },
  },
};
</script>

<style lang="scss">
.fact-card {
  padding: 3rem 4.5rem;
  transition: $default-transition;
  transition-property: background-color;

  & + & {
    border-top: 1px solid $borders;
  }

  &__index {
    display: block;
    color: $borders-darker;
    margin-bottom: 0.3em;
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
