<template>
    <div class="introduction-component container-fluid">
        <div class="introduction-row g-0 container">
            <div class="row d-flex justify-content-between align-items-start">
                <div class="col-lg-6 col-sm-12 col-12 mb-5">
                     <iframe class="videoContainer__video" width="x" height="y" src="https://www.youtube.com/embed/KmxwCNRL88U?controls=1&modestbranding=1&rel=0&autoplay=1" allowfullscreen frameborder="0">
    </iframe> 
                    <!-- <div id="extra">
                        <div class="introduction-container">
                            <div class="introduction-video">
                                <iframe width="700" height="656" src="https://www.youtube.com/embed/OS8taasZl8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div> -->
                </div>

                <div class=" col-lg-5 col-sm-12 col-12">
                    <div class="introduction-container d-flex flex-column justify-content-between">
                        <div class="introduction-text-container">
                            <div id="line"></div>
                            <h4>WHO WE ARE</h4>
                        </div>
                        <div class="introduction-text-container d-flex flex-column align-items-start mb-5">
                            <h2>OUR STORY</h2>
                        <p>
                            Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, 
                            <br><br>
                            Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, 
                        </p></div>
                        <div class="introduction-text-container">
                            <button type="button" class="btn btn-primary btn-lg">READ MORE</button>
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

<style scoped lang="scss">
@import "../../assets/shared.scss";
@include dark-heading2;
@include dark-heading4;
@include dark-paragraph1;

// .introduction-row {
//     width: 100%;
//     height: 100%;
//     background: $backgroundcolor 0% 0% no-repeat padding-box;
//     opacity: 1;
//     padding: 80px 0;
// }

iframe {
    width: 100%;
    min-height: 656px;
}

.row{
//    padding: 80px 0;
   padding-top: 200px;
   padding-bottom: 80px;
}

.introduction-component{
    background-color: $backgroundcolor;
}

.introduction-container {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    // text-align: left;

    // Video

    .introduction-video {
        width: 100%;
        height: 100%;
        padding: 30px;
    }

    // Text

    .introduction-text-container {
        // width: 85%;
        // height: 100%;
        display: flex;
        align-items: center;
        text-align: left;
        // margin: 20px 0;

        #line {
            height: 0;
            width: 80px;
            background-color: $shadecolor;
            border: 1.5px solid $shadecolor;
            opacity: 1;
            margin-right: 20px;
        }

        .btn {
            background-color:  $backgroundcolor;
            border-radius: 0;
            border-color: $basecolor;
            color: $basecolor;
            padding: 15px 30px;
            transition: 0.3s;
            &:hover{
                background-color: $lightcolor;
            }
        }
    }
}

// #extra {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
</style>