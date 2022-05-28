<template>
  <div class="events overflow-hidden">
    <Header />
    <EventsHeroComponent />
    <EventsCalendarComponent />
    <EventsArchiveComponent />
    <EventVideosComponent />
    <EventGalleryComponent />
    <EventsReviewComponent />
    <Footer />
  </div>
</template>

<script>
// Stuff for CRUD

import Header from '../components/Header.vue'
import EventsHeroComponent from '../components/EventsComponents/EventsHeroComponent.vue'
import EventsCalendarComponent from '@/components/EventsComponents/EventsCalendarComponent.vue'
import EventsArchiveComponent from '../components/EventsComponents/EventsArchiveComponent.vue'
import EventVideosComponent from '@/components/EventsComponents/EventVideosComponent.vue'
import EventGalleryComponent from '@/components/EventsComponents/EventGalleryComponent.vue'
import EventsReviewComponent from '../components/EventsComponents/EventReviewComponent.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'EventsView',
  components: {
    Header,
    EventsHeroComponent,
    EventsArchiveComponent,
    EventsCalendarComponent,
    EventVideosComponent,
    EventGalleryComponent,
    EventsReviewComponent,
    Footer
  }
}
</script>

<style scoped lang="scss">

@import "../assets/_shared.scss";
@include light-heading1;
@include heading3;
@include heading6;
@include light-paragraph1;

.events-row {
  width: 100%;
  height: 100%;
  background: transparent linear-gradient(180deg, #7E42BE 0%, #10041C 100%) 0% 0% no-repeat padding-box;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px 0 120px 0;
}
 
.events-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .hero-container {
    width: 85%;
    display: flex;

    #hero-heading {
      text-align: left;
      font: normal normal bold 40px/114px Poppins;
      letter-spacing: 0px;
      color: $backgroundcolor;
      opacity: 1;
    }

    #hero-text {
      display: flex;
      align-items: center;
      text-align: left;
      color: $backgroundcolor;
    }

    .hero-location-time {
      width: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 20px 0;

      .location-time-img {
        width: 10%;
        margin-right: 15px;

        img {
          width: 100%;
          object-fit: cover;
        }
      }
    }

    #date {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 20px;

      #date-img {
        width: 10%;
        margin-right: 15px;

        img {
          width: 100%;
          object-fit: cover;
        }
      }

      #date-text-container {
        display: flex;
        align-items: center;

        #date-text {
          font: normal normal bold 80px Poppins;
          letter-spacing: 0px;
          color: $backgroundcolor;
          opacity: 1;
        }
      }
    }

    #hero-btn {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .btn {
        background-color: #E69B5A;
        border-radius: 0;
        border-color: #E69B5A;
        padding: 15px;
      }
    }
  }
}

// Picture

.events-picture-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #hero-picture {
    width: 85%;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}

// Extra

#extra {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>