<template>
  <div class="values">
    <h2>Nos valeurs</h2>
    <div class="values__row">
      <div class="values__col">
        <div class="values__name">Ecoute</div>
        <div class="values__desc">
          Nous adaptons nos prestations au contexte de votre événement.
        </div>
        <div class="values__img">IMG</div>
      </div>
      <div class="values__col">
        <div class="values__name">Rigueur</div>
        <div class="values__desc">
          Pour que tout se passe comme sur des roulettes le jour J.
        </div>
        <div class="values__img">IMG</div>
      </div>
      <div class="values__col">
        <div class="values__name">Fun</div>
        <div class="values__desc">On bosse pour ça avant tout :)</div>
        <div class="values__img">IMG</div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.values {
  &__row {
    display: flex;
  }
  &__col {
    flex: 0 0 33.33%;
  }
}
</style>
