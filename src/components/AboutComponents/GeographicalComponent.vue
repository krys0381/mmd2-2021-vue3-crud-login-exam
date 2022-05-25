<template>
  <div class="geographical-container container-fluid">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="subtitle-container d-flex align-items-center">
              <div class="subtitle-line"></div>
              <h4>WHERE WE WORK</h4>
        </div>
        <div class="geo-text-container d-flex align-items-start my-2 flex-wrap">
           <h2 class="col-lg-6">
              GEOGRAPHICAL <br>
              REACH
            </h2>
            <p class="geo-text-p col-lg-6">
              Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, 
              <br><br>
              Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, 
            </p>
        </div>
        <div class="geo-image my-5 d-flex justify-content-center">
          <!-- <img src="../../assets/img/geo.jpg" width="1363" height="656" alt=""> -->
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

.geographical-container{
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

.geo-text-p{
  text-align: left; 
}

.geo-image{
  width: 60vw;
  background-image: url('../../assets/img/geo.jpg');
  height: 656px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

</style>