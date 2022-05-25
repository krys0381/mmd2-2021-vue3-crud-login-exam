<template>
    <div class="footer">
        <div class="footer-row row g-0">
            
            <div class="col-sm-1 p-0"></div>
            <div class="col-6 col-sm-2 p-0">
                <div class="logo-links-container">
                    <div id="logo-box"><img src="../assets/img/logo.svg" alt=""></div>
            
                    <div class="links-box"><a href="">TECHHUH SYD</a></div>
                </div>
            </div>

            <div class="col-6 col-sm-6 p-0">
                <div class="navigation">
                    <div class="nav">  
                        <router-link to="/">Homepage</router-link> |
                        <router-link to="/">About</router-link> |
                        <router-link to="/events">Events</router-link> |
                        <router-link to="/">Contact</router-link> |
                        <router-link to="/">Start-ups</router-link> |
                        <a href="https://techhubinvest.com/">Investors</a> |
                        <router-link to="/admin">Admin</router-link>
                    </div>
                </div>
                <router-view/>
            </div>
            <div class="col-sm-2 p-0">
                <div class="soc-container">
                    <div class="soc-links">
                        <a href=""><img src="../assets/img/linkedin.svg" alt=""></a>
                        <a href=""><img src="../assets/img/facebook.svg" alt=""></a>
                        <a href=""><img src="../assets/img/twitter.svg" alt=""></a>
                        <a href=""><img src="../assets/img/youtube.svg" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="col-sm-1 p-0"></div>

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
    width: 100%;

    // Logo

    #logo-box {
      display: flex;
      align-items: center;  
      img {
          object-fit: cover;
          height: 65px;
      }
    }

    // Links

    .links-box {
        display: flex;
        align-items: center;
        margin: 0 10px;

        a {
            text-align: center;
            text-decoration: none;
            font: normal normal 500 18px/27px Poppins;
            letter-spacing: 0px;
            color: $backgroundcolor;
            opacity: 1;

            &:hover {
                color: $accentlightcolor;
            }
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
    padding: 0 20px 0 0;

    a {
        font-weight: 500;
        color: $backgroundcolor;

        &.router-link-exact-active {
          color: $accentlightcolor;
        }
    }
}

// Soc. links

.soc-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;

    .soc-links {
        display: flex;
        width: 100%;

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

</style>