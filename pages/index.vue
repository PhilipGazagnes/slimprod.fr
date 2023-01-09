<template>
  <div class="page">
    <ChatBtn v-if="false" />
    <Banner />
    <Slider />
    <Intro />
    <Values />
    <Services />
    <Team />
    <Contact />
  </div>
</template>

<script>
import ChatBtn from '../components/ChatBtn.vue';
import Slider from '../components/Slider.vue';
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
    Slider,
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
