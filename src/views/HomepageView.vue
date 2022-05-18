<template>
    <div class="homepage">
        <HeaderComponent />
        <div class="homepage-row row g-0">
            <div class="col-12 p-0">

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

.homepage-row {
    width: 100%;
    height: 100%;
    background: transparent linear-gradient(180deg, #7E42BE 0%, #10041C 100%) 0% 0% no-repeat padding-box;
    mix-blend-mode: darken;
    opacity: 1;

    .hero-container {
        display: flex;
        justify-content: center;

        #hero-heading {
            width: 50%;
            height: 25%;
            margin-bottom: 10px;

            h1 {
                font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-88)/114.4px var(--unnamed-font-family-poppins);
                letter-spacing: var(--unnamed-character-spacing-0);
                text-align: center;
                font: normal normal bold 50px Poppins;
                letter-spacing: 0px;
                color: #E8E1F0;
                opacity: 1;
            }
        }

        #hero-text {
            width: 50%;
            height: 25%;
            margin-top: 10px;

            h3 {
                font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 28px/57.2px var(--unnamed-font-family-poppins);
                letter-spacing: var(--unnamed-character-spacing-0);
                text-align: center;
                font: normal normal normal 20px Poppins;
                letter-spacing: 0px;
                color: #E8E1F0;
                opacity: 1;
            }
        }

        #hero-btn {
            .btn {
                background-color: #E69B5A;
                border-radius: 0;
                border-color: #E69B5A;
            }
        }
    }   
}
    
</style>
