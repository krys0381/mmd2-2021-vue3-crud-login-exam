<template>
  <div class="eventgallery-container container-fluid overflow-hidden">
    <div class="container">

        <div class="eventgallery-row row g-0">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 p-0">
                <div class="eventgallery-heading-box">
                    <div class="eventgallery-text-box">
                        <div id="line"></div>
                        <h4>PHOTOS FROM PREVIOUS EVENTS</h4>
                    </div>
                    <div class="eventgallery-text-box"><h2>GALLERY</h2></div>
                </div>
            </div>
        
            <div class="col-sm-6 col-md-6 col-lg-6 p-0"></div>

            <!-- Photos -->

            <div class="col-12 col-sm-3 col-md-3 col-lg-3 p-0">
                <div id="left" class="btn-cover">
                    <div class="eventbtns-box">
                        <div class="team-slider-button left-button d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/chevron-left-solid-purple.svg" height="40" width="22.87" alt="">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 p-0">
                <div class="cover">

                    <div class="eventgallery-box">
                        <div class="gallery-image">
                            <img src="../../assets/img/crowd-sportsman.jpg" alt="">
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-12 col-sm-3 col-md-3 col-lg-3 p-0">
                <div class="btn-cover">
                    <div class="eventbtns-box">
                        <div class="team-slider-button right-button d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/chevron-right-solid-purple.svg" height="40" width="22.87" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 p-0">
                <div class="line-cover">
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
@include dark-heading2;
@include dark-heading4;

.eventgallery-container {
    background-color: $backgroundcolor;
}

.eventgallery-row {
    padding: 80px 0;
}

.eventgallery-heading-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // Text

    .eventgallery-text-box {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: left;

        #line {
            height: 0;
            width: 80px;
            background-color: $shadecolor;
            border: 1.5px solid $shadecolor;
            opacity: 1;
            margin-right: 20px;
        }
    }
}

.cover {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.eventgallery-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .gallery-image {
        width: 100%;

        img {
            object-fit: cover;
            width: 100%;
        }
    }
}

// Buttons

.btn-cover{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .eventbtns-box {
        display: flex;
        justify-content: flex-end;
        align-items: center;

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
            border: 2px solid $lightcolor;
        }
    }
}

// Line
// Line

.line-cover {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0 25px 0;


    .slider-pagination-line {
        height: 0;
        width: 812px;
        background-color: $lightcolor;
        border: 1.5px solid $lightcolor;
        opacity: 1;
    }
}

// Extra 

#left {
    justify-content: flex-start;
}

</style>