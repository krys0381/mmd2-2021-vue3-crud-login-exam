<template>
  <div class="eventvideos-container container-fluid overflow-hidden">
    <div class="container">

        <div class="eventvideos-row row g-0">
            <div class="col-12 col-sm-6 p-0">
                <div class="eventvideos-box">
                    <div class="eventvideos-text-box">
                        <div id="line"></div>
                        <h4>RECORDINGS FROM PREVIOUS EVENTS</h4>
                    </div>
                    <div class="eventvideos-text-box"><h2>VIDEOS</h2></div>
                </div>
            </div>

            <div class="col-sm-6 p-0"></div>

            <div class="col-12 p-0">
                <div id="extra">
                    
                    <div class="team-slider-button left-button d-flex justify-content-center align-items-center">
                        <img src="../../assets/img/chevron-left-solid-light.svg" height="40" width="22.87" alt="">
                    </div>

                    <div class="eventvideos-box">
                        <div class="eventvideos-video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/OS8taasZl8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="team-slider-button right-button d-flex justify-content-center align-items-center">
                        <img src="../../assets/img/chevron-right-solid-purple.svg" height="40" width="22.87" alt="">
                    </div>

                </div>
            </div>

            <div class="col-12 p-0">
                <div id="extra">
                    <div class="slider-pagination-line align-self-center"></div>
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

<style scoped lang="scss">
@import "../../assets/shared.scss";
@include light-heading2;
@include light-heading4;

.eventvideos-container {
    background-color: $shadecolor;
}

.eventvideos-row {
    padding: 80px 0;
}

.eventvideos-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // Text

    .eventvideos-text-box {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: left;

        #line {
            height: 0;
            width: 80px;
            background-color: $backgroundcolor;
            border: 1.5px solid $backgroundcolor;
            opacity: 1;
            margin-right: 20px;
        }
    }

    // Video

    .eventvideos-video {
        width: 100%;
        height: 100%;
        padding: 30px;
    }
}

.team-slider-button{
  // background: red;
  height: 88px;
  width: 88px;
  border-radius: 44px;
}

.right-button{
  border: 2px solid $basecolor;
}

.left-button{
  border: 2px solid $backgroundcolor;
}

// Line

.slider-pagination-line {
  height: 0;
  width: 812px;
  background-color: $backgroundcolor;
  border: 1.5px solid $backgroundcolor;
  opacity: 1;
  margin: 100px 0;
}

// Extra

#extra {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>