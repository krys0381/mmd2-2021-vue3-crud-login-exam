<template>
  <div class="events">
    <Header />
    <div class="events-row row g-0">

      <div class="col-12 col-sm-6 p-0">
        <div class="events-container">

          <div class="hero-container">
            <div id="hero-heading">
              Tech &amp; Tequila Kickstart
            </div>
          </div>

          <div class="hero-container">
            <div id="hero-text">
              <p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</p>
            </div>
          </div>

          <div class="hero-container">

            <div class="hero-location-time">
              <div class="location-time-img">
                <img src="../assets/img/location.svg" alt="">
              </div>
              <p>Esbjerg, Denmark</p>
            </div>

            <div class="hero-location-time">
              <div class="location-time-img">
                <img src="../assets/img/clock.svg" alt="">
              </div>
              <p>7:00pm - 9:00pm</p>
            </div>

          </div>

          <div class="hero-container">
            <div id="date">
              <div id="date-img">
                <img src="../assets/img/calendar.svg" alt="">
              </div>
              <div id="date-text-container">
                <div id="date-text">19 May</div>
              </div>
            </div>
          </div>

          <div class="hero-container">
            <div id="hero-btn">
              <button type="button" class="btn btn-primary btn-lg"><h6>GET TICKETS NOW!</h6></button>
            </div>
          </div>

        </div>
      </div>

      <div class="col-12 col-sm-6 p-0">
        <div id="extra">
          <div class="events-picture-container">
            <div id="hero-picture">
              <img src="../assets/img/eventspreview.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <EventsCalendar />
    <Footer />
  </div>
</template>

<script>
// Stuff for CRUD

import Header from '../components/Header.vue'
import EventsCalendar from '@/components/EventsComponents/EventsCalendarComponent.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'EventsView',
  components: {
    Header,
    EventsCalendar,
    Footer
  }
}
</script>

<style scoped lang="scss">
@import "../assets/shared.scss";
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