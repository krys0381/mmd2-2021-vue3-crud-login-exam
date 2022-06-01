<template>
    <div class="eventspreview-component container-fluid">
        <div class="eventspreview-row container">
            <div class="row d-flex justify-content-between align-items-start">

                <div class="col-lg-6 col-sm-12 col-12 eventspreview-image mb-5">
                           
                 </div>

                <div class="col-lg-5 col-sm-12 col-12  d-flex flex-column align-items-start justify-content-center ">
                    <div class="d-flex align-items-center justify-content-start">
                        <div id="line"></div>
                        <h4>WHAT'S HAPPENING</h4>
                    </div>
                    <div class="">
                        <h2>THE EVENTS</h2></div>

                    <div 
                    class=" d-flex flex-column align-items-start justify-content-center col-lg-12 col-sm-12 col-12" @click="$router.push('events')"
                    v-for="{ id, date, name, location } in events" :key="id"
                    >
                        <div class="event-line ">

                        </div>
                        <div class="event-details-container d-flex justify-content-between align-items-center pb-3 col-lg-12 col-sm-12 col-12 pt-2 px-2">
                                <div class="d-flex flex-column">
                                    <h5>{{ name }}</h5>
                                    <p>{{ location }}</p>
                                </div>
                                <div class="date">{{ date }}</div>   
                        </div>
                        
                    </div>
                    <div class="event-line mb-5">

                    </div>

                    <div class="eventspreview-text-container col-lg-12 col-sm-12 col-12 d-flex justify-content-start align-item-center">
                        <button type="button" class="btn btn-primary btn-lg col-lg-6 col-sm-12 col-12" @click="$router.push('events')" data-aos="zoom-in">VIEW ALL</button>
                    </div>
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

import { useLoadEvents } from '../../firebase.js'

export default {
  setup() {
    const events = useLoadEvents()

    return { events }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/shared.scss";
@include light-heading2;
@include light-heading4;
@include light-heading5;
@include date;
@include light-paragraph1;

.eventspreview-component{
    background: $shadecolor;
}

.row{
    padding: 80px 0;
}

.event-details-container{
    transition: 0.3s;
    &:hover{
        background-color: $basecolor;
        cursor: pointer;
    }
    
}

.event-line{
            height: 0;
            width: 100%;
            background-color: $backgroundcolor;
            border: 1.5px solid $backgroundcolor;
            opacity: 1;
            margin-right: 20px;
        }

  #line {
            height: 0;
            width: 80px;
            background-color: $backgroundcolor;
            border: 1.5px solid $backgroundcolor;
            opacity: 1;
            margin-right: 20px;
        }


.eventspreview-image{
        background-image: url('../../assets/img/eventspreview.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: none;
        min-height: 656px;
}

.btn {
    background-color: $shadecolor;
    border-radius: 0;
    border-color: $backgroundcolor;
    color: $backgroundcolor;
    padding: 15px 30px;
    transition: 0.3s;
    &:hover{
        background-color: $basecolor;
    }
}

.eventspreview-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .eventspreview-list-container {
        // width: 85%;
        background-color: $shadecolor;

        .eventspreview-list-item {
            display: flex;
            border-top: 3px solid $lightcolor;

            .eventspreview-list-text {
                width: 60%;
                display: flex;
                align-items: left;
                justify-content: center;
                flex-direction: column;
                text-align: left;
                margin: 10px 0;
            }

            .eventspreview-list-date {
                width: 40%;
                display: flex;
                justify-content: right;
                align-items: center;
            }
        }
    }


}
</style>