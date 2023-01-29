<template>
  <div class="punchline">
    <div class="punchline__main">
      live music <span class="punchline__main__end">& fun !</span>
    </div>
    <div class="punchline__sub">
      <span class="punchline__sub__txt">
        Pour votre
        <span ref="theme" class="punchline__sub__theme">
          <strong class="punchline__sub__theme__txt">
            {{ $options.eventThemes[activeTheme] }}
          </strong>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  eventThemes: [
    'séminaire',
    'team-building',
    'fête de village',
    'mariage',
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
    padding: 0 20px;
    font-size: 3.5em;
    line-height: 1em;
    text-shadow: 0 0.09em 0 rgba(0, 0, 0, 0.2);
    @media screen and (min-width: 992px) {
      font-size: 6em;
    }
    &__end {
      white-space: nowrap;
    }
  }
  &__sub {
    padding: 10px 50px;
    font-size: 1.8em;
    border-radius: 10px;
    margin-top: 30px;
    @media screen and (min-width: 992px) {
      font-size: 2.5em;
    }
    &__txt {
      background: rgba(0, 0, 0, 0.1);
      padding: 0 15px;
    }
    &__theme {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 20px;
        background: red;
        bottom: 10px;
        z-index: 0;
      }
      &__txt {
        position: relative;
        z-index: 1;
        font-weight: normal;
        padding: 0 5px;
      }
    }
  }
}
</style>
