<template>
    <div class="homepage">
        <Header />
        <div class="homepage-row container-fluid g-0">
            <div class="container">
                <div class="row" id="homepage-container">
                    <!-- <div class="col-12 p-0"> -->
                        <!-- <div id="homepage-container"> -->

                        <div class="hero-text-container d-flex flex-column align-items-center ">
                             <div class="hero-container">
                                <div id="hero-heading">
                                    <h1>Because starting up a tech business should be possible.</h1>
                                </div>
                            </div>

                            <div class="hero-container">
                                <div id="hero-text">
                                    <h3>We are a community that connects, inspires and helps start-ups, students and investors build their tech business through networking events.</h3>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary btn-lg 2 col-lg-4 col-md-12 col-sm-12 col-12 mt-5">JOIN OUR EVENT NOW!</button>
                            <!-- <div class="hero-container col-lg-12 col-sm-12 col-12">
                                <div id="hero-btn">
                                    <button type="button" class="btn btn-primary btn-lg 2">JOIN OUR EVENT NOW!</button>
                                </div>
                            </div> -->
                            <div class="hero-image-container d-none d-xl-flex">

                            </div>
                        </div>

                            <div class="hero-container d-none d-xl-flex">
                                <div id="link-btns">
                                    <a href="" class="link-btn d-flex align-items-center">
                                   
                                        <div class="link-btn-text">
                                            <div class="link-btn-text-small">LOOKING FOR FUNDING?</div>
                                            <div class="link-btn-text-big mt-4">Start-ups</div>
                                        </div>
                                        <div class="link-btn-arrow">
                                            <!-- <img src="../assets/img/angle-right-solid.svg" alt=""> -->
                                        </div>
                                    </a>
                                    

                                    <a href="" class="link-btn d-flex align-items-center">
                                        <div class="link-btn-text">
                                            <div class="link-btn-text-small">READY TO INVEST IN START-UPS?</div>
                                            <div class="link-btn-text-big mt-4">Investors</div>
                                        </div>
                                        <div class="link-btn-arrow">
                                            <!-- <img src="../assets/img/angle-right-solid.svg" alt=""> -->
                                        </div>
                                    </a>
                                </div>
                            </div>

                        <!-- </div> -->
                    <!-- </div> -->
                </div>
            </div>
        </div>
        <IntroductionComponent />
        <OurServicesComponent />
        <EventsPreviewComponent />
        <OurPartnersComponent />
        <TestimonialsComponent />
        <FollowUsComponent />
        <NewsletterComponent />
        <ConclusionComponent />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import IntroductionComponent from '../components/HomepageComponents/IntroductionComponent.vue'
import OurServicesComponent from '../components/HomepageComponents/OurServicesComponent.vue'
import EventsPreviewComponent from '../components/HomepageComponents/EventsPreviewComponent.vue'
import OurPartnersComponent from '../components/HomepageComponents/OurPartnersComponent.vue'
import TestimonialsComponent from '../components/HomepageComponents/TestimonialsComponents/TestimonialsComponent.vue'
import FollowUsComponent from '../components/HomepageComponents/FollowUsComponent.vue'
import NewsletterComponent from '../components/HomepageComponents/NewsletterComponent.vue'
import ConclusionComponent from '../components/HomepageComponents/ConclusionComponent.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'HomepageView',

  components:{
    Header,
    IntroductionComponent,
    OurServicesComponent,
    EventsPreviewComponent,
    OurPartnersComponent,
    TestimonialsComponent,
    FollowUsComponent,
    NewsletterComponent,
    ConclusionComponent,
    Footer
  }
}
</script>

<style scoped lang="scss">
@import "../assets/shared.scss";
@include light-heading1;
@include heading3;
@include heading6;

a {
    text-decoration: none;
}
.homepage-row {
    // width: 100%;
    // height: 100%
    width: 100vw;
    min-height: 90vh;
    background: transparent linear-gradient(180deg, #7E42BE 0%, #10041C 100%) 0% 0% no-repeat padding-box;
    // background-image: url("../assets/img/hero_homepage.svg");
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: center;

    .hero-image-container{
        background-image: url('../assets/img/hero_transparent-04-01.svg');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 50%;
        position: absolute;
        margin-top: 200px;
 
        
    }

    .btn {
        background-color: #E69B5A;
        border-radius: 0;
        border-color: #E69B5A;
        padding: 15px 30px;
        z-index: 1;
        transition: 0.3s;

        &:hover{
            background-color: $accentdarkcolor;
        }
    }

    #homepage-container {
        width: 100%;
        height: 100%;
        padding: 200px 0 300px 0;

        .hero-container {
            display: flex;
            justify-content: center;
            z-index: 1;

            #hero-heading {
                width: 100%;
                height: 25%;
                margin-bottom: 20px;
            }

            #hero-text {
                width: 60%;
                height: 25%;
                // margin-top: 10px;
            }

            #hero-btn {
                margin-top: 40px;

                
            }

            #link-btns {
                width: 80%;
                margin-top: 280px;
                display: flex;
                position: absolute;
                height: 184px;
                align-items: center;
                justify-content: center;
                

                .link-btn {
                    background: #7E42BE 0% 0% no-repeat padding-box;
                    box-shadow: inset 5px 5px 10px #F5F5F51A;
                    border: 1px solid #D9C2F2;
                    opacity: 1;
                    height: 100%;
                    width: 50%;
                    display: flex;
                    padding: 60px;
                    color: #E8E1F0;
                    transition: 0.3s;

                    .link-btn-text {
                        width: 100%;
                        justify-content: flex-start;

                        .link-btn-text-small {
                            text-align: left;
                            font: normal normal normal 18px Poppins;
                            letter-spacing: 0px;
                            // color: #E8E1F0;
                            opacity: 1;
                        }

                        .link-btn-text-big {
                            text-align: left;
                            font: normal normal normal 35px Poppins;
                            letter-spacing: 0px;
                            // color: #E8E1F0;
                            opacity: 1;
                        }
                    }

                    .link-btn-arrow {
                        // width: 100%;
                        display: flex;
                        justify-content: flex-end;
                        background-image: url('../assets/img/angle-right-solid.svg');
                        // img {
                        //     width: 22.87px;
                        //     height: 40px;
                        // }
                        width: 22.87px;
                        height: 40px;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                    }

                    &:hover{
                        background-color: $lightcolor;
                        color: $basecolor;
                        .link-btn-arrow{
                             background-image: url('../assets/img/chevron-right-solid-purple.svg');
                            
                        }
                    }
                }
            }
        }
    }  
}
    
</style>
