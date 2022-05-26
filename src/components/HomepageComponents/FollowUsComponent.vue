<template>
    <div class="followus-component">
        <div class="followus-row row g-0">

            <div class="col-12 col-sm-6 p-0">
                <div class="followus-container">
                    <div class="followus-text-container">
                        <div id="line"></div>
                        <h4>WHAT'S HAPPENING</h4>
                    </div>
                    <div class="followus-text-container"><h2>FOLLOW US</h2></div>
                </div>
            </div>

            <div class="col-12 col-sm-6 p-0"></div>

            <div class="col-12 p-0">
                <div class="followus-container">
                    <div class="followus-gallery-container">
                        <div class="followus-gallery"><img src="../../assets/img/crowd-sportsman.jpg" alt=""></div>
                        <div class="followus-gallery"><img src="../../assets/img/diverse-business.jpg" alt=""></div>
                        <div class="followus-gallery"><img src="../../assets/img/female-speaker.jpg" alt=""></div>
                        <div class="followus-gallery"><img src="../../assets/img/male-speaker.jpg" alt=""></div>
                    </div>
                </div>
            </div>

            <div class="col-12 p-0">
                <div class="followus-container">
                    <div class="followus-btn-container">
                        <button type="button" class="btn btn-primary btn-lg">VIEW MORE</button>
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
@include light-heading2;
@include light-heading4;
@include light-paragraph1;

.followus-row {
    width: 100%;
    height: 100%;
    background: $shadecolor 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 80px 0;
}

.followus-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // Text

    .followus-text-container {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: left;
        margin: 20px 0;

        #line {
            height: 0;
            width: 80px;
            background-color: $backgroundcolor;
            border: 1.5px solid $backgroundcolor;
            opacity: 1;
            margin-right: 20px;
        }
    }

    // Gallery

    .followus-gallery-container {
        width: 95%;
        background-color: $shadecolor;
        display: flex;

        .followus-gallery {
            width: 50%;
            
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }

    .followus-btn-container{
        margin-top: 30px;
        
        .btn {
            background-color: $shadecolor;
            border-radius: 0;
            border-color: $backgroundcolor;
            color: $backgroundcolor;
            padding: 15px;
        }
    }
}


</style>