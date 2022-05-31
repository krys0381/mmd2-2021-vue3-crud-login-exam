<template>
    <div class="newsletter-component container-fluid overflow-hidden">
        <div class="newsletter-row container">
            <div class="row d-flex flex-column align-items-start justify-content-start">
                    <div class="d-flex justify-content-start align-items-center">
                            <div id="line"></div>
                            <h4>HOW TO GET UPDATED</h4>
                    </div>
                    <div class="d-flex flex-wrap col-lg-12 col-sm-12 col-12 mb-5 justify-content-between">
                        <div class="newsletter-content-container col-lg-5 col-sm-12 col-12" data-aos="fade-right">
                                <h2>NEWSLETTER</h2>
                                <div><p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id,</p></div>
                        </div>
                        <form action="" class="form col-lg-6 col-sm-12 col-12 align-items-end" ref="form" @submit.prevent="sendMail">
                            <div class="mb-3 d-flex flex-column align-items-start">
                                <label for="nameInput" class="form-label">Name</label>
                                <input name="from_name" type="text" class="form-control" id="nameInput" placeholder="" :value="inputFieldReset" required>
                            </div>
                            <div class="mb-3 d-flex flex-column align-items-start">
                                <label for="emailInput" class="form-label">Email</label>
                                <input name="email" type="email" class="form-control" id="emailInput" placeholder="" :value="inputFieldReset" required>
                            </div>
                            <button type="submit" class="btn btn-primary col-12 col-xl-12 btn-lg mt-3" name="send">SUBSCRIBE</button>
                        </form>
                       
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    delay: 300
});

import emailjs from 'emailjs-com'
import {ref} from 'vue';

export default {
    setup() {
        const form = ref(null);
        const inputFieldReset = ref(null);

        const sendMail = () => {
            emailjs.sendForm('service_5phzrh4', 'template_ip0kraj', form.value, 'Lp2I8LyFBAcVuc0oT')
            .then(() => {
                alert('Message sent!')
                inputFieldReset.value = " ";
            }, (error) => {
                alert('Message not sent', error);
            });
        }

        return {
            form,
            inputFieldReset,
            sendMail
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../assets/shared.scss";
@include dark-heading2;
@include dark-heading4;
@include dark-heading5;
@include dark-paragraph1;  

.newsletter-component {
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