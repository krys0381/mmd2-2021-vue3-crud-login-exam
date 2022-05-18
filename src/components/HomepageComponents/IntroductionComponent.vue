<template>
    <div class="introduction-component">
        <div class="introduction-row row g-0">

            <div class="col-12 col-sm-6 p-0">
                <div class="introduction-container">
                    <div class="introduction-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/OS8taasZl8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-6 p-0">
                <div class="introduction-container">
                    <div class="introduction-text-container">WHO WE ARE</div>
                    <div class="introduction-text-container">OUR STORY</div>
                    <div class="introduction-text-container">Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</div>
                    <div class="introduction-text-container"></div>
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

.introduction-row {
    width: 100%;
    height: 100%;
    background: #E8E1F0 0% 0% no-repeat padding-box;
    opacity: 1; 
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
        width: 100%;
        height: 100%;
    }
}
</style>