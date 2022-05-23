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

            <div class="col-12 p-0">
                <div class="testimonials-container">
                    
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
}

#extra {
    width: 100%;
    height: 100%;
    display: flex;
}

</style>