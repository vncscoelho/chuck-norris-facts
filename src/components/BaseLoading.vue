<template>
  <transition name="fade">
    <div class="base-loading">
      <page-logo />
    </div>
  </transition>
</template>

<script>
import PageLogo from "@/components/PageLogo";

export default {
  components: {
    PageLogo,
  },
};
</script>

<style lang="scss">
.base-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: $primary;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .page-logo {
    animation: "blink" 2s ease-in-out infinite;
  }
}
</style>
