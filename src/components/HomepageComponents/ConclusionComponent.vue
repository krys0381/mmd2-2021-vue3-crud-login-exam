<template>
    <div class="conclusion-component">
        <div class="conclusion-row row g-0">

            <div class="col-12 p-0">
                <div id="conclusion-container">
                    <div class="conclusion-text-container">
                        <div id="conclusion-heading">
                            <h1>Interested in collaboration?</h1>
                        </div>

                        <div id="conclusion-btn">
                            <button type="button" class="btn btn-primary btn-lg"><h6>LET'S TALK</h6></button>
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
@import "../../assets/shared.scss";
@include dark-heading1;
@include heading6;

.conclusion-row {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/collab_bg.svg");
    background-size: cover;
    background-repeat: no-repeat;
    border: none;

    #conclusion-container {
        width: 100%;
        height: 100%;
        padding: 75px 0;

        .conclusion-text-container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

            #conclusion-heading {
                width: 40%;
                margin-bottom: 10px;
            }

            #conclusion-btn {
                margin-top: 20px;

                .btn {
                    background-color: #E69B5A;
                    border-radius: 0;
                    border-color: #E69B5A;
                    padding: 15px 50px;
                }
            }
        }
    }  
}

</style>