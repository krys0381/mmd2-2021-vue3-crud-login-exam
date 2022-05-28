<template>
  <div class="events-component container-fluid">
    <div class="container">
        <div class="row">
            <div class="d-flex align-items-center justify-content-start">
              <div class="line"></div>
              <h4>WHAT EVENTS TO EXPECT</h4>
            </div>
            <h2>UPCOMING EVENTS</h2>
            <div class="view-icon-container d-flex justify-content-end mb-5">
              <img src="../../assets/img/list.png" width="26" height="26" alt="">
            </div>
            <div class="upcomingevent-list-container d-flex flex-column align-items-center">
                    <div 
                      class="eventslist-container col-lg-10 col-sm-12 col-12 d-flex flex-wrap mb-5"
                      v-for="{ id, date, name, description, location, time } in events" :key="id"
                      >

                        <div class="event-img col-lg-5 col-sm-12 col-12">
                          <img src="../../assets/img/eventspreview.jpg" alt="">
                        </div>

                        <div class="event-description-container col-lg-7 col-sm-12 col-12 d-flex flex-column align-items-start justify-content-center p-5">
                         <div class="date-container"></div>
                           <h1>  {{ date }} </h1>
                            <h5>{{ name }}</h5>
                      

                          <div class="event-description mb-4">
                            <p>{{ description }}</p>
                          </div>

                          <div class="event-description mb-5 d-flex col-lg-12 col-sm-12 col-12 flex-wrap">
                            <div class="event-location-time d-flex col-lg-5 col-sm-12 col-12 me-3 mb-3">
                              <img src="../../assets/img/location.svg" width="28" height="28" alt="" class="me-2">
                              <p>{{ location }}</p>
                            </div>

                            <div class="event-location-time d-flex col-lg-5 col-sm-12 col-12">
                              <img src="../../assets/img/clock.svg" width="28" height="28" alt="" class="me-2">
                              <p>{{ time }}</p>
                            </div>
                          </div>

                          <div class="event-description d-flex col-lg-12 col-sm-12 col-12 flex-wrap">
                            <div class="event-btn-ticket col-lg-5 col-sm-12 col-12 me-3 mb-3">
                                 <button type="button" class=" btn btn-primary btn-lg col-lg-12 col-sm-12 col-12">GET TICKET</button>
                            </div>
                            <div class="event-btn-details col-lg-5 col-sm-12 col-12">
                              <button type="button" class="event-btn-details btn btn-primary btn-lg col-lg-12 col-sm-12 col-12">VIEW DETAILS</button>
                            </div>
                          </div>

                        </div>

                      </div>
            </div>
        </div>
        
    </div>


<!--     
    <div class="events-row row g-0">

      <div class="col-12 col-sm-6 col-md-6 col-lg-6 p-0">
        <div class="events-container">
          <div class="events-text-container">
            <div id="line"></div>
            <h4>WHAT EVENTS TO EXPECT</h4>
          </div>
          <div class="events-container"><h2>UPCOMING EVENTS</h2></div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-6 col-lg-6 p-0"></div>

      <div class="col-12 p-0">
        <div id="extra">
          <div 
          class="eventslist-container"
          v-for="{ id, date, name, description, location, time } in events" :key="id"
          >

            <div class="event-img">
              <img src="../../assets/img/eventspreview.jpg" alt="">
            </div>

            <div class="event-description-container">
              <div class="event-description">
                <div id="event-date">{{ date }}</div>
              </div>

              <div class="event-description">
                <h5>{{ name }}</h5>
              </div>

              <div class="event-description">
                <p>{{ description }}</p>
              </div>

              <div class="event-description">
                <div class="event-location-time">
                  <div class="location-time-img">
                    <img src="../../assets/img/location.svg" alt="">
                  </div>
                  <p>{{ location }}</p>
                </div>

                <div class="event-location-time">
                  <div class="location-time-img">
                    <img src="../../assets/img/clock.svg" alt="">
                  </div>
                  <p>{{ time }}</p>
                </div>
              </div>

              <div class="event-description">
                <div class="event-btn-ticket">
                  <button type="button" class="btn btn-primary btn-lg"><h6>GET TICKET</h6></button>
                </div>

                <div class="event-btn-details">
                  <button type="button" class="btn btn-primary btn-lg"><h6>VIEW DETAILS</h6></button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div> -->
  </div>



  <!-- <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Location</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, date, name, description, location, time } in events" :key="id">
          <td>{{ date }}</td>
          <td>{{ name }}</td>
          <td>{{ description }}</td>
          <td>{{ location }}</td>
          <td>{{ time }}</td>
        </tr>
      </tbody>
    </table>
   
  </div> -->
