<template>
  <div class="missionvision-container container-fluid">
    <div class="container">
      <div class="row flex-wrap">
          <div class="missionvision-text-subtitle d-flex align-items-center">
              <div class="subtitle-line"></div>
              <h4>OUR GOALS</h4>
          </div>
          <div class="missionvision-content-container d-flex justify-content-between flex-wrap">
            <div class="missionvision-title-container col-lg-5 col-sm-12 col-12 px-1 pb-5">
               <h2 class="my-2">
                MISSION &#38; <br>
                VISION
              </h2>
               <p class="missionvision-text-p">
              Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id
              </p>
            </div>
            <div class="missionvision-icons-container col-lg-6 col-sm-12 col-12 d-flex flex-wrap">
              <div class="icon-item icon-item-1 col-lg-6 col-sm-12 col-12 d-flex flex-column justify-content-start pb-5 px-2" data-aos="fade-down">
                 <img class="icon-image" src="../../assets/img/calendar.png" width="72" height="72" alt="">
                <p class="icon-title my-3">To facilitate events</p>
                <p class="icon-desc">To strengthen the startup and tech eco-system in the southern region through a powerful community.</p>
              </div>
              <div class="icon-item icon-item-1 col-lg-6 col-sm-12 col-12 d-flex flex-column justify-content-start pb-5 px-2" data-aos="fade-down">
                 <img class="icon-image" src="../../assets/img/initiative.png" width="72" height="72" alt="">
                <p class="icon-title my-3">To motivate</p>
                <p class="icon-desc">To strengthen the startup and tech eco-system in the southern region through a powerful community.</p>
              </div>
              <div class="icon-item icon-item-1 col-lg-6 col-sm-12 col-12 d-flex flex-column justify-content-start pb-5 px-2" data-aos="fade-up">
                 <img class="icon-image" src="../../assets/img/puzzle.png" width="72" height="72" alt="">
                <p class="icon-title my-3">To be a match-maker</p>
                <p class="icon-desc">Match commercial founders with tech founders to create new tech ventures.</p>
              </div>
              <div class="icon-item icon-item-1 col-lg-6 col-sm-12 col-12 d-flex flex-column justify-content-start pb-5 px-2" data-aos="fade-up">
                 <img class="icon-image" src="../../assets/img/speaker.png" width="72" height="72" alt="">
                <p class="icon-title my-3">To inspire</p>
                <p class="icon-desc">Inspire with inspirational talks from successful tech founders, industry leaders and business angels.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    delay: 300
});

export default {
    
  }
</script>

<style lang="scss" scoped>
@import "../../assets/shared.scss";
@include light-heading2;
@include light-heading4;
@include light-paragraph1;

.missionvision-container {
  background-color: $shadecolor;
}

.subtitle-line {
  height: 0;
  width: 80px;
  background-color: $backgroundcolor;
  border: 1.5px solid $backgroundcolor;
  opacity: 1;
  margin-right: 20px;
}

.row{
  padding: 80px 0;
}

.missionvision-text-p {
  text-align: left;
}

.icon-title{
  font-weight: bold;
}

</style>