<template>
    <div class="followus-component container-fluid">
        <div class="followus-row container">
            <div class="row">
               
                <div class="followus-container d-flex flex-column align-items-start justify-content-start mb-5 ">
                    <div class="followus-text-container">
                        <div id="line"></div>
                        <h4>WHAT'S HAPPENING</h4>
                    </div>
                   <h2>FOLLOW US</h2>
                </div>
            <div class="some-posts-container d-flex flex-wrap align-items-center justify-content-center col-sm-12 col-12">
                <div class="some-image some-1 m-2"></div>
                <div class="some-image some-2 m-2"></div>
                <div class="some-image some-3 m-2"></div>
                <div class="some-image some-4 m-2"></div>
            </div>
            <!-- <div class="col-12 p-0">
                <div class="followus-container">
                    <div class="followus-gallery-container">
                        <div class="followus-gallery"><img src="../../assets/img/crowd-sportsman.jpg" alt=""></div>
                        <div class="followus-gallery"><img src="../../assets/img/diverse-business.jpg" alt=""></div>
                        <div class="followus-gallery"><img src="../../assets/img/female-speaker.jpg" alt=""></div>
                        <div class="followus-gallery"><img src="../../assets/img/male-speaker.jpg" alt=""></div>
                    </div>
                </div>
            </div> -->

            <div class="col-12 p-0">
                <div class="followus-container">
                    <div class="followus-btn-container">
                        <button type="button" class="btn btn-primary btn-lg">VIEW MORE</button>
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
@include light-heading2;
@include light-heading4;
@include light-paragraph1;

.followus-component {
     background: $shadecolor;
}

.row{
padding: 80px 0;
}

.some-image{
    height: 300px;
    width: 300px;
}

.some-1{
    background-image: linear-gradient(#7E42BE19, #7E42BE19), url('../../assets/img/crowd-sportsman.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.some-2{
    background-image: linear-gradient(#7E42BE19, #7E42BE19),url('../../assets/img/diverse-business.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.some-3{
    background-image: linear-gradient(#7E42BE19, #7E42BE19),url('../../assets/img/female-speaker.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.some-4{
    background-image: linear-gradient(#7E42BE19, #7E42BE19),url('../../assets/img/male-speaker.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


// .followus-row {
//     width: 100%;
//     height: 100%;
//     background: $shadecolor 0% 0% no-repeat padding-box;
//     opacity: 1;
//     padding: 80px 0;
// }

.followus-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // Text

    .followus-text-container {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: left;
        margin: 20px 0;

        #line {
            height: 0;
            width: 80px;
            background-color: $backgroundcolor;
            border: 1.5px solid $backgroundcolor;
            opacity: 1;
            margin-right: 20px;
        }
    }

    // Gallery

    .followus-gallery-container {
        width: 95%;
        background-color: $shadecolor;
        display: flex;

        .followus-gallery {
            width: 50%;
            
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }

    .followus-btn-container{
        margin-top: 30px;
        
        .btn {
            background-color: $shadecolor;
            border-radius: 0;
            border-color: $backgroundcolor;
            color: $backgroundcolor;
            padding: 15px 30px;
            transition: 0.3s;
            &:hover{
                background-color: $basecolor;
            }
        }
    }
}


</style>