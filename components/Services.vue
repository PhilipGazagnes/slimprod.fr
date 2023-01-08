<template>
  <div class="services">
    <h2>Nos prestations</h2>
    <div class="services__row">
      <div class="services__col">
        <div class="services__name">Concert</div>
        <div class="services__img">IMG</div>
        <div class="services__desc">
          Des ballades envoûtantes aux tubes irrésistibles des 80’s à
          aujourd’hui, pour accompagner votre apéro ou pour chauffer la salle,
          notre collectif de musiciens expérimentés répond à vos envies
          d’ambiance pour une expérience live sur mesure !
        </div>
      </div>
      <div class="services__col">
        <div class="services__name">Concert participatif</div>
        <div class="services__img">IMG</div>
        <div class="services__desc">
          La scène fait de plus en plus d’adeptes, nous sommes bien placés pour
          confirmer que c’est une sensation géniale ! Nous prenons un immense
          plaisir à confier le micro à vos convives, pour chanter leur chanson à
          choisir dans notre large répertoire de tubes
        </div>
      </div>
    </div>
    <div class="services__row">
      <div class="services__col">
        <div class="services__name">Jeux musicaux</div>
        <div class="services__img">IMG</div>
        <div class="services__desc">
          Blind test, n'oubliez pas les paroles, concours de prestations
          scéniques, faites s'affronter vos convives avec des cadeaux à la clé !
        </div>
      </div>
      <div class="services__col">
        <div class="services__name">DJ set</div>
        <div class="services__img">IMG</div>
        <div class="services__desc">bla bla bla</div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.services {
  &__row {
    display: flex;
  }
  &__col {
    flex: 0 0 50%;
  }
}
</style>
