<template>
  <div class="banner">
    <img src="/svg/logo.svg" class="banner__logo" />
    <Punchline class="banner__punchline" />
  </div>
</template>

<script>
import Punchline from './Punchline.vue';

export default {
  components: {
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
  text-align: center;
  padding: 50px 0 120px;
  background: radial-gradient(
    circle,
    rgba(255, 88, 88, 1) 40%,
    rgba(224, 20, 76, 1) 100%
  );
  &__logo {
    width: 150px;
    height: 150px;
    @media screen and (min-width: 992px) {
      width: 210px;
      height: 210px;
    }
  }
  &__punchline {
    margin-top: 30px;
  }
}
</style>
