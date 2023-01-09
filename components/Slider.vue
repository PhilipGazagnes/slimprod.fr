<template>
  <div ref="slider" class="slider">
    <img
      v-for="i in 5"
      :key="i"
      class="slider__img"
      :src="`/img/gallery/photo${i}.jpg`"
    />
    <img
      v-for="i in 3"
      :key="i"
      class="slider__img"
      :src="`/img/gallery/photo${i}.jpg`"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.slider {
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  transform: rotate(-5deg);
  &__img {
    border-radius: 50px 0;
    width: 400px;
    margin: 0 10px 20px;
    box-shadow: 20px 20px 0 #9a1663;
  }
}
</style>
