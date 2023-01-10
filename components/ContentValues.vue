<template>
  <div>
    <ValueItem
      v-for="(value, index) in $options.values"
      :key="index"
      :name="value.name"
      :desc="value.desc"
      :img-name="value.imgName"
    />
  </div>
</template>

<script>
import ValueItem from './ValueItem.vue';

export default {
  values: [
    {
      name: 'Ecoute',
      desc: 'Nous adaptons nos prestations au contexte de votre événement.',
      imgName: 'rollerskates',
    },
    {
      name: 'Rigueur',
      desc: 'Pour que tout se passe comme sur des roulettes le jour J.',
      imgName: 'rollerskates',
    },
    {
      name: 'Fun',
      desc: 'On bosse pour ça avant tout :)',
      imgName: 'rollerskates',
    },
  ],
  components: {
    ValueItem,
  },
};
</script>

<style lang="postcss"></style>
