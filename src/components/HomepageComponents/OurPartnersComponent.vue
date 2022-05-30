<template>
    <div class="ourpartners-component container-fluid overflow-hidden">
        <div class="ourpartners-row container">
            <div class="row">
                <div class="d-flex flex-column justify-content-start mb-5">
                        <div class="d-flex align-items-center">
                            <div id="line"></div>
                            <h4>WHO TRUSTS US</h4>
                        </div>
                        <div class="d-flex align-items-center justify-content-between col-lg-12 col-12 flex-wrap">
                            <h2>OUR PARTNERS</h2>
                            <div class="col-lg-5 col-sm-12 col-12"><p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</p>
                            </div>
                        </div>
                </div>

                <div class="partners-logo-container d-flex flex-wrap justify-content-center align-items-center ">
                   <div class="logo-container logo-1">  </div>
                   <div class="logo-container logo-2">  </div>
                   <div class="logo-container logo-3">  </div>
                   <div class="logo-container logo-4">  </div>
                   <div class="logo-container logo-5">  </div>
                   <div class="logo-container logo-6">  </div>
                   <div class="logo-container logo-7">  </div>
                   <div class="logo-container logo-8">  </div>
                </div>
                    <!-- <div class="col-12 p-0">
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
                    </div> -->
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

// .ourpartners-row {
//     width: 100%;
//     height: 100%;
//     background: $backgroundcolor 0% 0% no-repeat padding-box;
//     opacity: 1;
//     padding: 80px 0;
// }

.ourpartners-component {
    background: $backgroundcolor;
}

.row{
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


.logo-container{
    height: 184px;
    width: 277px;
}

.logo-1{
    background-image: url('../../assets/img/aalborg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom: 2px solid $basecolor;
    border-right: 2px solid $basecolor;
}

.logo-2{
    background-image: url('../../assets/img/innovationsfonden.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom: 2px solid $basecolor;
    border-right: 2px solid $basecolor;
}

.logo-3{
    background-image: url('../../assets/img/aalborg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom: 2px solid $basecolor;
    border-right: 2px solid $basecolor;
}

.logo-4{
    background-image: url('../../assets/img/innovationsfonden.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom: 2px solid $basecolor;
}

.logo-5{
    background-image: url('../../assets/img/aalborg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-right: 2px solid $basecolor;
}

.logo-6{
    background-image: url('../../assets/img/innovationsfonden.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-right: 2px solid $basecolor;
}

.logo-7{
    background-image: url('../../assets/img/aalborg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-right: 2px solid $basecolor;
}

.logo-8{
    background-image: url('../../assets/img/innovationsfonden.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
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

// Media queries

// `md` applies to small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { 
        .logo-1{
        border-right: none;
    }

    .logo-2{
        border-right: none;
    }

    .logo-3{
        border-right: none;
    }

    .logo-5{
        border-right: none;
        border-bottom: 2px solid $basecolor;
    }

    .logo-6{
        border-right: none;
        border-bottom: 2px solid $basecolor;
    }

    .logo-7{
        border-right: none;
        border-bottom: 2px solid $basecolor;
    }
}

// `lg` applies to medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { 
    .logo-2{
        border-right: none;
    }

    .logo-5{
        border-bottom: 2px solid $basecolor;
    }

    .logo-6{
        border-right: none;
        border-bottom: 2px solid $basecolor;
    }
}

</style>