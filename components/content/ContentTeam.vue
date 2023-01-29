<template>
  <div>
    <TeamMember
      v-for="(member, index) in $options.members"
      :key="index"
      :name="member.name"
      :desc="member.desc"
      :img-name="member.imgName"
    />
  </div>
</template>

<script>
import TeamMember from './TeamMember.vue';

export default {
  members: [
    {
      name: 'Phil',
      desc: 'bla bla bla',
      imgName: 'phil',
    },
    {
      name: 'Nico',
      desc: 'bla bla bla',
      imgName: 'nico',
    },
    {
      name: 'Jean',
      desc: 'bla bla bla',
      imgName: 'jean',
    },
    {
      name: 'Adrien',
      desc: 'bla bla bla',
      imgName: 'adrien',
    },
    {
      name: 'Alex',
      desc: 'bla bla bla',
      imgName: 'alex',
    },
    {
      name: 'Philippe',
      desc: 'bla bla bla',
      imgName: 'philippe',
    },
    {
      name: 'Fabien',
      desc: 'bla bla bla',
      imgName: 'fabien',
    },
    {
      name: 'Madleen',
      desc: 'bla bla bla',
      imgName: 'madleen',
    },
  ],
  components: {
    TeamMember,
  },
};
</script>

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
