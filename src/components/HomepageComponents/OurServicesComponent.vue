<template>
    <div class="ourservices-component">
        <div class="ourservices-row row g-0">

            <div class="col-12 col-sm-6 p-0">
                <div class="ourservices-container">
                    <div class="ourservices-text-container">
                        <div id="line"></div>
                        <h4>WHAT WE DO</h4>
                    </div>
                    <div class="ourservices-text-container"><h2>OUR SERVICES</h2></div>
                    <div class="ourservices-text-container"><p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</p></div>
                </div>
            </div>

            <div class="col-12 col-sm-6 p-0">
                <div class="ourservices-container">
                    <div class="ourservices-services-container">
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
                    </div>

                    <div class="ourservices-services-container">
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
@include dark-heading5;
@include dark-paragraph1;  

.ourservices-row {
    width: 100%;
    height: 100%;
    background: $lightcolor 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 30px 0;
}

.ourservices-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // Text

    .ourservices-text-container {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: left;
        margin: 20px 0;

        #line {
            height: 0;
            width: 80px;
            background-color: $shadecolor;
            border: 1.5px solid $shadecolor;
            opacity: 1;
            margin-right: 20px;
        }
    }

    // Services

    .ourservices-services-container {
        display: flex;

        .ourservices-services {
            .services {
                width: 75%;
                display: flex;
                align-items: center;
                text-align: left;
                margin: 20px 0;

                img {
                    width: 20%;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>