<template>
  <div class="fact-modal">
    <div class="fact-modal__wrapper">
      <video
        ref="chuckNorris"
        src="@/assets/media/chuck-norris-gaze-into-your-soul.webm"
      />
      <p class="fact-modal__content">{{ fact }}</p>
    </div>
    <footer class="fact-modal__footer">
      <base-button @click="$emit('random')">RANDOM</base-button>
      <base-button @click="$emit('close')">CLOSE</base-button>
    </footer>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  components: {
    BaseButton,
  },
  props: {
    fact: {
      type: String,
      default: null,
    },
  },
  mounted() {
    this.$refs.chuckNorris.play();
  },
};
</script>

<style lang="scss">
.fact-modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-size: 2em;
  background: #fff;

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    padding: 1em;
    font-size: 1em;
    color: $text;

    @media screen and (min-width: 1024px) {
      font-size: 1.5em;
      max-width: 60%;
      color: $primary;
      margin: auto 0;
    }
  }

  &__footer {
    margin-top: auto;
    width: 100%;
    border: 1px solid $borders;

    .base-button {
      width: 50%;
      font-size: 0.5em;
      color: $borders-darker;

      & + .base-button {
        border-left: 1px solid $borders;
      }
    }
  }

  &__wrapper {
    position: relative;
    display: flex;
    height: 100%;

    video {
      position: absolute;
      top: 0;
      right: -40vw;
      height: 100%;
      width: auto;
      max-width: none;
      opacity: 0.8;
    }
  }
}
</style>
