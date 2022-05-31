<template>
 <div class="gallery-container container-fluid">
    <div class="container">
      <div class="row">
        <div class="subtitle-container d-flex align-items-center">
              <div class="subtitle-line"></div>
              <h4>PHOTOS FROM PREVIOUS EVENTS</h4>
        </div>
        <div class="team-text-container d-flex align-items-start my-2 flex-wrap">
           <h2 class="col-lg-6 col-sm-12 col-12 ">
             GALLERY
            </h2>
          
        </div>
        <div class="team-member-carousel-container d-flex flex-column justify-content-center col-sm-12 col-12">
                <div class="team-member-carousel d-flex my-5 justify-content-between align-items-center ">
                            <div class="team-slider-button left-button d-none d-lg-flex justify-content-center align-items-center" data-aos="zoom-in">
                                <img src="../../assets/img/chevron-left-solid-light-purple.svg" height="40" width="22.87" alt="">
                            </div>
                            <div class="gallery-image-container col-lg-6 col-sm-12 col-12">
                                <!-- <img src="../../assets/img/crowd-sportsman.jpg" height="656"  alt=""> -->
                                <div class="gallery-image">

                                </div>
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
                            <img src="../../assets/img/chevron-left-solid-light-purple.svg" height="40" width="22.87" alt="">
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
@include dark-heading2;
@include dark-heading4;
.gallery-container {
  background-color: $backgroundcolor;
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

.gallery-image {
    background-image: url('../../assets/img/image_5.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 41rem;
    width: 100%;
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
  border: 1px solid $lightcolor;
}

.slider-pagination-line {
  height: 0;
  width: 100%;
  background-color: $lightcolor;
  border: 1.5px solid $lightcolor;
  opacity: 1;
 
}

.gallery-image-container{
    img{
        width: 100%;
    }
    
}


</style>