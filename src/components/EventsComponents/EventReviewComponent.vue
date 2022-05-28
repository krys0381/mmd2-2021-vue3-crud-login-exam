<template>
 <div class="event-review-container container-fluid">
    <div class="container">
      <div class="row">
        <div class="subtitle-container d-flex align-items-center">
              <div class="subtitle-line"></div>
              <h4>WHAT THEY SAY ABOUT OUR EVENTS</h4>
        </div>
        <div class="review-text-container d-flex align-items-start my-2 flex-wrap">
           <h2 class="col-lg-6 col-sm-12 col-12 ">
              EVENT REVIEWS
            </h2>
        </div>
        <div class="team-member-carousel-container d-flex flex-column justify-content-center col-sm-12 col-12">
         <div class="team-member-carousel d-flex my-5 justify-content-between align-items-center">
                    <div class="team-slider-button left-button d-none d-lg-flex justify-content-center align-items-center">
                        <img src="../../assets/img/chevron-left-solid-light.svg" height="40" width="22.87" alt="">
                    </div>
                 <div class="col-lg-6 col-sm-12 col-12">
                    <div class="review-container p-5">
                      <div class="quote-left d-flex justify-content-start">
                        <img src="../../assets/img/quote-left.svg" width="48.92" height="42.81" alt="">
                      </div>
                       <p class="py-3">
                          Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. 
                        </p>
                        <div class="quote-right d-flex justify-content-end">
                           <img src="../../assets/img/quote-right.svg" width="48.92" height="42.81" alt="">
                        </div>
                        <div class="reviewer-container d-flex align-items-center justify-content-start">
                          <div class="reviewer-image me-3">
                           
                          </div>
                          <div class="d-flex flex-column">
                               <p class="reviewer-name pb-2">Adam Willis</p>
                               <p>Student at EASV</p>
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
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import "../../assets/_shared.scss";
@include dark-heading2;
@include dark-heading4;
@include light-paragraph1;

.reviewer-name{

    font-weight: bold;
 
}
.event-review-container{
  background-color: $lightcolor;
}

.review-container{
  background-color: $shadecolor;
  min-height: 311px;
  width: 100%;
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

.reviewer-image{
  background-image: url('../../assets/img/business-man.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 63px;
  height: 63px;
  border-radius: 44px;
}


</style>