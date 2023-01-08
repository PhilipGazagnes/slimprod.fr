<template>
  <div class="page">
    <ChatBtn v-if="false" />
    <Banner />
    <Intro v-if="false" />
    <Values v-if="false" />
    <Services v-if="false" />
    <Team v-if="false" />
    <Contact v-if="false" />
  </div>
</template>

<script>
import ChatBtn from '../components/ChatBtn.vue';
import Banner from '../components/Banner.vue';
import Intro from '../components/Intro.vue';
import Values from '../components/Values.vue';
import Services from '../components/Services.vue';
import Team from '../components/Team.vue';
import Contact from '../components/Contact.vue';

export default {
  components: {
    ChatBtn,
    Banner,
    Intro,
    Values,
    Services,
    Team,
    Contact,
  },
  head: {
    title: 'Slim Prod',
    description: '',
  },
};
</script>

<style lang="postcss">
.page {
  position: relative;
}
</style>
