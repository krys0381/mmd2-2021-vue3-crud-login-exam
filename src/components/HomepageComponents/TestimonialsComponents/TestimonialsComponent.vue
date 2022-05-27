<template>
    <div class="testimonials-component container-fluid overflow-hidden">
        <div class="testimonials-row container">

            <div class="row">

                <div class="testimonials-text-container d-flex align-items-center">
                    <div id="line"></div>
                    <h4>WHAT THEY SAY ABOUT US</h4>
                </div>
                <div class="testimonials-text-container d-flex align-items-start justify-content-between col-lg-12 col-sm-12 col-12  flex-wrap mb-5">
                    <h2 class="col-lg-6 col-sm-12 col-12">TESTIMONIALS</h2>
                    <div class="testimonials-text-container col-lg-5 col-sm-12 col-12"><p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</p>
                </div>
            </div>

            <!-- Quotes -->

            <div class="col-12 p-0">
                <div class="testimonials-container">

                    <div 
                    class="item-container col-lg-8 col-sm-12 col-12"
                    v-for="{ id, quote, author, company } in testimonials" :key="id"
                    >
                        <div class="item1">
                            <div class="quote-left-container">
                                <div class="quote-left">
                                    <img src="../../../assets/img/quote-left.svg" alt="">
                                </div>
                            </div>
                            <div class="quote-text">
                                {{ quote }}
                            </div>
                            <div class="quote-right-container">
                                <div class="quote-right">
                                    <img src="../../../assets/img/quote-right.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="item2">
                            <div class="quote-author">{{ author }}</div>
                            <div class="quote-company">{{ company }}</div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useLoadTestimonials } from '../../../firebase.js'

export default {
  setup() {
    const testimonials = useLoadTestimonials()
    return { testimonials }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/shared.scss";
@include dark-heading2;
@include dark-heading4;
@include dark-paragraph1;

.testimonials-component{
    background: $lightcolor;
}

.row{
    padding: 80px 0;
}
// .testimonials-row {
//     width: 100%;
//     height: 100%;
//     background: $lightcolor 0% 0% no-repeat padding-box;
//     opacity: 1;
//     padding: 80px 0;
// }

 #line {
            height: 0;
            width: 80px;
            background-color: $shadecolor;
            border: 1.5px solid $shadecolor;
            opacity: 1;
            margin-right: 20px;
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

       
    }

    // Quotes

    .item-container {
        // width: 60%;
        background: #10041C 0% 0% no-repeat padding-box;
        padding: 50px 0;
        margin: 20px 0;

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
                align-items: flex-end;

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

// Extra

#extra {
    width: 100%;
    height: 100%;
    display: flex;
}

</style>