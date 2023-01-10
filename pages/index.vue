<template>
  <div class="page">
    <Banner />
    <Slider v-if="false" />
    <Intro v-if="false" />
    <ContentSection color="#9A1663">
      <template #title>Hey !</template>
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
    <ContentSection color="#9A1663">
      <template #title>Au menu</template>
      <template #content>
        <ContentServices />
      </template>
    </ContentSection>
    <ContentSection color="#E0144C">
      <template #title>La team</template>
      <template #content>
        <ContentTeam />
      </template>
    </ContentSection>
    <ContentSection color="#FF97C1">
      <template #title>On en parle ?</template>
      <template #content>
        <ContentContact />
      </template>
    </ContentSection>
  </div>
</template>

<script>
import Slider from '../components/Slider.vue';
import Banner from '../components/Banner.vue';
import ContentSection from '../components/ContentSection.vue';
import ContentIntro from '../components/ContentIntro.vue';
import ContentValues from '../components/ContentValues.vue';
import ContentServices from '../components/ContentServices.vue';
import ContentTeam from '../components/ContentTeam.vue';
import ContentContact from '../components/ContentContact.vue';

export default {
  components: {
    Banner,
    Slider,
    ContentSection,
    ContentIntro,
    ContentValues,
    ContentServices,
    ContentTeam,
    ContentContact,
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
