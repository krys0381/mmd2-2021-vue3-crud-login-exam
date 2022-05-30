<template>
    <div class="conclusion-component container-fluid d-flex align-items-center justify-content-center overflow-hidden">
       
        <div class="container content-container d-flex align-items-center justify-content-center">
            <div class="row d-flex flex-column align-items-center justify-content-start">
                <div class="collab-content-container col-lg-6 col-sm-12 col-12 d-flex flex-column flex-wrap align-items-center justify-content-center">
                          <h1>Interested in collaboration?</h1>
                            <button type="button" class="btn btn-primary btn-lg col-lg-12 col-sm-12 col-12 mt-3" @click="$router.push('contact')" data-aos="flip-up">LET'S TALK</button>   
                </div>
            </div>
        </div>
         <div class="bg-image-container d-none d-xl-flex align-item-center justify-self-center">

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
@include dark-heading1;
@include heading6;

.collab-content-container{
    z-index: 1;
}

.conclusion-component{
    background-color: $lightcolor;
    position: relative;
    min-height: 500px;
}

.bg-image-container{
     background-image: url('../../assets/img/collab_bg_1-01.svg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    // margin-top: -286px;
    // margin-left: -12px;
    
}

.btn {
    background-color: #E69B5A;
    border-radius: 0;
    border-color: #E69B5A;
    padding: 15px 50px;
    transition: 0.3s;
        &:hover{
            background-color: $accentdarkcolor;
        }
}

.conclusion-row {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/collab_bg.svg");
    background-size: cover;
    background-repeat: no-repeat;
    border: none;

    #conclusion-container {
        width: 100%;
        height: 100%;
        padding: 75px 0;

        .conclusion-text-container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

            #conclusion-heading {
                width: 40%;
                margin-bottom: 10px;
            }

            #conclusion-btn {
                margin-top: 20px;

                
            }
        }
    }  
}

</style>