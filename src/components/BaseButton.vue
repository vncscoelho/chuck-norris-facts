<template>
  <button
    class="base-button"
    :class="{ 'base-button--primary': primary }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.base-button {
  padding: 1em 2em;
  font-size: 1.25em;
  font-weight: bolder;
  text-transform: uppercase;
  color: #fff;
  border: 0;
  background: none;
  transition: 150ms ease-in;
  transition-property: color, background-color;

  &:hover {
    background: lighten($secondary, 15);
  }

  &--primary {
    background: $primary;
    color: #fff;

    &:hover {
      background: lighten($primary, 15);
    }
  }
}
</style>
