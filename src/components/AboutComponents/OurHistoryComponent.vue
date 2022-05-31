<template>
  <div class="ourhistory-container container-fluid overflow-hidden">
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="history-image col-lg-6 col-sm-12 col-12 mb-5">

        </div>
        <div class="history-text-container col-lg-5 col-sm-12 col-12">
          <div class="history-text-subtitle d-flex align-items-center">
              <div class="subtitle-line"></div>
              <h4>HOW IT ALL STARTED</h4>
          </div>
          <div class="history-text-content-container" data-aos="fade-left">
            <h2 class="my-2">
              OUR HISTORY
            </h2>
            <p class="history-text-p">
              Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, 
              <br><br>
              Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, 
            </p>
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

.ourhistory-container {
  background-color: $backgroundcolor;
}

.history-image {
  background-image: url("../../assets/img/ourhistory.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // background-attachment: fixed;
  height: 740px;
}

// .history-text-container{
//   height: 740px;
// }

.row{
   padding: 80px 0;
}

.subtitle-line {
  height: 0;
  width: 80px;
  background-color: $shadecolor;
  border: 1.5px solid $shadecolor;
  opacity: 1;
  margin-right: 20px;
}

.history-text-p{
  text-align: left;
}

</style>