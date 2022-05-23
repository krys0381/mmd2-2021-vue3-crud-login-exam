<template>
    <div class="newsletter-component">
        <div class="newsletter-row row g-0">

            <div class="col-12 col-sm-6 p-0">
                <div class="newsletter-container">
                    <div class="newsletter-text-container">
                        <div id="line"></div>
                        <h4>HOW TO GET UPDATED</h4>
                    </div>
                    <div class="newsletter-text-container"><h2>NEWSLETTER</h2></div>
                    <div class="newsletter-text-container"><p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</p></div>
                </div>
            </div>

            <div class="col-12 col-sm-6 p-0">
                <div class="newsletter-container">
                    
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

.newsletter-row {
    width: 100%;
    height: 100%;
    background: $backgroundcolor 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 80px 0;
}

.newsletter-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // Text

    .newsletter-text-container {
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
</style>