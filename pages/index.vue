<template>
  <div class="page">
    <Banner />
    <Slider />
    <Intro v-if="false" />
    <ContentSection color="#eee">
      <template #title>Au menu</template>
      <template #content>
        <ContentIntro />
      </template>
    </ContentSection>
    <ContentSection color="#FF97C1">
      <template #title>Nos valeurs</template>
      <template #content>
        <ContentValues />
      </template>
    </ContentSection>
    <ContentSection color="#E0144C">
      <template #title>La team</template>
      <template #content>
        <ContentTeam />
      </template>
    </ContentSection>
    <ContentSection color="#FF97C1">
      <template #title>Et vous ?</template>
      <template #content>
        <ContentContact />
      </template>
    </ContentSection>
    <Footer />
  </div>
</template>

<script>
import Slider from '../components/Slider.vue';
import Banner from '../components/Banner.vue';
import ContentSection from '../components/content/ContentSection.vue';
import ContentIntro from '../components/content/ContentIntro.vue';
import ContentValues from '../components/content/ContentValues.vue';
import ContentTeam from '../components/content/ContentTeam.vue';
import ContentContact from '../components/content/ContentContact.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Banner,
    Slider,
    ContentSection,
    ContentIntro,
    ContentValues,
    ContentTeam,
    ContentContact,
    Footer,
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
