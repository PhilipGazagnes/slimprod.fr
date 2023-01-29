<template>
  <div class="banner">
    <div class="metal-structure">
      <div class="metal-structure__top" />
      <div class="spot spot1" />
      <div class="spot spot2" />
      <div class="spot spot3" />
      <div class="spot spot4" />
    </div>
    <img src="/svg/logo-liveoclock-badge.svg" class="banner__logo" />
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
  position: relative;
  z-index: 0;
  padding: 50px 0 120px;
  background: radial-gradient(
    circle,
    rgba(255, 88, 88, 1) 40%,
    rgba(224, 20, 76, 1) 100%
  );
  overflow: hidden;
  &__logo {
    width: 150px;
    height: 150px;
    position: relative;
    z-index: 1;
    @media screen and (min-width: 992px) {
      width: 210px;
      height: 210px;
    }
  }
  &__punchline {
    position: relative;
    z-index: 1;
    margin-top: 30px;
  }
}
.metal-structure {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &::before,
  &::after {
    content: '';
    display: block;
    height: calc(100% - 48px);
    position: absolute;
    bottom: 0;
    width: 28px;
    background: url(/img/ui/metal-structure-vertical-mobile.png) repeat-y;
    @media screen and (min-width: 1200px) {
      height: calc(100% - 78px);
    }
  }
  &::before {
    left: 20px;
    @media screen and (min-width: 1200px) {
      left: 50px;
    }
  }
  &::after {
    right: 20px;
    @media screen and (min-width: 1200px) {
      right: 50px;
    }
  }
  &__top {
    position: absolute;
    display: block;
    width: calc(100% - 46px);
    height: 28px;
    top: 20px;
    left: 23px;
    background: url(/img/ui/metal-structure-horizontal-mobile.png) repeat-x
      center center;
    @media screen and (min-width: 1200px) {
      top: 50px;
      width: calc(100% - 106px);
      left: 53px;
    }
    &::after,
    &::before {
      content: '';
      display: block;
      width: 3px;
      height: 100%;
      position: absolute;
      top: 0;
      background: rgba(0, 0, 0, 0.2);
    }
    &::before {
      left: -3px;
    }
    &::after {
      right: -3px;
    }
  }
}
.spot {
  position: absolute;
  top: 15px;
  @media screen and (min-width: 1200px) {
    top: 45px;
  }
  &1 {
    left: 20%;
    @media screen and (min-width: 1200px) {
      left: 15%;
    }
  }
  &2 {
    left: 32%;
  }
  &3 {
    right: 32%;
  }
  &4 {
    right: 20%;
    @media screen and (min-width: 1200px) {
      right: 15%;
    }
  }
  &2,
  &3 {
    display: none;
    @media screen and (min-width: 1200px) {
      display: block;
    }
  }
  &::before {
    content: '';
    display: block;
    width: 30px;
    height: 40px;
    border-radius: 8px;
    background: #9f2e35;
    z-index: 1;
    position: relative;
  }
  &::after {
    content: '';
    display: inline-block;
    height: 0;
    width: 0;
    border-right: 150px solid transparent;
    border-bottom: 1000px solid rgba(224, 20, 76, 0.2);
    border-left: 150px solid transparent;
    position: absolute;
    top: 20px;
    left: -135px;
    z-index: 0;
  }
}
</style>
