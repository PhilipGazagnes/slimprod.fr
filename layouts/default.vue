<template>
  <nuxt />
</template>

<style lang="postcss">
body {
  padding: 0;
  margin: 0;
  background: #ff5858;
  color: white;
}
h1,
h2 {
  font-family: 'Geomanist';
}
@font-face {
  font-family: 'Budge';
  src: url('/fonts/BudgeRegular.eot');
  src: url('/fonts/BudgeRegular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/BudgeRegular.woff2') format('woff2'),
    url('/fonts/BudgeRegular.woff') format('woff'),
    url('/fonts/BudgeRegular.ttf') format('truetype'),
    url('/fonts/BudgeRegular.svg#BudgeRegular') format('svg');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Geomanist';
  src: local('Geomanist Ultra'), local('Geomanist-Ultra'),
    url('/fonts/Geomanist-Ultra.woff2') format('woff2'),
    url('/fonts/font/Geomanist-Ultra.woff') format('woff'),
    url('/fonts//Geomanist-Ultra.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>
