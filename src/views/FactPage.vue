<template>
  <div class="fact-page">
    <div class="fact-page__wrapper">
      <video
        ref="chuckNorris"
        src="@/assets/media/chuck-norris-gaze-into-your-soul.webm"
      />
      <p class="fact-page__content">{{ internalValue }}</p>
    </div>
    <footer class="fact-page__footer">
      <base-button @click="getRandomFact">RANDOM</base-button>
      <base-button @click="$router.push({ name: 'home' })">BACK</base-button>
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
    id: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  created() {
    this.fetchMissingData(this.id, this.value);
    this.registerVideoTrigger();
  },
  computed: {
    internalValue() {
      return this.value ?? this.currentValue;
    },
  },
  methods: {
    getRandomFact() {
      this.$store.dispatch("fetchRandomFact").then(({ id, value }) => {
        this.$router.replace({
          name: "fact-page",
          params: {
            id,
            value,
          },
        });
        this.playVideo();
      });
    },
    fetchMissingData(id, value) {
      if (!id) {
        this.$router.push({ name: "home" });
      } else if (!value) {
        this.$store.dispatch("findFact", id).then(({ value }) => {
          this.currentValue = value;
        });
      }
    },
    playVideo() {
      this.$refs.chuckNorris.play();
    },
    registerVideoTrigger() {
      document.addEventListener("visibilitychange", ({ target }) => {
        if (target.visibilityState === "visible") {
          this.playVideo();
        }
      });
    },
  },
};
</script>

<style lang="scss">
.fact-page {
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
    overflow-y: scroll;
    overflow-x: hidden;

    video {
      position: absolute;
      top: 0;
      right: -40vw;
      height: 100%;
      width: auto;
      max-width: none;
      opacity: 0.8;

      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
  }
}
</style>
