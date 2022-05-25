<template>
 <div class="ourteam-container container-fluid">
    <div class="container">
      <div class="row">
        <div class="subtitle-container d-flex align-items-center">
              <div class="subtitle-line"></div>
              <h4>PEOPLE BEHIND TEHCHHUB SYD</h4>
        </div>
        <div class="team-text-container d-flex align-items-start my-2">
           <h2 class="col-lg-6 ">
              THE TEAM
            </h2>
            <p class="team-text-p col-lg-6">
              Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, 
              <br><br>
              Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, 
            </p>
        </div>
        <div class="team-member-carousel-container d-flex flex-column justify-content-center">
                    <div class="team-member-carousel d-flex my-5 justify-content-between align-items-center">
                    <div class="team-slider-button left-button d-flex justify-content-center align-items-center">
                        <img src="../../assets/img/chevron-left-solid-light.svg" height="40" width="22.87" alt="">
                    </div>
                    <div class="team-card-container">
                      <div class="team-image">
                        <img src="../../assets/img/business-man.jpg" width="819" height="586" alt="">
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
                <div class="team-slider-button right-button d-flex justify-content-center align-items-center">
                  <img src="../../assets/img/chevron-right-solid-purple.svg" height="40" width="22.87" alt="">
                </div>
        </div>
        <div class="slider-pagination-line align-self-center"> </div>
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
@import "../../assets/shared.scss";
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
  height: 910px;
  width: 819px;
  background-color: $basecolor;
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
  width: 812px;
  background-color: $backgroundcolor;
  border: 1.5px solid $backgroundcolor;
  opacity: 1;
 
}


</style>