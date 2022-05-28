<template>
  <div class="container-fluid">
    <div class="container overflow-hidden">
      <div class="row">
       <div class="subtitle-container d-flex align-items-center">
              <div class="subtitle-line"></div>
              <h4>WHAT EVENTS WE HAD</h4>
        </div>
        <h2 class="title">
              PAST EVENTS
        </h2>
        
        <div class="row cards-container row-cols-1 row-cols-lg-3 g-3 g-lg-2 d-flex flex-wrap">
            <div class="col-lg-4 col-sm-12 col-12">
               <div class="card-event card-1 d-flex flex-column ">
                 <div class="image-container image-1">

                 </div>
                 <div class="card-content-container d-flex flex-column p-4 align-items-start justify-content-center">
                   <h5>Praesent aliquam vitae </h5>
                  <p class="py-3">A student job at a startup can be super exciting. Therefore we gather curious students from relevant educations and put them in front of </p>
                  <div class="card-address-container d-flex align-items-center pb-1">
                    <img src="../../assets/img/location.svg" width="28" height="28" alt="location" class="pe-3">
                    <p>Esbjerg, Denmark</p>
                  </div>
                  <div class="card-calendar-container d-flex align-items-center">
                    <img src="../../assets/img/calendar_1.svg" width="28" height="28" alt="calendar" class="pe-3">
                    <p>03 May 2021</p>
                  </div>
                   <button type="button" class="event-btn-details btn btn-primary btn-lg col-xl-6 col-sm-12 col-12 mt-5">VIEW DETAILS</button>
                 </div>
                 
               </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-12">
                <div class="card-event card-2 ">
                    <div class="image-container image-2">

                  </div>
                  <div class="card-content-container d-flex flex-column p-4 align-items-start justify-content-center">
                    <h5>Praesent aliquam vitae </h5>
                    <p class="py-3">A student job at a startup can be super exciting. Therefore we gather curious students from relevant educations and put them in front of </p>
                    <div class="card-address-container d-flex align-items-center pb-1">
                      <img src="../../assets/img/location.svg" width="28" height="28" alt="location" class="pe-3">
                      <p>Tistrup, Denmark</p>
                    </div>
                    <div class="card-calendar-container d-flex align-items-center">
                      <img src="../../assets/img/calendar_1.svg" width="28" height="28" alt="calendar" class="pe-3">
                      <p>21 Jun 2021</p>
                    </div>
                    <button type="button" class="event-btn-details btn btn-primary btn-lg col-xl-6 col-sm-12 col-12 mt-5">VIEW DETAILS</button>
                  </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-12">
              <div class="card-event card-3">
                <div class="image-container image-3">

                 </div>
                 <div class="card-content-container d-flex flex-column p-4 align-items-start justify-content-center">
                   <h5>Praesent aliquam vitae </h5>
                  <p class="py-3">A student job at a startup can be super exciting. Therefore we gather curious students from relevant educations and put them in front of </p>
                  <div class="card-address-container d-flex align-items-center pb-1">
                    <img src="../../assets/img/location.svg" width="28" height="28" alt="location" class="pe-3">
                    <p>Sig, Denmark</p>
                  </div>
                  <div class="card-calendar-container d-flex align-items-center">
                    <img src="../../assets/img/calendar_1.svg" width="28" height="28" alt="calendar" class="pe-3">
                    <p>13 Jul 2021</p>
                  </div>
                   <button type="button" class="event-btn-details btn btn-primary btn-lg col-xl-6 col-sm-12 col-12 mt-5">VIEW DETAILS</button>
                 </div>
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
@include light-heading5;

.row{
  padding: 80px 0;
}

.container-fluid{
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

.card-event{
  // width: 100%;
  min-height: 640px;
  background-color: $basecolor;
  .image-container{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 248px;
    width: 100%;
  }

  .image-1{
    background-image: url('../../assets/img/female-speaker.jpg');
  }

  .image-2{
    background-image: url('../../assets/img/diverse-business.jpg');
  }

  .image-3{
    background-image: url('../../assets/img/male-speaker.jpg');
  }
}

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


</style>