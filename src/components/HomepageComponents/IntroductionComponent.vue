<template>
    <div class="introduction-component">
        <div class="introduction-row row g-0">

            <div class="col-12 col-sm-6 p-0">
                <div id="extra">
                    <div class="introduction-container">
                        <div class="introduction-video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/OS8taasZl8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-6 p-0">
                <div class="introduction-container">
                    <div class="introduction-text-container">
                        <div id="line"></div>
                        <h4>WHO WE ARE</h4>
                    </div>
                    <div class="introduction-text-container"><h2>OUR STORY</h2></div>
                    <div class="introduction-text-container"><p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</p></div>
                    <div class="introduction-text-container"><p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</p></div>
                    <div class="introduction-text-container">
                        <button type="button" class="btn btn-primary btn-lg">READ MORE</button>
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
@include dark-paragraph1;

.introduction-row {
    width: 100%;
    height: 100%;
    background: $backgroundcolor 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 30px 0;
}

.introduction-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // Video

    .introduction-video {
        width: 100%;
        height: 100%;
        padding: 30px;
    }

    // Text

    .introduction-text-container {
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

        .btn {
            background-color: $whitecolor;
            border-radius: 0;
            border-color: $whitecolor;
            color: $basecolor;
            padding: 15px;
        }
    }
}

#extra {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>