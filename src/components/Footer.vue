<template>
    <div class="footer">
        <div class="footer-row row g-0">

            <div class="col-6 col-sm-3 p-0">
                <div class="extra">
                    <div class="logo-links-container">
                        <div id="logo-box"><a href="/"><img src="../assets/img/logo.png" alt=""></a></div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 p-0">
                <div class="navigation">
                    <div class="nav">  
                        <router-link to="/about">About</router-link> 
                        <router-link to="/events">Events</router-link> 
                        <router-link to="/contact">Contact</router-link> 
                        <a href="">FAQ</a>
                        <a href="">Start-ups</a>
                        <a href="https://techhubinvest.com/">Investors</a>
                    </div>
                </div>
                <router-view/>
            </div>
            <div class="col-sm-3 p-0">
                <div class="extra">
                    <div class="soc-container">
                        <div class="soc-links">
                            <a href=""><img src="../assets/img/linkedin.svg" alt=""></a>
                            <a href=""><img src="../assets/img/facebook.svg" alt=""></a>
                            <a href=""><img src="../assets/img/twitter.svg" alt=""></a>
                            <a href=""><img src="../assets/img/youtube.svg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 p-0">
                <div id="rights-container">
                    <div id="rights"><p>2022 © Techhub Syd. All rights reserved.</p></div>
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
@import "../assets/shared.scss";
@include light-paragraph1;

.footer-row {
    display: flex;
    background-color: $shadecolor;
    padding: 40px 0 40px 0;
}

.logo-links-container {
    display: flex;
    justify-content: flex-start;
    width: 85%;

    // Logo

    #logo-box {
        display: flex;
        align-items: center;
        width: 75%;

        img {
          width: 100%;
          object-fit: cover;
        }
    }
}

// Navigation 

.navigation {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: $backgroundcolor;
        text-decoration: none;
        font: normal normal 500 18px/27px Poppins;
        letter-spacing: 0px;
        margin: 0 15px;

        &:hover {
            color: $accentlightcolor;
        }

        &.router-link-exact-active {
            border-bottom: 2px solid $lightcolor;
        }
    }
}

// Soc. links

.soc-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 85%;

    .soc-links {
        display: flex;
        width: 75%;

        a {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;

            img {
                object-fit: cover;
                width: 65%;
                padding: 5px;
            }
        }
    }
}

#rights-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
}

// Extra 

.extra {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>