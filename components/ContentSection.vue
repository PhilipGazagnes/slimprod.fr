<template>
  <section class="section" :style="{ backgroundColor: color }">
    <div class="section__col">
      <h2 class="section__title">
        <slot name="title" />
      </h2>
    </div>
    <div class="section__col">
      <slot name="content" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'inherit' },
  },
};
</script>

<style lang="postcss">
.section {
  padding: 3em 1.5em;
  @media screen and (min-width: 992px) {
    display: flex;
    padding: 50px;
  }
  &__col {
    @media screen and (min-width: 992px) {
      &:first-child {
        flex: 0 0 33%;
      }
      &:last-child {
        flex: 0 0 67%;
      }
    }
  }
  &__title {
    position: sticky;
    top: 30px;
    font-family: 'Geomanist';
    padding: 0 50px 0 0;
    margin: 0;
    line-height: 1em;
    font-size: 2.5em;
    text-shadow: 0 0.1em 0 #000;
    @media screen and (min-width: 992px) {
      font-size: 4em;
    }
  }
}
</style>