</template>

<script>
// useload hook + delete import 
import { useLoadEvents } from '../../firebase.js'

export default {
  setup() {
    const events = useLoadEvents()

    return { events }
  } 
}
</script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";
@include dark-heading2;
@include dark-heading4;
@include light-heading5;
@include heading6;
@include light-paragraph1;
@include light-heading1 ;

.events-component{
  background: $backgroundcolor;
}

.row{
  padding: 80px 0;
}
.line {
    height: 0;
    width: 80px;
    background-color: $shadecolor;
    border: 1.5px solid $shadecolor;
    opacity: 1;
    margin-right: 20px;
  }

.events-row {
  // width: 100%;
  background: $backgroundcolor 0% 0% no-repeat padding-box;
  opacity: 1;
  // padding: 80px 0;
}

.events-container {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;

  // Text
  .events-text-container {
    // width: 85%;
    // height: 100%;
    // display: flex;
    // align-items: center;
    text-align: left;
    margin: 20px 0;

    #line {
      height: 0;
      width: 80px;
      background-color: $shadecolor;
      border: 1.5px solid $shadecolor;
      opacity: 1;
      margin-right: 20px;
    }
  }
}

// Events List

.eventslist-container {
  // width: 75%;
  background: $basecolor 0% 0% no-repeat padding-box;
  border: 1px solid $basecolor;
  opacity: 1;
  display: flex;
  min-height: 623.2px;
  // margin: 50px 0;

  .event-img {
    display: flex;
    justify-content: center;

    img {

      width: 100%;
      height: 100%;
      object-fit: cover;

    }
  }

  // Description

  .event-description-container {
    // display: flex;
    // flex-direction: column;
    // padding: 50px;

    .event-description {
      // width: 85%;
      // display: flex;
      // justify-content: flex-start;
      // align-items: center;

        .event-date {
          font: normal normal bold 80px Poppins;
          letter-spacing: 0px;
          color: $backgroundcolor;
          opacity: 1;
        }

      .event-location-time {
        // width: 50%;
        // display: flex;
        // justify-content: flex-start;
        // align-items: center;
        // padding: 20px 0;

        .location-time-img {
          // width: 10%;
          // margin-right: 15px;

          img {
            // width: 100%;
            // object-fit: cover;
          }
        }
      }
    }

    .event-btn-ticket {
      // display: flex;
      // justify-content: flex-center;
      // align-items: center;
      // margin-right: 10px;
      .btn {
          background-color: #E69B5A;
          border-radius: 0;
          border-color: #E69B5A;
          padding: 15px 30px;
          transition: 0.3s;
            &:hover{
              background-color: $accentdarkcolor;
            }
      } 
      
      // text-align: center;
     
    }

    .event-btn-details {
      // display: flex;
      // justify-content: flex-center;
      // align-items: center;
      // margin-left: 10px;
      .btn{
        border: 1px solid $lightcolor;
        opacity: 1;
        border-radius: 0;
        opacity: 1;
        background-color: $basecolor;
        padding: 15px 30px;
        transition: 0.3s;
        &:hover{
          background-color: $lightcolor;
        }
      }
    }
  }
}

// Extra

// #extra {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// }
</style>