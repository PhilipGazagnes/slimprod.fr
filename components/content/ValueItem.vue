<template>
  <div class="value-item">
    <h5>{{ name }}</h5>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <img class="value-item__img" :src="`/img/values/rollerskates.jpg`" />
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    desc: { type: String, default: '' },
    imgName: { type: String, default: '' },
  },
};
</script>

<style lang="postcss">
.value-item {
  padding: 0 0 0 200px;
  position: relative;
  min-height: 150px;
  margin-bottom: 50px;
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    border-radius: 100%;
  }
}
</style>
