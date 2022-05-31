<template>
 <div class="ourteam-container container-fluid">
    <div class="container">
      <div class="row">
        <div class="subtitle-container d-flex align-items-center">
              <div class="subtitle-line"></div>
              <h4>PEOPLE BEHIND TEHCHHUB SYD</h4>
        </div>
        <div class="team-text-container d-flex align-items-start my-2 flex-wrap">
           <h2 class="col-lg-6 col-sm-12 col-12 ">
              THE TEAM
            </h2>
            <p class="team-text-p col-lg-6 col-sm-12 col-12">
              Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, 
              <br><br>
              Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, 
            </p>
        </div>
        <div class="team-member-carousel-container d-flex flex-column justify-content-center col-sm-12 col-12">
         <div class="team-member-carousel d-flex my-5 justify-content-between align-items-center">
                    <div class="team-slider-button left-button d-none d-lg-flex justify-content-center align-items-center">
                        <img src="../../assets/img/chevron-left-solid-light.svg" height="40" width="22.87" alt="">
                    </div>
                    <div class="team-card-container d-flex flex-column col-lg-6 col-md-12 col-sm-12 col-12">
                      <div class="team-image" data-aos="zoom-in-down">
                          
                      </div>
                      <div class="team-card-info m-5">
                        <p class="team-name">
                          Kasper Bank Thomsen
                        </p>
                        <p class="team-position"> 
                          Founder / CEO 
                        </p>
                        <p class="team-desc my-4">
                          Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero 
                        </p>
                        <div class="team-some d-flex">
                          <div class="linkedin-container d-flex justify-content-center align-items-center d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/linkedin.svg" width="24" height="21" alt="">
                          </div>
                          <div class="linkedin-container d-flex justify-content-center align-items-center mx-3">
                            <img src="../../assets/img/facebook-f-light.svg" width="24" height="21" alt="">
                          </div>
                          <div class="linkedin-container d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/twitter.svg" width="24" height="21" alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                <div class="team-slider-button right-button d-none d-lg-flex justify-content-center align-items-center">
                  <img src="../../assets/img/chevron-right-solid-purple.svg" height="40" width="22.87" alt="">
                </div>
        </div>
       
        <div class="pagination-container col-lg-6 col-md-12 col-sm-12 col-12 align-self-center pb-5">
            <div class="slider-pagination-line  "> </div>
        </div>
         <div class="arrow-mobile d-lg-none d-flex  col-12 justify-content-center"> <!-- show only on mobile version -->
            <div class="team-slider-button left-button d-flex justify-content-center align-items-center mx-3">
                    <img src="../../assets/img/chevron-left-solid-light.svg" height="40" width="22.87" alt="">
            </div>
            <div class="team-slider-button right-button d-flex justify-content-center align-items-center">
                  <img src="../../assets/img/chevron-right-solid-purple.svg" height="40" width="22.87" alt="">
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
@import "../../assets/_shared.scss";
@include dark-heading2;
@include dark-heading4;
@include light-paragraph1;

.ourteam-container {
  background-color: $lightcolor;
}

.subtitle-line {
  height: 0;
  width: 80px;
  background-color: $shadecolor;
  border: 1.5px solid $shadecolor;
  opacity: 1;
  margin-right: 20px;
}

.row{
   padding: 80px 0;
}

.team-text-p{
  text-align: left; 
  color: $shadecolor;
}

.team-card-container{
  // min-height: 910px;
  // width: 100%;
  background-color: $basecolor;
}

.team-image{
  background-image: url('../../assets/img/image_3.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
}

.team-name {
  font-weight: bold;
}

.team-position{
  opacity: .65;
}

.linkedin-container{
  border: 1px solid $backgroundcolor;
  width: 40px;
  height: 40px;
}

.team-slider-button{
  // background: red;
  height: 88px;
  width: 88px;
  border-radius: 44px;
}

.right-button{
  border: 1px solid $basecolor;
}

.left-button{
  border: 1px solid $backgroundcolor;
}

.slider-pagination-line {
  height: 0;
  width: 100%;
  background-color: $backgroundcolor;
  border: 1.5px solid $backgroundcolor;
  opacity: 1;
 
}


</style>