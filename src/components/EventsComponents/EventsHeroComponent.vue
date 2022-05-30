<template>
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row d-flex justify-content-between align-items-center">
        <div 
        class="event-hero-content-container d-flex flex-column col-lg-5 col-sm-12 col-12">
          <div class="hero-heading">
               <h2>Tech &amp; Tequila Kickstart</h2> 
               <h5>Guest speaker Ronnie Baslund</h5>
          </div>
          
          <p class="my-4">
            Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, 
          </p>
          <div class="event-hero-datetime d-flex align-items-center justify-content-start">
             <div class="hero-location-time d-flex align-items-center justify-content-start me-5">
                <img src="../../assets/img/location.svg" width="28" height="28" alt="address" class="me-2">
                <p>Esbjerg, Denmark</p>
            </div>
            <div class="hero-location-time d-flex align-items-center justify-content-start">
              <img src="../../assets/img/timetable_lightpurple.png" width="28" height="28" alt="time and date" class="me-2">
              <p>19 May 2022, 7:00pm</p>
            </div>
              
          </div>
          <div class="countdown-container d-flex justify-content-between align-items-center my-5">
            <div class="day-container d-flex flex-column align-items-center ">
                <h1>2</h1>
                <h5>DAYS</h5>
            </div>
            <div class="hr-container ">
                <h1>5</h1>
                <h5>HRS</h5>
            </div>
            <div class="mins-container ">
                <h1>3</h1>
                <h5>MINS</h5>
            </div>
            <div class="secs-container ">
                <h1>18</h1>
                <h5>SECS</h5>
            </div>
          </div>
          <div class="hero-container ">
            <div class="hero-btn ">
              <button type="button" class="btn btn-primary btn-lg col-12">GET TICKET NOW!</button>
            </div>
          </div>
        </div>
        <div class="event-image-container col-lg-6 d-lg-flex d-none">
          <div class="event-hero-image">

          </div>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import "../../assets/_shared.scss";
@include light-heading1;
@include light-heading5;
@include heading3;
@include heading6;
@include light-paragraph1;
@include light-sub_event_heading2;

.row{
  padding: 80px 0;
}
.container-fluid{
  background: transparent linear-gradient(180deg, #7E42BE 0%, #10041C 100%);
  min-height: 90vh;
  width: 100vw;
}

.hero-heading {
      text-align: left;
      font: normal normal bold 40px/114px Poppins;
      letter-spacing: 0px;
      color: $backgroundcolor;
      // opacity: 1;
}

.event-hero-image{
  background-image: url('../../assets/img/eventspreview.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 740px;
  width: 100%;
}

.hero-heading {
  h5{
  opacity: .60;
  } 
} 

.countdown-container {
  h5{
    font-weight: normal;
    font-size: 28px;
  }
}

.hero-btn {
      display: flex;
      justify-content: flex-start;
      align-items: center;

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
    }

</style>