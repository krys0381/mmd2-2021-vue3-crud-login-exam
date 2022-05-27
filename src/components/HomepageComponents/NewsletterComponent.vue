<template>
    <div class="newsletter-component container-fluid overflow-hidden">
        <div class="newsletter-row container">
            <div class="row d-flex flex-column align-items-start justify-content-start">
                    <div class="d-flex justify-content-start align-items-center">
                            <div id="line"></div>
                            <h4>HOW TO GET UPDATED</h4>
                    </div>
                    <div class="d-flex flex-wrap col-lg-12 col-sm-12 col-12 mb-5 justify-content-between">
                        <div class="newsletter-content-container col-lg-5 col-sm-12 col-12 ">
                                <h2>NEWSLETTER</h2>
                                <div><p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</p></div>
                        </div>
                        <form action="" class="form-container col-lg-6 col-sm-12 col-12 align-items-end">
                            <div class="mb-3 d-flex flex-column align-items-start">
                                <label for="nameInput" class="form-label">Name</label>
                                <input type="text" class="form-control" id="nameInput" placeholder="" required>
                            </div>
                            <div class="mb-3 d-flex flex-column align-items-start">
                                <label for="emailInput" class="form-label">Email</label>
                                <input type="email" class="form-control" id="emailInput" placeholder="" required>
                            </div>
                            <button type="button" class="btn btn-primary col-12 col-xl-12 btn-lg mt-3">SUBSCRIBE</button>
                        </form>
                       
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

// .newsletter-row {
//     width: 100%;
//     height: 100%;
//     background: $backgroundcolor 0% 0% no-repeat padding-box;
//     opacity: 1;
//     padding: 80px 0;
// }

.newsletter-component {
    background: $backgroundcolor;
}

.form-container{
    // background-color: red;
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

.btn {
        background-color: #E69B5A;
        border-radius: 0;
        border-color: #E69B5A;
        padding: 15px 30px;
        transition: 0.3s;

        &:hover{
            background-color: $accentdarkcolor;
        }
}
.form-control{
    border-radius: 0;
    height: 64px;
    background-color: $whitecolor;
    border-color: $basecolor;
}

.form-label{
    color: $shadecolor;
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

       
    }
}
</style>