<template>
  <div class="search-box">
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
      class="search-box__input"
      placeholder="Search for a fact or keyword here"
    />
    <small class="search-box__error" v-if="error">{{ errorText }}</small>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.search-box {
  padding: 2rem;

  &__input {
    width: 100%;
    border: 0;
    background: transparent;
    color: #fff;
    font-family: "Work Sans";
    font-size: 1.25em;
  }

  &__error {
    color: $red;
  }
}
</style>
