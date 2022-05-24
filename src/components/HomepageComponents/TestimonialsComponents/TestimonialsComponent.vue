<template>
    <div class="testimonials-component">
        <div class="testimonials-row row g-0">

            <div class="col-12 col-sm-6 p-0">
                <div class="testimonials-container">
                    <div class="testimonials-text-container">
                        <div id="line"></div>
                        <h4>WHAT THEY SAY ABOUT US</h4>
                    </div>
                    <div class="testimonials-text-container"><h2>TESTIMONIALS</h2></div>
                </div>
            </div>

            <div class="col-12 col-sm-6 p-0">
                <div id="extra">
                    <div class="testimonials-container">
                        <div class="testimonials-text-container"><p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</p></div>
                    </div>
                </div>
            </div>

            <!-- Quotes -->

            <div class="col-12 p-0">
                <div class="testimonials-container">

                    <div class="item-container active">
                        <div class="item1">
                            <div class="quote-left-container">
                                <div class="quote-left">
                                    <img src="../../../assets/img/quote-left.svg" alt="">
                                </div>
                            </div>
                            <div class="quote-text">
                                I owe the community a BIG thank you as the first event really kick-started my own business with a lot of contacts and positive inspiration. Have been really busy since we met at the Inspirational Talk #1.
                            </div>
                            <div class="quote-right-container">
                                <div class="quote-right">
                                    <img src="../../../assets/img/quote-right.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="item2">
                            <div class="quote-author">Thomas Andersen</div>
                            <div class="quote-company">Founder / CEO of BitMind</div>
                        </div>
                    </div>

                    <div class="item-container">
                        <div class="item1">
                            <div class="quote-left-container">
                                <div class="quote-left">
                                    <img src="../../../assets/img/quote-left.svg" alt="">
                                </div>
                            </div>
                            <div class="quote-text">
                                I owe the community a BIG thank you as the first event really kick-started my own business with a lot of contacts and positive inspiration. Have been really busy since we met at the Inspirational Talk #1.
                            </div>
                            <div class="quote-right-container">
                                <div class="quote-right">
                                    <img src="../../../assets/img/quote-right.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="item2">
                            <div class="quote-author">Thomas Andersen</div>
                            <div class="quote-company">Founder / CEO of BitMind</div>
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
@import "../../../assets/shared.scss";
@include dark-heading2;
@include dark-heading4;
@include dark-paragraph1;

.testimonials-row {
    width: 100%;
    height: 100%;
    background: $lightcolor 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 80px 0;
}

.testimonials-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // Text

    .testimonials-text-container {
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

    .item-container {
    width: 60%;
    background: #10041C 0% 0% no-repeat padding-box;
    padding: 50px 0;
    margin: 50px 0;

        .item1 {
            width: 100%;
            display: flex;
            margin-bottom: 15px;

            .quote-left-container {
                width: 25%;
                display: flex;
                justify-content: center;

                .quote-left {
                    width: 35%;

                    img {
                        width: 100%;
                        object-fit: cover; 
                    } 
                }
            }

            .quote-text {
                width: 50%;
                text-align: left;
                font: normal normal normal 16px Poppins;
                letter-spacing: 0px;
                color: $backgroundcolor;
            }

            .quote-right-container {
                width: 25%;
                display: flex;
                justify-content: center;
                align-items: end;

                .quote-right {
                    width: 35%;

                    img {
                        width: 100%;
                        object-fit: cover; 
                    } 
                }
            }
        }

        .item2 {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 15px;

            .quote-author {
                width: 50%;
                text-align: left;
                font: normal normal bold 16px Poppins;
                letter-spacing: 0px;
                color: $backgroundcolor;
            }

            .quote-company {
                width: 50%;
                text-align: left;
                font: normal normal normal 16px Poppins;
                letter-spacing: 0px;
                color: $backgroundcolor;
            }
        }
    }
}  

// Quote




#extra {
    width: 100%;
    height: 100%;
    display: flex;
}

</style>