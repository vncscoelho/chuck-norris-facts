<template>
  <div class="search-box">
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
      class="search-box__input"
      placeholder="Search for a fact or keyword here"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.search-box {
  &__input {
    width: 100%;
    padding: 2rem;
    border: 0;
    background: transparent;
    color: #fff;
    font-family: "Work Sans";
    font-size: 1.25em;
  }
}
</style>
