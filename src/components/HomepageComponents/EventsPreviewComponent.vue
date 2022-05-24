<template>
    <div class="eventspreview-component">
        <div class="eventspreview-row row g-0">

            <div class="col-12 col-sm-6 p-0">
                <div id="extra">
                    <div class="eventspreview-container">
                        <div id="eventspreview-picture">
                            <img src="../../assets/img/eventspreview.jpeg" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-6 p-0">
                <div class="eventspreview-container">
                    <div class="eventspreview-text-container">
                        <div id="line"></div>
                        <h4>WHAT'S HAPPENING</h4>
                    </div>
                    <div class="eventspreview-text-container"><h2>THE EVENTS</h2></div>

                    <div 
                    class="eventspreview-list-container" 
                    v-for="{ id, date, name, location } in events" :key="id"
                    >
                        <div class="eventspreview-list-item">
                            <div class="eventspreview-list-text">
                                <h5>{{ name }}</h5>
                                <p>{{ location }}</p>
                            </div>

                            <div class="eventspreview-list-date">
                                <div class="date">{{ date }}</div>
                            </div>
                        </div>
                        <!-- <div class="eventspreview-list-item">
                            <div class="eventspreview-list-text">
                                <h5>Quam etiam tincidunt</h5>
                                <p>Vestibulum metus</p>
                            </div>

                            <div class="eventspreview-list-date">
                                <div class="date">04 JUN</div>
                            </div>
                        </div>
                        <div class="eventspreview-list-item">
                            <div class="eventspreview-list-text">
                                <h5>Lacus nulla nisl</h5>
                                <p>Tincidunt orci rhoncus</p>
                            </div>

                            <div class="eventspreview-list-date">
                                <div class="date">21 JUL</div>
                            </div>
                        </div>
                        <div id="last-child" class="eventspreview-list-item">
                            <div class="eventspreview-list-text">
                                <h5>Lacus nulla nisl</h5>
                                <p>Tincidunt orci rhoncus</p>
                            </div>

                            <div class="eventspreview-list-date">
                                <div class="date">30 AUG</div>
                            </div>
                        </div> -->
                    </div>

                    <div class="eventspreview-text-container">
                        <button type="button" class="btn btn-primary btn-lg">VIEW ALL</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
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

.eventspreview-row {
    width: 100%;
    height: 100%;
    background: $shadecolor 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 80px 0;
}

.eventspreview-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // Picture

    #eventspreview-picture {
        width: 100%;
        height: 100%;

        img {
            width: 90%;
            height: 90%;
            object-fit: cover;
        }
    }

    // Text

    .eventspreview-text-container {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: left;
        margin: 20px 0;
        color: $backgroundcolor;

        #line {
            height: 0;
            width: 80px;
            background-color: $backgroundcolor;
            border: 1.5px solid $backgroundcolor;
            opacity: 1;
            margin-right: 20px;
        }

        .btn {
            background-color: $shadecolor;
            border-radius: 0;
            border-color: $backgroundcolor;
            color: $backgroundcolor;
            padding: 15px;
        }
    }

    .eventspreview-list-container {
        width: 85%;
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

// Extra

#extra {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#last-child {
    border-bottom: 3px solid $lightcolor;
}
</style>