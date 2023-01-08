<template>
  <div class="team">
    <h2>Nos valeurs</h2>
    <div class="team__row">
      <div v-for="i in 10" :key="i" class="team__item">
        <div class="team__img">IMG</div>
        <div class="team__name">Henri {{ i }}</div>
        <div class="team__desc">bla bla bla</div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.team {
  &__row {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    flex: 0 0 20%;
  }
}
</style>
