<template>
    <div class="followus-component container-fluid">
        <div class="followus-row container">
            <div class="row">
               
                <div class="followus-container d-flex flex-column align-items-start justify-content-start">
                    <div class="followus-text-container">
                        <div id="line"></div>
                        <h4>WHERE TO FIND US IN SOCIAL MEDIA</h4>
                    </div>
                   <h2>FOLLOW US</h2>
                </div>
            <div class="row row-cols-1 row-cols-lg-3 g-3 g-lg-3 d-flex flex-wrap">
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <a href="https://www.linkedin.com/company/techhub-syd/"><div class="some-image some-1 "></div></a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <a href="https://www.linkedin.com/company/techhub-syd/"><div class="some-image some-2 "></div></a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <a href="https://www.linkedin.com/company/techhub-syd/"><div class="some-image some-3 "></div></a>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <a href="https://www.linkedin.com/company/techhub-syd/"><div class="some-image some-4 "></div></a>
                </div>

            </div>

            <div class="col-12 p-0">
                <div class="followus-container">
                    <div class="followus-btn-container col-lg-6 col-sm-12 col-12">
                        <button type="button" class="btn btn-primary btn-lg col-lg-6 col-sm-12 col-12" data-aos="zoom-out-up">VIEW MORE</button>
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
    // height: 300px;
    // width: 300px;
    height: 300px;
    width: 100%;
}

.some-1{
    background-image: linear-gradient(#7E42BE19, #7E42BE19), url('../../assets/img/image_7.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.some-2{
    background-image: linear-gradient(#7E42BE19, #7E42BE19),url('../../assets/img/image_8.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.some-3{
    background-image: linear-gradient(#7E42BE19, #7E42BE19),url('../../assets/img/image_6.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.some-4{
    background-image: linear-gradient(#7E42BE19, #7E42BE19),url('../../assets/img/image_1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

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