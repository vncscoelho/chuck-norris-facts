<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style src="@/assets/styles/reset.css" />
<style lang="scss">
body {
  font-family: "Work Sans", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: $default-transition;
  transition-property: opacity;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
