<template>
    <div class="homepage-out-container overflow-hidden">
        <Header />
          <HomeHeroComponent />
      
        <div class="container-fluid "> 
            <div class="container ">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="hero-container d-none d-xl-flex align-items-center justify-content-center">
                        <div id="link-btns">
                            <a href="" class="link-btn d-flex align-items-center">
                            
                                <div class="link-btn-text">
                                    <div class="link-btn-text-small">LOOKING FOR FUNDING?</div>
                                    <div class="link-btn-text-big mt-4">Start-ups</div>
                                </div>
                                <div class="link-btn-arrow">
                                   
                                </div>
                            </a>
                            <a href="" class="link-btn d-flex align-items-center">
                                <div class="link-btn-text">
                                    <div class="link-btn-text-small">READY TO INVEST IN START-UPS?</div>
                                    <div class="link-btn-text-big mt-4">Investors</div>
                                </div>
                                <div class="link-btn-arrow">
                                   
                                </div>
                            </a>
                        </div>
                    </div>
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
import HomeHeroComponent from '../components/HomepageComponents/HomeHeroComponent.vue'
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
    HomeHeroComponent,
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
.homepage-out-container{
    position: relative;
}

 .hero-image-container{
        background-image: url('../assets/img/hero_transparent-5-01.svg');
        background-size: cover;
        background-position: center;
        width: 100vw;
        height: 60vh;
        position: absolute;
        
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

  #link-btns {
                width: 80%;
                margin-top: 0px;
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

                            opacity: 1;
                        }

                        .link-btn-text-big {
                            text-align: left;
                            font: normal normal normal 35px Poppins;
                            letter-spacing: 0px;

                            opacity: 1;
                        }
                    }

                    .link-btn-arrow {

                        display: flex;
                        justify-content: flex-end;
                        background-image: url('../assets/img/angle-right-solid.svg');
                      
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
.homepage-row {
    position: relative;
    width: 100vw;
    height: 90vh;
    background: transparent linear-gradient(180deg, #7E42BE 0%, #10041C 100%) 0% 0% no-repeat padding-box;

   

    .hero-content-container{
         z-index: 1;
    }

    #homepage-container {
        width: 100vw;
        height: 100vh;

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

            }

            #hero-btn {
                margin-top: 40px;

                
            }
        }
    }  
}
    
</style>
