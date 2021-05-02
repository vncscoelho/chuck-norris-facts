<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__row">
        <h1 class="logo">
          <span>Chuck</span>
          <span>Norris</span>
          <span>Facts</span>
        </h1>
      </div>
      <div class="page-header__row"></div>
      <div class="page-header__row"></div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.page-header {
  background: $secondary;

  &__row {
    & + & {
      border-top: 1px solid $borders-darker;
    }
  }

  .logo {
    padding: 2rem;
    font-size: 2em;
    font-weight: bolder;
    text-transform: uppercase;
    line-height: 0.75;
    color: $primary;

    span {
      display: block;
    }
  }
}
</style>
