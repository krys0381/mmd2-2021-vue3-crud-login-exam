<template>
 <div class="eventvideo-container container-fluid">
    <div class="container">
      <div class="row">
        <div class="subtitle-container d-flex align-items-center">
              <div class="subtitle-line"></div>
              <h4>RECORDINGS FROM PREVIOUS EVENTS</h4>
        </div>
        <div class="team-text-container d-flex align-items-start my-2 flex-wrap">
           <h2 class="col-lg-6 col-sm-12 col-12 ">
             VIDEOS
            </h2>
          
        </div>
        <div class="team-member-carousel-container d-flex flex-column justify-content-center col-sm-12 col-12">
         <div class="team-member-carousel d-flex my-5 justify-content-between align-items-center">
                    <div class="team-slider-button left-button d-none d-lg-flex justify-content-center align-items-center" data-aos="zoom-in">
                        <img src="../../assets/img/chevron-left-solid-light.svg" height="40" width="22.87" alt="">
                    </div>
                    <div class="video-container col-lg-6 col-sm-12 col-12">
                        <iframe height="656" src="https://www.youtube.com/embed/g8VUtUnfiPY"  allowfullscreen></iframe>
                    </div>
                     
                <div class="team-slider-button right-button d-none d-lg-flex justify-content-center align-items-center" data-aos="zoom-in">
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
@import "../../assets/shared.scss";
@include light-heading2;
@include light-heading4;
.eventvideo-container {
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
  background-image: url('../../assets/img/business-man.jpg');
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

iframe{
    width: 100%;
}


</style>