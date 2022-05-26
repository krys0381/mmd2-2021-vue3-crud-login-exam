<template>
  <div class="about">
    <Header />
    <AboutHeroComponent />
    <OurHistoryComponent />
    <TeamComponent />
    <MissionVisionComponent />
    <GeographicalComponent />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import AboutHeroComponent from '../components/AboutComponents/AboutHeroComponents.vue';
import OurHistoryComponent from '../components/AboutComponents/OurHistoryComponent.vue';
import TeamComponent from '../components/AboutComponents/TeamComponent.vue';
import MissionVisionComponent from '../components/AboutComponents/MisionVisionComponent.vue';
import GeographicalComponent from '../components/AboutComponents/GeographicalComponent.vue'
import Footer from '../components/Footer.vue'

  export default {
    name: 'AboutView',
    components:{
      Header,
      AboutHeroComponent,
      OurHistoryComponent,
      TeamComponent,
      MissionVisionComponent,
      GeographicalComponent,
       Footer
    }
  
  }
</script>

<style lang="scss" scoped>

</style>