<template>
  <div class="banner">
    <img src="/svg/logo.svg" class="banner__logo" />
    <Slider ref="slider" class="banner__slider" @change="handleChange" />
    <Punchline class="banner__punchline" :highlight-color="highlightRgbColor" />
  </div>
</template>

<script>
import Slider from './Slider.vue';
import Punchline from './Punchline.vue';

export default {
  components: {
    Slider,
    Punchline,
  },
  data() {
    return {
      highlightRgbColor: '0,0,0',
    };
  },
  methods: {
    handleChange(highlightRgbColor) {
      this.highlightRgbColor = highlightRgbColor;
    },
  },
};
</script>

<style lang="postcss">
.banner {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  &__logo {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 140px;
    height: 140px;
    z-index: 1;
  }
  &__slider {
    height: 100%;
    background: #222;
  }
  &__punchline {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
