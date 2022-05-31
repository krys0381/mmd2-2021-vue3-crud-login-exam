<template>
    <div class="ourservices-component container-fluid">
        <div class="ourservices-row container  g-0">
            <div class="row d-flex justify-content-center">
                 <div class="col-lg-12 col-sm-12 col-12 mb-5">
                        <div class="ourservices-container">
                            <div class="ourservices-text-container d-flex align-items-center justify-content-start">
                                <div id="line"></div>
                                <h4>WHAT WE DO</h4>
                            </div>
                            <div class="services-content-container d-flex justify-content-between flex-wrap">
                                <div class="services-title-container col-lg-6 col-sm-12 col-12 mb-5">
                                    <div class="ourservices-text-container"><h2>OUR SERVICES</h2></div>
                                    <div class="ourservices-text-container"><p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,

                                        </p>
                                    </div>
                                   
                                 </div>
                                  <div class="col-lg-5 col-sm-12 col-12 d-flex flex-wrap" data-aos="fade-left">
                                        <div class="ourservices-services d-flex justify-content-start flex-column col-lg-6 col-sm-12 col-12 pb-5 px-2">
                                            <img src="../../assets/img/light-bulb.png" width="72" height="72" alt="">
                                            <h5>Inspirational Talks</h5>
                                            <p>We partner with inspirational leaders and tech entrepreneurs who have either built own venture or invested in startups. 
                                            <br><br>   
                                            They go on stage to hand out wisdom from the biggest success to various failures. This to tell the true story of building tech companies and to inspire others.</p>
                                        </div>
                                        <div class="ourservices-services  d-flex justify-content-start flex-column col-lg-6 col-sm-12 col-12 pb-5 px-2">
                                            <img src="../../assets/img/market-investment.png" width="72" height="72" alt="">
                                            <h5>Investor Pitches</h5>
                                            <p>We gather tech startups and smart investors to match the two so we can help fuel the next generation of tech startups in the region. 
                                                <br><br>
                                                Startups will be chosen from four parameters such as: Team, Product/service, Market potential and business model.</p>
                                        </div>
                                        <div class="ourservices-services  d-flex justify-content-start flex-column col-lg-6 col-sm-12 col-12 pb-5 px-2">
                                            <img src="../../assets/img/deal.png" width="72" height="72" alt="">
                                            <h5>Co-founder Meet-ups</h5>
                                            <p>It is often hard to find the right co-founder for your startup. We setup a match-making event where commercial founders together with tech development founders can setup the right team from the start.</p>
                                        </div>
                                        <div class="ourservices-services  d-flex justify-content-start flex-column col-lg-6 col-sm-12 col-12 pb-5 px-2">
                                        <img src="../../assets/img/student.png" width="72" height="72" alt="">
                                            <h5>Start-up Pitch for Student Jobs</h5>
                                            <p>A student job at a startup can be super exciting. Therefore we gather curious students from relevant educations and put them in front of startups looking to strengthen their core team.</p>
                                        </div>
                            </div>
                         </div>
                            
                        </div>
                    </div>

                    <!-- <div class="col-lg-6 col-sm-12 col-12">
                        <div class="ourservices-container">
                            <div class="ourservices-services-container d-flex flex-wrap">
                                <div class="ourservices-services">
                                    <div class="services"><img src="../../assets/img/light-bulb.png" alt=""></div>
                                    <div class="services"><h5>Inspirational Talks</h5></div>
                                    <div class="services"><p>We partner with inspirational leaders and tech entrepreneurs who have either built own venture or invested in startups.</p></div>
                                    <div class="services"><p>They go on stage to hand out wisdom from the biggest success to various failures. This to tell the true story of building tech companies and to inspire others.</p></div>
                                </div>
                                <div class="ourservices-services">
                                    <div class="services"><img src="../../assets/img/market-investment.png" alt=""></div>
                                    <div class="services"><h5>Investor Pitches</h5></div>
                                    <div class="services"><p>We gather tech startups and smart investors to match the two so we can help fuel the next generation of tech startups in the region.</p></div>
                                    <div class="services"><p>Startups will be chosen from four parameters such as: Team, Product/service, Market potential and business model.</p></div>
                                </div>
                                <div class="ourservices-services">
                                    <div class="services"><img src="../../assets/img/deal.png" alt=""></div>
                                    <div class="services"><h5>Co-founder Meet-ups</h5></div>
                                    <div class="services"><p>It is often hard to find the right co-founder for your startup. We setup a match-making event where commercial founders together with tech development founders can setup the right team from the start.</p></div>
                                </div>
                                <div class="ourservices-services">
                                    <div class="services"><img src="../../assets/img/student.png" alt=""></div>
                                    <div class="services"><h5>Start-up Pitch for Student Jobs</h5></div>
                                    <div class="services"><p>A student job at a startup can be super exciting. Therefore we gather curious students from relevant educations and put them in front of startups looking to strengthen their core team.</p></div>
                                </div>
                            </div>
                        </div>  
                    </div> -->

                   
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
@include dark-heading2;
@include dark-heading4;
@include dark-heading5;
@include dark-paragraph1;  

.ourservices-component{
     background: $lightcolor;
}

.row {
   padding: 80px 0; 
}

#line {
    height: 0;
    width: 80px;
    background-color: $shadecolor;
    border: 1.5px solid $shadecolor;
    opacity: 1;
    margin-right: 20px;
}

.ourservices-services {
    img {
        margin-bottom: 10px;
    }
}

</style>