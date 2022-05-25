<template>
    <div class="homepage">
        <Header />
        <div class="homepage-row row g-0">
            <div class="col-12 p-0">
                <div id="homepage-container">

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

                    <div class="hero-container">
                        <div id="hero-btn">
                            <button type="button" class="btn btn-primary btn-lg"><h6>JOIN OUR EVENT NOW!</h6></button>
                        </div>
                    </div>

                    <div class="hero-container">
                        <div id="link-btns">
                            <div class="link-btn">
                                <div class="link-btn-text">
                                    <div id="link-btn-text-small">LOOKING FOR FUNDING?</div>
                                    <div id="link-btn-text-big">Start-ups</div>
                                </div>
                                <div class="link-btn-arrow">
                                    <img src="../assets/img/angle-right-solid.svg" alt="">
                                </div>
                            </div>

                            <div class="link-btn">
                                <div class="link-btn-text">
                                    <div id="link-btn-text-small">READY TO INVEST IN START-UPS?</div>
                                    <div id="link-btn-text-big">Investors</div>
                                </div>
                                <div class="link-btn-arrow">
                                    <img src="../assets/img/angle-right-solid.svg" alt="">
                                </div>
                            </div>
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

.homepage-row {
    width: 100%;
    height: 100%;
    // background: transparent linear-gradient(180deg, #7E42BE 0%, #10041C 100%) 0% 0% no-repeat padding-box;
    background-image: url("../assets/img/hero_homepage.svg");
    background-size: cover;
    background-repeat: no-repeat;
    
    #homepage-container {
        width: 100%;
        height: 100%;
        padding: 50px 0 300px 0;

        .hero-container {
            display: flex;
            justify-content: center;

            #hero-heading {
                width: 75%;
                height: 25%;
                margin-bottom: 10px;
            }

            #hero-text {
                width: 50%;
                height: 25%;
                margin-top: 10px;
            }

            #hero-btn {
                margin-top: 20px;

                .btn {
                    background-color: #E69B5A;
                    border-radius: 0;
                    border-color: #E69B5A;
                    padding: 15px;
                }
            }

            #link-btns {
                width: 70%;
                margin-top: 250px;
                display: flex;
                position: absolute;

                .link-btn {
                    background: #7E42BE 0% 0% no-repeat padding-box;
                    box-shadow: inset 5px 5px 10px #F5F5F51A;
                    border: 1px solid #D9C2F2;
                    opacity: 1;
                    height: 100%;
                    width: 50%;
                    display: flex;
                    padding: 20px;

                    .link-btn-text {
                        width: 100%;
                        justify-content: flex-start;

                        #link-btn-text-small {
                            text-align: left;
                            font: normal normal normal 12px Poppins;
                            letter-spacing: 0px;
                            color: #E8E1F0;
                            opacity: 1;
                        }

                        #link-btn-text-big {
                            text-align: left;
                            font: normal normal normal 35px Poppins;
                            letter-spacing: 0px;
                            color: #E8E1F0;
                            opacity: 1;
                        }
                    }

                    .link-btn-arrow {
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                        img {
                            width: 15%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }  
}
    
</style>
