<template>
  <div ref="slider" class="slider">
    <img
      v-for="i in 4"
      :key="i"
      class="slider__img"
      :data-active="i === $store.state.bannerActiveImage"
      :data-constraint="imageConstraint"
      :src="`/img/slider/image${i}.jpg`"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageConstraint: null, // 'horizontal' or 'vertical'
    };
  },
  mounted() {
    const { width, height } = this.$refs.slider.getBoundingClientRect();
    this.imageConstraint = width / height < 2 / 3 ? 'horizontal' : 'vertical';
    setInterval(() => {
      this.$store.commit('NEXT_BANNER_IMAGE');
    }, 1000);
  },
};
</script>

<style lang="postcss">
.slider {
  overflow: hidden;
  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(1);
    display: none;
    &[data-active] {
      display: block;
    }
    &[data-constraint='horizontal'] {
      width: 100%;
      height: auto;
    }
    &[data-constraint='vertical'] {
      height: 100%;
      width: auto;
    }
  }
}
</style>
