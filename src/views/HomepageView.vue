<template>
    <div class="homepage">
        <HeaderComponent />
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
                            <button type="button" class="btn btn-primary btn-lg">JOIN OUR EVENT NOW!</button>
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
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import IntroductionComponent from '../components/HomepageComponents/IntroductionComponent.vue'

export default {
  name: 'HomepageView',

  components:{
    HeaderComponent,
    IntroductionComponent
  }
}
</script>

<style scoped lang="scss">
@import "../assets/shared.scss";
@include heading1;
@include heading3;

.homepage-row {
    width: 100%;
    height: 100%;
    background: transparent linear-gradient(180deg, #7E42BE 0%, #10041C 100%) 0% 0% no-repeat padding-box;

    #homepage-container {
        width: 100%;
        height: 100%;

        .hero-container {
            display: flex;
            justify-content: center;

            #hero-heading {
                width: 50%;
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
                height: 100%;
                margin-top: 10px;
                display: flex;

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
                        justify-content: start;

                        #link-btn-text-small {
                            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);
                            letter-spacing: var(--unnamed-character-spacing-0);
                            text-align: left;
                            font: normal normal normal 12px Poppins;
                            letter-spacing: 0px;
                            color: #E8E1F0;
                            opacity: 1;
                        }

                        #link-btn-text-big {
                            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 40px/60px var(--unnamed-font-family-poppins);
                            letter-spacing: var(--unnamed-character-spacing-0);
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
                        justify-content: end;
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
