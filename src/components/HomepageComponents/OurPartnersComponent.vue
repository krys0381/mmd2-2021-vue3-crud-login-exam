<template>
    <div class="ourpartners-component">
        <div class="ourpartners-row row g-0">

            <div class="col-12 col-sm-6 p-0">
                <div class="ourpartners-container">
                    <div class="ourpartners-text-container">
                        <div id="line"></div>
                        <h4>WHO TRUSTS US</h4>
                    </div>
                    <div class="ourpartners-text-container"><h2>OUR PARTNERS</h2></div>
                </div>
            </div>

            <div class="col-12 col-sm-6 p-0">
                <div id="extra">
                    <div class="ourpartners-container">
                        <div class="ourpartners-text-container"><p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</p></div>
                    </div>
                </div>
            </div>

            <div class="col-12 p-0">
                <div class="ourpartners-container">
                    <div class="ourpartners-table">
                        <div class="ourpartners-table-item-1"><img src="../../assets/img/aalborg.png" alt=""></div>
                        <div class="ourpartners-table-item-1"><img src="../../assets/img/innovationsfonden.png" alt=""></div>
                        <div class="ourpartners-table-item-1"><img src="../../assets/img/aalborg.png" alt=""></div>
                        <div id="last-child" class="ourpartners-table-item-1"><img src="../../assets/img/innovationsfonden.png" alt=""></div>
                        <div class="ourpartners-table-item-2"><img src="../../assets/img/aalborg.png" alt=""></div>
                        <div class="ourpartners-table-item-2"><img src="../../assets/img/innovationsfonden.png" alt=""></div>
                        <div class="ourpartners-table-item-2"><img src="../../assets/img/aalborg.png" alt=""></div>
                        <div id="last-child" class="ourpartners-table-item-2"><img src="../../assets/img/innovationsfonden.png" alt=""></div>
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

.ourpartners-row {
    width: 100%;
    height: 100%;
    background: $backgroundcolor 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 80px 0;
}

.ourpartners-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // Text

    .ourpartners-text-container {
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

    // Partners

    .ourpartners-table {
        width: 75%;
        background-color: $backgroundcolor;
        display: flex;
        flex-wrap: wrap;

        .ourpartners-table-item-1 {
            width: 25%;
            border-right: 3px solid $basecolor;
            border-bottom: 3px solid $basecolor;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        .ourpartners-table-item-2 {
            width: 25%;
            border-right: 3px solid $basecolor;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
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

#last-child {
    border-right: none;
}
</style>