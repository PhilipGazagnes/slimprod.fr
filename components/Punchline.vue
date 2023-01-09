<template>
  <div class="punchline">
    <div class="punchline__main">
      live music <span class="punchline__main__end">& fun !</span>
    </div>
    <div class="punchline__sub">
      Pour votre
      <span ref="theme">{{ $options.eventThemes[activeTheme] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  eventThemes: [
    'événement',
    'mariage',
    'séminaire',
    'team-building',
    'soirée festive',
  ],
  data() {
    return {
      activeTheme: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.rollEventTheme();
    }, 2000);
  },
  methods: {
    rollEventTheme() {
      this.activeTheme =
        this.activeTheme === this.$options.eventThemes.length - 1
          ? 0
          : this.activeTheme + 1;
    },
  },
};
</script>

<style lang="postcss">
.punchline {
  color: white;
  font-family: 'Geomanist';
  text-align: center;
  &__main {
    padding: 0 50px;
    font-size: 6em;
    line-height: 1em;
    text-shadow: 0 10px 0 #e0144c;
    @media screen and (min-width: 1400px) {
      font-size: 8em;
    }
    @media screen and (min-width: 1600px) {
      font-size: 9em;
    }
    &__end {
      white-space: nowrap;
    }
  }
  &__sub {
    padding: 10px 20px;
    font-size: 3em;
    border-radius: 10px;
    margin-top: 30px;
  }
}
</style>
