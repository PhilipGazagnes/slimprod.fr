<template>
  <div class="punchline">
    <div
      class="punchline__main"
      :style="{
        textShadow: `rgba(${
          $options.highlightRgbColors[$store.state.bannerActiveImage - 1]
            .mainTextShadow
        }, 0.8) 0 2px 3px`,
      }"
    >
      Music & Fun
    </div>
    <div
      class="punchline__sub"
      :style="{
        backgroundColor: `rgba(${
          $options.highlightRgbColors[$store.state.bannerActiveImage - 1]
            .subBackground
        }, 0.8)`,
      }"
    >
      Pour votre événement666
    </div>
  </div>
</template>

<script>
export default {
  highlightRgbColors: [
    {
      mainTextShadow: '255,0,0',
      subBackground: '255,0,0',
    },
    {
      mainTextShadow: '0,255,0',
      subBackground: '0,255,0',
    },
    {
      mainTextShadow: '0,0,255',
      subBackground: '0,0,255',
    },
    {
      mainTextShadow: '255,0,255',
      subBackground: '255,0,255',
    },
  ],
  props: {
    highlightRgbColor: { type: String, default: '0, 0, 0' },
  },
  mounted() {
    this.initAnim();
  },
  methods: {
    initAnim() {},
  },
};
</script>

<style lang="postcss">
.punchline {
  color: white;
  font-family: 'Courier';
  &__main {
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 3em;
  }
  &__sub {
    padding: 10px;
    font-size: 2em;
  }
}
</style>
